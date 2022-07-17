//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。特定のスイッチがONな場合だけ表示されます。
 *
 * @param isOnlineSwitch
 * @desc 表示条件のスイッチID
 * @default 80
 * 
 */

(function() {

    // set parameters
    var parameters = PluginManager.parameters('infoWindow');
    var isOnlineSwitch = Number(parameters['isOnlineSwitch'] || 80);

	// マップ上にウィンドウ表示するよ宣言
	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		Scene_map_start.call(this);
		this._InfoWindow = new Window_Info();
		this.addWindow(this._InfoWindow);
	};
    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
		_Scene_Map_update.call(this);
		// 表示条件スイッチ
		if ($gameSwitches.value(isOnlineSwitch)) {
			this._InfoWindow.setText();
		}
    };
	
	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 940;
		var y = 28;
	    var width = 60;
	    var height = 60;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
		this.contents.clear();
		// this.changeTextColor(this.textColor(16));
		this.drawIcon(79, 1, 1);
		// this.drawText("キャンセル", 40, 1);
		if (TouchInput.x > 940 && TouchInput.x < 1000 && TouchInput.y > 28 && TouchInput.y < 88 && TouchInput.isTriggered()) {
			console.log('Pressed!');
			SceneManager.push(Scene_Menu);
			this._events.moved = false;
		} else {
			this._moved = this._events.moved;
		}
	};
	
	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 12;
	};
	// ウィンドウの色調
	Window_Info.prototype.updateTone = function() {
    	this.setTone(0, 0, 128);
	};
	
})();