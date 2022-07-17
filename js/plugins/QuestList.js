//=============================================================================
// QuestList.js
//=============================================================================

/*:
 * @plugindesc クエストリストを管理するプラグイン
 * @author leo1109
 *
 * @help
 * クエストの管理を行います.
 * 
 * クエストアイテムは「隠しアイテムA」にストックされます.
 * クエスト一覧を表示する場合、アイテムの選択で、「隠しアイテムA」の一覧を取得して下さい.
 * クエストの受諾と完了の間には十分に時間を開けて下さい. 間隔が短い場合, 完了メッセージが表示されません.
 * 
 * offSwitchDuringProcessingにスイッチ番号を指定した場合,
 * 対象のスイッチを処理前にOFF, 処理終了後にONとします.
 * 
 * 以下のプラグインコマンドがあります.
 * 
 * 
 * 以下のコマンドは効果音が設定できますが, 音量が0の場合は再生されません.
 * 
 * QuestList set <ItemId> <window, or silent>
 * - クエストをセットします.
 * - ItemID: クエスト内容を説明するアイテムIDをセットします. アイテム属性は隠しアイテム2として下さい.
 *   - 既に対象のアイテムを持っている場合は何も起きません.
 * - 追加されたクエストは, viewで閲覧できます.
 *   - window: クエストを受諾したことをメッセージに表示します.
 *   - silent: 何もメッセージを表示しません. (効果音もなりません)
 *
 * QuestList delete <ItemId> <displayType: success, failed, silent>
 * - クエストを削除します. 削除されたクエストは一覧に表示されなくなります.
 * - ItemID: クエスト内容を説明するアイテムIDをセットします. 本アイテムが削除されます.
 *   - 対象のアイテムが存在しない場合は何も起きません.
 * - displayType
 *   - success: クリアしたとしてメッセージを表示します.
 *   - failed: 失敗したとしてメッセージを表示します.
 *   - silent: 何もメッセージを表示しません. (効果音もなりません)
 * 
 * @param offSwitchDuringProcessing
 * @desc 処理中にオフにするスイッチ. 0ならオフにしない. デフォルトは0.
 * @default 0
 * 
 * @param setSuffix
 * @desc クエストを受けた際に表示される接尾語です.
 * クエストアイテム名 + (ここの文言).
 * @default \nを受けました。
 * 
 * @param successSuffix
 * @desc クエストを成功した際に表示される接尾語です.
 * クエストアイテム名 + (ここの文言).
 * @default \nを達成しました！
 * 
 * @param failedSuffix
 * @desc クエストを失敗した際に表示される接尾語です.
 * クエストアイテム名 + (ここの文言).
 * @default \nに失敗しました...
 * 
 * @param questTextColor
 * @desc クエストメッセージの表示色（\c[XX]）を設定します、
 * デフォルトは0で、接尾語は\c[0]で表示されます.
 * @default 0
 *
 * @param setQuestSe
 * @desc クエスト受諾時に再生するSEを指定します.
 * @default Decision1
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param setQuestSeVolume
 * @desc クエスト受諾時に再生するSEのボリュームを設定します.
 * @default 0
 * 
 * @param successQuestSe
 * @desc クエストクリア時に再生するSEを指定します.
 * @default Heal3
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param successQuestSeVolume
 * @desc クエストクリア時に再生するSEのボリュームを設定します.
 * @default 0
 * 
 * @param failedQuestSe
 * @desc クエスト失敗時に再生するSEを指定します.
 * @default Darkness2
 * @require 1
 * @dir audio/se/
 * @type file
 * 
 * @param failedQuestSeVolume
 * @desc クエスト失敗時に再生するSEのボリュームを設定します.
 * @default 0
 */

