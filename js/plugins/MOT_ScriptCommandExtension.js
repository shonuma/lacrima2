//=============================================================================
// MOT_ScriptCommandExtension.js (プラグインパラメータが存在しているいないので、ファイル名を変更しても中身には問題ありません)
//=============================================================================
// MOTplugin - イベントのスクリプト拡張
// 作者: 翠 (http://midori.wp.xdomain.jp/), merusaia（https://twitter.com/merusaia エラー時の画面遷移に対応。）
// Version: 1.2
// 最終更新日: 2016/03/11(翠), 2016/09/26(merusaia)
//=============================================================================
/*:
 * @plugindesc イベントのスクリプト拡張 Ver.1.2
 * @author 翠、merusaia（エラー時の画面遷移に対応）
 * @help
 *
 * ■更新履歴
 *  2016/03/11 - 公開(翠)
 *  2016/06/07 エラー時の画面遷移に対応(merusaia)
 *  2016/06/08 スクリプト命令エラー時に原因箇所を特定して全文表示＆ゲーム強制終了を一時的に回避する機能を追加(merusaia)
 *  2016/09/26 ライセンス情報をMITライセンスに変更(merusaia。翠さんの許可済み)
 * 
 *
 * ■プラグイン概要
 *  スクリプト連続で配置した場合、一つの
   スクリプトとして判別しますので行数制限が気にならなくなります。
 * ■使用方法
 *  イベントのスクリプトを連続で配置してください。
 * 
 * ↓以下、merusaiaが追記。
 * 
 * ・翠さんが作成された、エディタ上でスクリプト命令を２個以上並べると一つのスクリプトとして使える、超便利なプラグインです。
 *  これで気兼ねなく、エディタでも１２行以上のスクリプトを打てます。
 *  スクリプトを多用する人は、是非使ってみてください。
 * 
 * ・エラー遷移にも対応しました(2016/06/08)。
 *  ツクールMVでは、エディタ内のスクリプト命令でエラーが発生した場合、その原因特定が、非常に困難です。
 *  ですので、少しプラグインを改造して、エディタのスクリプト命令中にエラーが発生した場合は、強制終了を防ぎ、
 *  該当スクリプト命令の全文とスタックトレースを表示させる機能を付けました。
 *  これで、テストプレイ中、エラーの原因特定が困難なままゲームが強制終了してしまったり、
 *  本番ゲーム中、強制終了でユーザさんの大事なプレイデータが消える心配が少なくなります。
 *  もし、この機能が必要なければ、102行目～118行目 （try～catchの部分）を削除してください。
 * 
 * ・merusaiaが追記したものについては、著作権は放棄しますので、ご自由に改変して使ってください。バグ報告などは、ツイッター ＠merusaia まで。
 * 
 * ■競合について
 * ・Game_Interpreter.prototype.command355 を上書きしています。競合にご注意ください。
 *  スクリプト命令の実行時に何かしらの処理を行うプラグインとは、併用できません。
 *  どうしても併用したい場合は、このソースの中に追記してください。
 * 
 * ■利用規約 
 * -翠さんの許可をいただき、MITライセンスに変更しました（2016/09/26）。
 * 
 * （以下、翠さん記述）
 * -クレジットの表記
 *  クレジットの表記は基本的に不要です。
 *  表記する場合はホームページを参照してください。
 *  営利目的での使用する場合は表記してください。
 *
 *  表記例
 *  スクリプト素材 翠 (http://midori.wp.xdomain.jp/)
 *  または
 *  スクリプト素材 HM Project (http://midori.wp.xdomain.jp/)
 *
 *-スクリプトの改変/配布
 *  スクリプトの改変はご自由に行ってください。
 *  改変を行って発生したバグ等には対処しません。
 *
 *-スクリプトの再配布
 *  改造した物を配布する場合、オリジナルのクレジットを残してください。
 *
 * -使用可能なゲームのジャンル
 *  エログロなんでも使用可能です。
 * 
 * -その他
 * MITライセンスについて。
 * http://wisdommingle.com/mit-license/
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 * 
 */
 
 
(function() {
    
    'use strict'; // 厳格モード。構文エラーチェックの強化。高速化にも貢献。詳細は以下。 http://analogic.jp/use-strict/

    // ------翠さんのScriptCommandExtension.jsのメイン部分。スクリプト命令(655と355)を連続して検出すると、それを連結して一つの命令とみなします。 -----------------
    Game_Interpreter.prototype.command355 = function() {
        var script = this.currentCommand().parameters[0] + '\n';
        while (this.nextEventCode() === 655) {
            this._index++;
            script += this.currentCommand().parameters[0] + '\n';
        }
        while (this.nextEventCode() === 355) {
            this._index++;
            script += this.currentCommand().parameters[0] + '\n';
            while (this.nextEventCode() === 655) {
                this._index++;
                script += this.currentCommand().parameters[0] + '\n';
            }
        }
        // 以下、元ソースのeval(script);だけだと、スクリプトによっては「undefined is not function」エラーになり原因特定が困難な時があるので、try-catchで原因を調べられるようにしました（merusaia）。
        try{
            eval(script);
        } catch (e) {
            // 本番時は、例外発生時は極力スルーします（エラーで強制終了して、ユーザさんがせっかく遊んだプレイデータ喪失を防ぐため）。
            if (!Utils.isOptionValid('test')) {
                // (i)本番時は、例外が発生したことだけを、consoleに出力し、例外が発生したスクリプトは飛ばします（複数行にまたがるのを一気に飛ばすこともあるので注意）。
                console.error(e.message);
                console.error(e.filename, e.lineno);
                console.log('★例外発生箇所: '+script);
            }else{
                // (ii)テストプレイ時は、該当のスクリプトの先頭3行を、alertして画面に表示します。（これで原因を特定しやすくなります）
                console.error(e.message);
                console.error(e.filename, e.lineno);
                console.log('★例外発生: '+script);
                eval(script); // もっかい実行して、わざとエラーにして落ちます。（テストプレイ時も強制終了を無視したい場合、この行をコメントしてください）。
            }
        }
        return true;
    };
    // ------翠さんのScriptCommandExtension.jsのメイン部分、終----------------------------

})();
