//=============================================================================
// MenuCommandClose.js	2018/03/22
// The MIT License (MIT)
//=============================================================================

/*:
 * @plugindesc メニューコマンドに「閉じる」を追加するプラグイン
 * @author レリーズ
 *
 *
 * @help メニューコマンドに「閉じる」を追加するプラグインです。
 *
 * プラグインコマンドはありません。
 *
 * 「閉じる」の文言を変えたい場合は、
 * スクリプト内の"閉じる"の部分を書き換えてください。
 */

(function(_global) {

var _Window_MenuCommand_prototype_makeCommandList = Window_MenuCommand.prototype.makeCommandList;
Window_MenuCommand.prototype.makeCommandList = function() {
    _Window_MenuCommand_prototype_makeCommandList.call(this);
    this.addCommand("閉じる", 'cancel',true);
};

})(this);