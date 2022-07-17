//=============================================================================
// ZcustomPlugin.js
//=============================================================================

/*:
 * @plugindesc Original Plugin 0001
 * @author leo1109
 * 
 * @param isOnlineSwitch
 * @desc number of switch this plugin worked
 * @default 80
 */

/*:ja
 * @plugindesc オリジナルプラグイン0001
 * @author leo1109
 * 
 * @param isOnlineSwitch
 * @desc 表示条件のスイッチID
 * @default 80
 */

(function() {
    // set parameters
    var parameters = PluginManager.parameters('infoWindow');
    var isOnlineSwitch = Number(parameters['isOnlineSwitch'] || 80);
    // オンライン判定（直近N秒にアクセスがあったかどうか）
    var isOnlineSecond = 30 * 1000;
    // ID23がアクターを示す
    var actorImageId = 23;
    // マップID5は新宿
    var mapId = 5

    // Base64関数
    var Base64 = {
        encode: function(str) {
            return btoa(unescape(encodeURIComponent(str)));
        },
        decode: function(str) {
            return decodeURIComponent(escape(atob(str)));
        }
    };

    // Firebase Init
    var firebaseConfig = {
        apiKey: "AIzaSyDtTsZfT7Per3CipTRyBVsB8hEyKvN_gtk",
        authDomain: "sonuma-9e2af.firebaseapp.com",
        databaseURL: "https://sonuma-9e2af.firebaseio.com",
        projectId: "sonuma-9e2af",
        storageBucket: "sonuma-9e2af.appspot.com",
        messagingSenderId: "360047546627",
        appId: "1:360047546627:web:f44a1823a7c85f5d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    var users_collection = "users";
    var users_meta_collection = "users-meta";

    db.collection(users_meta_collection).where("state", "==", "online")
    .onSnapshot(function(querySnapshot) {
        if ($gameSwitches !== null) {
            if ($gameSwitches.value(isOnlineSwitch)) {
                var players = [];
                var docDataList = [];
                // 現在時刻
                var currentTimestamp = new Date().getTime();

                // オンラインのイベントメンバーのIDを非表示（消去）する
                if ($gameSystem._zCustomPlugin_onlineMemberIds !== undefined) {
                    console.log($gameSystem._zCustomPlugin_onlineMemberIds);
                    for (var i = 0; i < $gameSystem._zCustomPlugin_onlineMemberIds.length; i++) {
                        $gameMap.eraseEvent($gameSystem._zCustomPlugin_onlineMemberIds[i]);
                    }
                    // 空っぽにする
                    $gameSystem._zCustomPlugin_onlineMemberIds = [];
                }
                querySnapshot.forEach(function(doc) {
                    // オンライン判定時刻より手前だったら代入
                    var thresholdTime = currentTimestamp - isOnlineSecond;
                    console.log("CURRENT  : " + thresholdTime);
                    console.log("UPDATEDAT: " + doc.data().updatedAt);
                    // オフライン判定時刻以降のタイムスタンプならOK
                    if (doc.data().updatedAt > thresholdTime) {
                        players.push(doc.data().name);
                        docDataList.push(doc.data());
                        // キャラクタ座標をセット
                        // 自分以外だったらアバターをセットする
                        if (doc.id != $gameSystem._zCustomPlugin_myId) {
                            // 予め読み込んだプラグインのイベント複製関数を呼ぶ
                            // 同じマップのイベントID:5をキャラクタ座標にセットする
                            var docData = doc.data();

                            var args = [5, docData.x, docData.y];
                            Game_Interpreter.prototype.execMakeEvent(args);
                            // イベントIDをすかさず取得する(変数30番に代入する)
                            Game_Interpreter.prototype.execGetLastSpawnEventId([30]);
                            var eventId = $gameVariables.value(30);
                            // セルフスイッチをONにして画像を変える
                            var selfSwitchName = "A";
                            switch(docData.actorImageIndex) {
                                case 1:
                                    selfSwitchName = "B";
                                    break;
                                case 2:
                                    selfSwitchName = "C";
                                    break;
                                case 3:
                                    selfSwitchName = "D";
                                    break;
                                default:
                                    break;
                            }
                            key = [mapId, eventId, selfSwitchName];
                            $gameSelfSwitches.setValue(key, true);
                            // オンラインメンバーのイベントIDを追記する
                            if ($gameSystem._zCustomPlugin_onlineMemberIds === undefined) {
                                $gameSystem._zCustomPlugin_onlineMemberIds = [];
                            }
                            console.log($gameSystem._zCustomPlugin_onlineMemberIds);
                            $gameSystem._zCustomPlugin_onlineMemberIds.push(eventId);
                        } else {
                            console.log("It's me!");
                        }
                    } else {
                        // 非同期で実行
                        console.log("Offline detected, set to offline.")
                        var docData = doc.data();
                        var docId = doc.id;
                        docData['state'] = 'offline';
                        console.log(docData);
                        // IDをセット
                        db.collection(users_meta_collection).doc(docId)
                        .set(docData)
                        .then(function() {
                            console.log("Offline set success.");
                        }).catch(function() {
                            console.log("Offline set error.");
                        });
                    }
                });
                // Player情報の配列
                console.log(docDataList);
                console.log(players.length + "player(s) are online: ", players.join(","));
                // オンラインの人数を更新
                $gameVariables.setValue(22, players.length);
                // オンラインのメンバーリスト
                $gameSystem._zCustomPlugin_onlineMembers = players;
            }
        }
    });


    var pluginName = "ZcustomPlugin";
    
    // プラグインコマンドの定義
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args){
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if(command === pluginName){
            switch(args[0]){
                case 'getMyId':
                    $gameSystem.ZcustomPlugin_getMyId(args[1]);
                    break;
                case 'setMyId':
                    $gameSystem.ZcustomPlugin_setMyId(args[1]);
                    break;
                case 'getOnlineMembers':
                    $gameSystem.ZcustomPlugin_getOnlineMembers(args[1]);
                    break;
            }
        }
    };

    var _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function(){
        console.log('call initialize');
	    _Game_System_initialize.call(this);
        this._zCustomPlugin_myId = "";
        this._zCustomPlugin_myName = "";
        this._zCustomPlugin_onlineMembers = [];
        this._zCustomPlugin_onlineMemberIds = [];
    };
    
    // 自分の情報を表示
    Game_System.prototype.ZcustomPlugin_getMyId = function() {
        $gameMessage.add("Your ID is " + this._zCustomPlugin_myId + "\n");
        $gameMessage.add("Your Name is " + this._zCustomPlugin_myName);
    };

    // 最大10人のオンラインメンバーを表示する
    Game_System.prototype.ZcustomPlugin_getOnlineMembers = function() {
        var players = this._zCustomPlugin_onlineMembers;
        $gameMessage.add("\\<### Online member list (max10) ###\\<");
        for (var i = 0; i < players.length; i++) {
            $gameMessage.add("\\<* " + players[i] + "\\<");
        }
    };

    // 自分の情報をセット
    Game_System.prototype.ZcustomPlugin_setMyId = function() {
        var playerName = $gameActors.actor(1)._name;
        var playerInfo = {
            name: playerName,
        };
        var that = this;
        console.log(playerInfo);
        // FirebaseにIDをセットする
        db.collection(users_collection)
        .add(playerInfo)
        .then(function(docRef) {
            var message = "Your ID is " + docRef.id;
            console.log(message);
            // $gameMessage.add(message);
            that._zCustomPlugin_myId = docRef.id;
            that._zCustomPlugin_myName = playerName;
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    };

    var prev_X = -1;
    var prev_Y = -1;
    // N秒おきに定期的に自分の座標を送る
    setInterval(function(){
        if ($gameSwitches !== null) {
            if ($gameSwitches.value(isOnlineSwitch)) {
                var sent_X = $gamePlayer.x;
                var sent_Y = $gamePlayer.y;
                // micro second
                var updatedAt = new Date().getTime();
                var actorImageIndex = $gameVariables.value(actorImageId);

                // 座標が変化していなかったら送らない
                if (prev_X == sent_X && prev_Y == sent_Y) {
                    // console.log("Not moved, skiped.");
                } else {
                    // console.log("Move detected.");
                    var playerInfo = {
                        x: sent_X,
                        y: sent_Y,
                        state: "online",
                        name: $gameSystem._zCustomPlugin_myName,
                        updatedAt: updatedAt,
                        actorImageIndex: actorImageIndex,
                    };
                    // users-metaに、userと同じIDでコレクションを作る
                    db.collection(users_meta_collection).doc($gameSystem._zCustomPlugin_myId)
                    .set(playerInfo)
                    .then(function() {
                        // console.log("Set success.");
                        prev_X = sent_X;
                        prev_Y = sent_Y;
                    }).catch(function() {
                        // console.log("Set error.");
                    });
                }
            }
        }
    }, 2000);

    /*
    $(window).keyup(function(e) {
        if ($gameSwitches.value(71)) {
            // 左,上,右,下(37,38,39,40),
            var keyCode = e.keyCode;
            // $gameMessage.add(keyCode);
            if (keyCode == 13) {
                db.collection("users").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        var key0001 = doc.data()['key0001'];
                        console.log(doc.data());
                        $gameMessage.add(key0001);
                    });
                });
            }
        }
    });*/

    /*
    $(window).click(function(e) {
        if ($gameSwitches.value(71)) {
            $gameMessage.add(e);
        }
    });*/

    /*
    setInterval(
        function() {
            // 新宿ONのスイッチの後に実施
            if ($gameSwitches.value(71)) {
                var message = $gamePlayer.x + "/" + $gamePlayer.y;
                $gameMessage.add(message);
                $.ajax({
                    method: 'GET',
                    url: 'https://sonuma-firestore.appspot.com/v1/api/get',
                    success: function(data) {
                        $gameMessage.add(data);
                    }
                });
            }
        },
        3000
    );
    */
})();