(function() {
    var pluginName = "QuestList";
    var parameters = PluginManager.parameters(pluginName);
    // パラメータのセット
    var offSwitchDuringProcessing = Number(parameters['offSwitchDuringProcessing'] || 0);
    var setSuffix = parameters['setSuffix'] || '\nを受けました。';
    var successSuffix = parameters['successSuffix'] || '\nを達成しました！';
    var failedSuffix = parameters['failedSuffix'] || '\nに失敗しました...';
    var questTextColor = parameters['questTextColor'] || "0";

    var setQuestSe = parameters['setQuestSe'] || 'Decision1';
    var successQuestSe = parameters['successQuestSe'] || 'Heal3';
    var failedQuestSe = parameters['failedQuestSe'] || 'Darkness2';
    var setQuestSeVolume = Number(parameters['setQuestSeVolume'] || 0);
    var successQuestSeVolume = Number(parameters['successQuestSeVolume'] || 0);
    var failedQuestSeVolume = Number(parameters['failedQuestSeVolume'] || 0);

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args){
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if(command === pluginName){
            switch(args[0]){
                case 'set':
                    $gameSystem.QuestList_set(args[1], args[2]);
                    break;
                case 'delete':
                    $gameSystem.QuestList_delete(args[1], args[2]);
                    break;
            }
        }
    };

    var _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function(){
        // console.log('call initialize');
	    _Game_System_initialize.call(this);
    };

    // クエストアイテムを増やす
    Game_System.prototype.QuestList_set = function(questItemId, displayType) {
        // スイッチをOFFにする
        if (offSwitchDuringProcessing != 0) {
            $gameSwitches.setValue(offSwitchDuringProcessing, false);
        }
        // 既にアイテムを持ってたら何もしない
        var holdCount = $gameParty.numItems($dataItems[questItemId]);
        if (holdCount == 0) {
            // アイテムを増やす
            $gameParty.gainItem($dataItems[questItemId], 1);
            if (displayType == "window") {
                if (setQuestSeVolume >= 0) {
                    AudioManager.playSe({"name": setQuestSe, "volume": setQuestSeVolume, "pitch":100, "pan":0});                
                }
                // 背景を暗くする
                $gameMessage.setBackground(1);
                $gameMessage.add("\\c[" + questTextColor + "]" + $dataItems[questItemId].name + "\\c[0]" + setSuffix);
            }
        }
        // スイッチをONにする
        if (offSwitchDuringProcessing != 0) {
            $gameSwitches.setValue(offSwitchDuringProcessing, true);
        }
    };

    // クエストアイテムを減らす
    Game_System.prototype.QuestList_delete = function(questItemId, displayType) {
        // スイッチをOFFにする
        if (offSwitchDuringProcessing != 0) {
            $gameSwitches.setValue(offSwitchDuringProcessing, false);
        }
        // アイテムを持っていなければ何もしない
        var holdCount = $gameParty.numItems($dataItems[questItemId]);
        if (holdCount != 0) {
            // アイテムを減らす
            $gameParty.loseItem($dataItems[questItemId], 1);
            if (displayType == "success") {
                if (setQuestSeVolume >= 0) {
                    AudioManager.playSe({"name": successQuestSe, "volume": successQuestSeVolume, "pitch":100, "pan":0});
                }
                // 背景を暗くする
                $gameMessage.setBackground(1);
                $gameMessage.add("\\c[" + questTextColor + "]" + $dataItems[questItemId].name + "\\c[0]" + successSuffix);
            } else if (displayType == "failed") {
                if (failedQuestSeVolume >= 0) {
                    AudioManager.playSe({"name": failedQuestSe, "volume": failedQuestSeVolume, "pitch":100, "pan":0});
                }
                // 背景を暗くする
                $gameMessage.setBackground(1);
                $gameMessage.add("\\c[" + questTextColor + "]" + $dataItems[questItemId].name + "\\c[0]" + failedSuffix);
            }
        }
        // スイッチをONにする
        if (offSwitchDuringProcessing != 0) {
            $gameSwitches.setValue(offSwitchDuringProcessing, true);
        }
    };
	
})();