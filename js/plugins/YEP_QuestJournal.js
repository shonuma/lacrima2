//=============================================================================
// Yanfly Engine Plugins - Quest Journal System
// YEP_QuestJournal.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_QuestJournal = true;

var Yanfly = Yanfly || {};
Yanfly.Quest = Yanfly.Quest || {};
Yanfly.Quest.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 Insert a quest journal system into your game!
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * WARNING: This plugin is to be used with RPG Maker MV 1.5.0 or above! This is
 * because the MV 1.5.0 editor allows for this plugin to be made in an orderly
 * and efficient manner. Please make sure your RPG Maker MV software is up to
 * date before using this plugin.
 *
 * ---
 *
 * A quest journal is a very important tool provided by game developers for the
 * players. It lists various quests, missions, and objectives that the player
 * can pursue in order to progress further into the game. This can be helpful
 * in reminding the player what needs to be done in the event the player can
 * forget what things there are to do in a vast and large RPG world.
 *
 * This plugin places a quest journal system into your RPG Maker MV game. You
 * can set up how the quest journal appears, move its windows around and/or
 * reshape them to fit your game. There are 100 quest slots provided by this
 * plugin (more can be obtained through extension plugins) and each one of them
 * requires your attention in constructing individually.
 *
 * You can adjust the quest's title, display a difficulty level, remind the
 * player who the quest is from, where that quest is from, various dynamic
 * descriptions explaining the quest, a list of objectives to make, a list of
 * rewards that will be given to the player once the quest is complete, and any
 * subtext footnotes you may wish to insert into each quest.
 *
 * ---
 *
 * Keep in mind that while this plugin does enable a quest journal system into
 * your game, this plugin will NOT automate it. If you have a quest enabled, it
 * is still up to you to add the quest properly into the journal, set its many
 * objectives, when the other objectives appear, what the rewards are, and then
 * giving out the rewards yourself manually. The purpose of this plugin is to
 * simply serve as a visual record for your player to see what quests have been
 * handed down to him or her.
 *
 * ============================================================================
 * Instructions - Setting Up the Quest Category Window
 * ============================================================================
 *
 * The plugin parameter 'Quest Category Window' can actually be left as is by
 * default, but should you wish to customize it, here's what there is to know.
 *
 * ---
 *
 * Category Order
 * - This is the order in which the following categories appear in the menu:
 * available, completed, failed, all, cancel. Moving these around will let you
 * adjust how the menu is structured. If you do move them around, by default,
 * the first item will be selected at the start.
 * Default: ["available","completed","failed","all"]
 *
 * Available Text
 * - How the entry for the 'available' category appears. You can use text codes
 * here to give the appearance of icons and/or color. The %1 is a format option
 * that will allow you to display how many available quests there are.
 * Default: \i[192]Available (%1)
 *
 * Completed Text
 * - How the entry for the 'completed' category appears. You can use text codes
 * here to give the appearance of icons and/or color. The %1 is a format option
 * that will allow you to display how many completed quests there are.
 * Default: \i[191]Completed (%1)
 *
 * Failed Text
 * - How the entry for the 'failed' category appears. You can use text codes
 * here to give the appearance of icons and/or color. The %1 is a format option
 * that will allow you to display how many failed quests there are.
 * Default: \i[194]Failed (%1)
 *
 * All Text
 * - How the entry for the 'all' category appears. You can use text codes
 * here to give the appearance of icons and/or color. The %1 is a format option
 * that will allow you to display how many quests there are in total.
 * Default: \i[189]All Quests (%1)
 *
 * Cancel Text
 * - How the entry for the 'cancel' option appears. You can use text codes
 * here to give the appearance of icons and/or color. There is no format option
 * to be used with this text.
 * Default: \i[161]Close
 *
 * ---
 *
 * Window Settings
 * - If you wish to customize the category window, you can adjust the various
 * settings here to adjust its properties. However, keep in mind that unless
 * you are familiar with JavaScript, you can make errors here that can make the
 * windows not work in your game.
 *
 * Default: 
 *
 * X: 0
 * Y: 0
 * Width: Graphics.boxWidth / 3
 * Height: this.fittingHeight(this.numVisibleRows())
 * Rows: 4
 * Columns: 1
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Text Alignment: left
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 *
 * ============================================================================
 * Instructions - Setting Up the Quest List Window
 * ============================================================================
 *
 * The plugin parameter 'Quest List Window' can be modified to show the various
 * quest types. By default, the plugin will have the following quest types:
 * Main Quests, Side Quests, Character Quests, and Tutorial Quests. Here's what
 * there is to know about the Quest List Window.
 *
 * ---
 *
 * Show Types
 * - If this is enabled, it will allow for the Quest List Window to display the
 * various quest types. If this is disabled, then those quest types will not
 * appear and all quests will be displayed without their quest type as their
 * individual header.
 * Default: true
 *
 * Type Order
 * - This is the order for the quest list types and it also enables which types
 * will be available in the quest journal to display. You can use text codes
 * here to add icons and/or colors to the quest types. When you are typing out
 * the quest type names for the individual quest types to fall under, you can
 * omit the \i[x] and \c[x] codes, but everything else must be in tact.
 * Default: ["\\c[6]Main Quests","\\c[4]Side Quests","\\c[3]Character Quests",
 *           "\\c[5]Tutorial Quests"]
 *
 * List Open Symbol
 * - The symbol used to display to show a quest type is opened (showing all of
 * the quests listed under it) and not closed (not showing any of the quests
 * listed under it).
 * Default: -
 *
 * List Closed Symbol
 * - The symbol used to display to show a quest type is closed (not showing any
 * of the quests listed under it) and not opened (showing all of the quests
 * listed under it).
 * Default: +
 *
 * Type Text Format
 * - The text formating type display the quest types in the Quest List Window.
 * %1 will refer to the Open/Closed Symbol. %2 will be the quest type's name.
 * %3 will reveal the number of quests that are listed under this quest type.
 * Default: %1%2 (%3)
 *
 * Quest Indent
 * - This is how much to indent the regular quests if quest types are shown.
 * This is to help players distinguish quest types from regular quests, though
 * it isn't necessary if you plan on using icons for your quests and none for
 * your quest types.
 * Default: 0
 *
 * Show Empty
 * - If enabled, this will show quest types that are empty and have no quests
 * under them. Otherwise, if it is disabled, quest types that have no quests
 * will not appear in the quest list and can help reduce clutter.
 * Default: false
 *
 * Read Quest
 * - This is how the text appears for the 'Read Quest' command. This command
 * will only appear in the List Window if an extension plugin prompting the
 * extra actions list to appear.
 * Default: \i[121]Read Quest
 *
 * Cancel
 * - This is how the text appears for the 'Cancel' command. This command will
 * only appear in the List Window if an extension plugin prompting the extra
 * actions list to appear.
 * Default: \i[16]Cancel
 *
 * ---
 *
 * Window Settings
 * - If you wish to customize the category window, you can adjust the various
 * settings here to adjust its properties. However, keep in mind that unless
 * you are familiar with JavaScript, you can make errors here that can make the
 * windows not work in your game.
 * 
 * Default: 
 *
 * X: 0
 * Y: Graphics.boxHeight - height
 * Width: Graphics.boxWidth / 3
 * Height: Graphics.boxHeight - this.fittingHeight(4)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Standard Opacity: 255
 * Back Opacity: 192
 * Type Alignment: left
 * Quest Alignment: left
 * Window Skin: Window
 *
 * ============================================================================
 * Instructions - Setting Up the Quest Title Window
 * ============================================================================
 *
 * The plugin parameter 'Quest Title Window' can also be left alone by default,
 * but should you wish to alter it to fit your game's settings, here's what you
 * need to know.
 *
 * ---
 *
 * No Quest Title
 * - When there's no quest selected in the quest list window, this text will
 * appear in the quest title window. Otherwise, the selected quest's name will
 * appear above the data window. Text codes may be used here.
 * Default: \c[4]Quest Journal
 *
 * ---
 *
 * Window Settings
 * - If you wish to customize the category window, you can adjust the various
 * settings here to adjust its properties. However, keep in mind that unless
 * you are familiar with JavaScript, you can make errors here that can make the
 * windows not work in your game.
 *
 * X: Graphics.boxWidth - width
 * Y: 0
 * Width: Graphics.boxWidth * 2 / 3
 * Height: this.fittingHeight(1)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Text Alignment: center
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 *
 * ============================================================================
 * Instructions - Setting Up the Quest Data Window
 * ============================================================================
 *
 * The plugin parameter 'Quest Data Window' can be modified to show the various
 * information contained inside of a quest. This data is used by the player to
 * understand just what is required of the player to do in order to fulfill and
 * complete the quest. This window's settings can be left as is, but should you
 * wish to alter it to fit your game, read below:
 *
 * ---
 *
 * No Data Text
 * - This is the text to be displayed in the data window when there is no quest
 * currently selected by the quest list window. You can use text codes here to
 * make the text appear more vivid to your players.
 *
 * Default:
 * Welcome to the \c[4]Quest Journal\c[0].
 * 
 * Here, you can review over the various
 * quests given to you by people from all
 * over the world.
 *
 * Word Wrap Version (Requires YEP_MessageCore.js):
 * <WordWrap>Welcome to the \c[4]Quest Journal\c[0].
 * <br>
 * <br>Here, you can review over the various
 * quests given to you by people from all
 * over the world.
 *
 * Quest Data Format
 * - This format is how the data in the quest data window is shown to your
 * players. You can use various text codes to make your quest data window more
 * vivid to your players. %1 will reference the title without any icons or
 * color text codes. %2 will reference the quest's difficulty level. %3 will be
 * who the quest is from. %4 will display where the quest is from. %5 will show
 * the quest's current description, which can change midway through the quest.
 * %6 will show the various objectives the player needs to achieve. %7 will
 * show any rewards the player can earn. And if there are any, %8 will show the
 * subtext for the quest.
 *
 * Default:
 * \{%1\}
 * \c[4]Level:\c[0] %2
 * \c[4]From:\c[0] %3
 * \c[4]Location:\c[0] %4
 * 
 * \c[4]Description:\c[0]
 * %5
 * 
 * \c[4]Objectives:\c[0]
 * %6
 * 
 * \c[4]Rewards:\c[0]
 * %7
 * 
 * %8
 *
 * Word Wrap Version (Requires YEP_MessageCore.js):
 * <WordWrap>\{%1\}
 * <br>\c[4]Level:\c[0] %2
 * <br>\c[4]From:\c[0] %3
 * <br>\c[4]Location:\c[0] %4
 * <br>
 * <br>\c[4]Description:\c[0]
 * <br>%5
 * <br>
 * <br>\c[4]Objectives:\c[0]
 * <br>%6
 * <br>
 * <br>\c[4]Rewards:\c[0]
 * <br>%7
 * <br>
 * <br>%8
 *
 * Uncleared Objective
 * - This is the text format that appears for each objective that is neither
 * completed nor failed. %1 will be replaced with the objective's text.
 * Default: \i[160]%1
 * 
 * Completed Objective
 * - If an objective is completed, this text format will be used instead.
 * %1 will be replaced with the objective's text.
 * Default: \i[165]%1
 *
 * Failed Objective
 * - If an objective is failed, this text format will be used instead.
 * %1 will be replaced with the objective's text.
 * Default: \i[162]%1
 *
 * Unclaimed Reward
 * - This is the text format that appears for each reward item that is neither
 * claimed nor denied. %1 will be replaced with the reward's text.
 * Default: \i[160]%1
 *
 * Claimed Reward
 * - If a reward has been claimed, this text format will be used instead.
 * %1 will be replaced with the reward's text.
 * Default: \i[163]%1
 *
 * Denied Reward
 * - If a reward has been denied, this text format will be used instead.
 * %1 will be replaced with the reward's text.
 * Default: \i[161]%1
 *
 * Load Delay
 * - This is the amount of frames the data window will wait before loading a
 * quest's data onto the window itself. This is to prevent overburdening the
 * game engine by loading every single quest that the cursor passes through,
 * and instead, waits until the cursor has settled on a particular quest entry
 * for x amount of frames before loading it.
 * Default: 30
 *
 * ---
 *
 * Window Settings
 * - If you wish to customize the category window, you can adjust the various
 * settings here to adjust its properties. However, keep in mind that unless
 * you are familiar with JavaScript, you can make errors here that can make the
 * windows not work in your game.
 *
 * X: Graphics.boxWidth - width
 * Y: Graphics.boxHeight - height
 * Width: Graphics.boxWidth * 2 / 3
 * Height: Graphics.boxHeight - this.fittingHeight(1)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 * Scroll Speed: 4
 * 
 * ============================================================================
 * Instructions - Setting Up New Quests
 * ============================================================================
 *
 * By default, there aren't any quests made for you. You must set each one up
 * manually. Go into the plugin parameters for YEP_QuestJournal.js and look for
 * the ---Quest List--- section. Each of those entries starts off empty.
 * However, if you decide to modify it, you'll be greeted with a template that
 * explains how to set up your quests. Here is what each parameter does:
 *
 * ---
 *
 * Title
 * - This is the title of your quest. It will show up in three places: the
 * quest list, the quest title window, and if you format it to show in the data
 * window, it will appear there as well. You can use text codes to change the
 * color of the quest or to give the quest icons.
 *
 * Type
 * - This is the quest type. If you decide to show quest types from the list
 * window, this will be where this quest will be listed under. The template has
 * a drop down window for a few of the popular quest types, but you can enter
 * in your own quest type. Keep in mind that this is case sensitive and will
 * require you to type out the quest type correctly. You can, however, omit any
 * \i[x] or \c[x] text codes.
 *
 * Difficulty
 * - No mechanical purpose. It's just there to label a certain difficulty level
 * for the quest. You can insert any kind of text you wish here and it will be
 * displayed in the quest data window if you decide to keep it in there.
 *
 * From
 * - No mechanical purpose. This can be used to state which character in your
 * game issued this quest so the player can have a reference point in knowing
 * who to return to when it becomes time to deliver the quest results.
 *
 * Location
 * - No mechanical purpose. This can be used to state where the quest has
 * originated from, and can reduce the amount of effort the player needs to in
 * order to figure out where the quest came from.
 *
 * Description
 * - No mechanical purpose. This is often used to describe the contents of the
 * quest to the player and provide a set of general instructions as to what the
 * player has to actually do. You can provide multiple descriptions. However,
 * only the first description will be visible by default. If you do provide
 * multiple descriptions, you can change the entry using the plugin command:
 * 'Quest x Change Description Entry To y' to alter the description entry to
 * display something else midway through a quest.
 *
 * Objectives List
 * - No mechanical purpose to the game but does have mechanical aspects. The
 * objectives list is commonly used to display a specific set of instructions
 * the player needs to do in order to complete the quest. Multiple sets of
 * objectives can be displayed to indicate multiple objectives that need to be
 * fulfilled by the player.
 *
 * Visible Objectives
 * - This is a list of the set of objectives that will be visible by default
 * when the quest is added to the game's quest journal. Each number entry in
 * there refers to the objective ID (their order position) found in the
 * 'Objectives List' plugin parameter.
 *
 * Rewards List
 * - No mechanical purpose to the game but does have mechanical aspects. The
 * rewards list is to show what the player has to gain as a result of finishing
 * the quest. Multiple sets of rewards can be displayed to indicate the player
 * will receive more than just one type of reward.
 *
 * Visible Rewards
 * - This is a list of the set of rewards that will be visible by default when
 * the quest is added to the game's quest journal. Each number entry in there
 * refers to the reward ID (their order position) found in the 'Rewards List'
 * plugin parameter.
 *
 * Subtext
 * - No mechanical purpose. This is usually used as a footer to provide the
 * player a message that doesn't fit elsewhere in the data window. You can use
 * this however you like or don't use it at all. Multiple sets of subtexts can
 * be used here in case you wish to update the subtext midway through a quest.
 *
 * ============================================================================
 * Main Menu Manager - Positioning the Quest Journal Command
 * ============================================================================
 *
 * For those using the Main Menu Manager and would like to position the Quest
 * command in a place you'd like, use the following format:
 *
 *       Name: Yanfly.Param.QuestCmdName
 *     Symbol: quest
 *       Show: $gameSystem.isShowQuest()
 *    Enabled: $gameSystem.isEnableQuest()
 *        Ext: 
 *  Main Bind: this.commandQuest.bind(this)
 * Actor Bind: 
 *
 * Insert the above setup within a Main Menu Manager slot. Provided you copy
 * the exact settings to where you need it, it will appear there while using
 * all of the naming, enabling, disabling, hiding, and showing effects done by
 * the plugin parameters.
 *
 * Remember to turn off 'Auto Place Command' from the plugin parameters.
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * For this plugin, you can use various script calls for certain events to make
 * checks on a quest's progress. Here are the different event types and the
 * various script calls you can use with them:
 *
 *
 * --- Control Variables Event's Script Calls ---
 *
 *
 * $gameSystem.totalQuestsAvailable()
 * - Sets the variable's value to the number of available quests.
 *
 * $gameSystem.totalQuestsCompleted()
 * - Sets the variable's value to the number of completed quests.
 *
 * $gameSystem.totalQuestsFailed()
 * - Sets the variable's value to the number of failed quests.
 *
 * $gameSystem.totalQuestsKnown()
 * - Sets the variable's value to the total number of quests known.
 *
 * $gameSystem.totalQuestsInGame()
 * - Sets the variable's value to the total number of quests in the game.
 *
 * $gameSystem.totalQuestTypes(category, type)
 * - Replace 'category' with either 'available', 'completed', 'failed', or
 * 'all' to designate the category. Replace 'type' with the quest type
 * (ie. 'Main Quests', 'Side Quests', 'Character Quests', etc). Include the
 * quotes around the category and type
 * Example: $gameSystem.totalQuestTypes('all', 'Main Quests')
 *
 * $gameSystem.getQuestDescriptionIndex(questId)
 * - Replace 'questId' with the ID of the quest you're looking for. This will
 * set the variable to show which description is being used currently.
 * Example: $gameSystem.getQuestDescriptionIndex(50)
 *
 * $gameSystem.totalVisibleQuestObjectives(questId)
 * - Replace 'questId' with the ID of the quest you're looking for. This will
 * set the variable to show how many quest objectives are visible currently for
 * the selected quest.
 * Example: $gameSystem.totalVisibleQuestObjectives(50)
 *
 * $gameSystem.totalQuestObjectives(questId)
 * - Replace 'questId' with the ID of the quest you're looking for. This will
 * set the variable to show how many quest objectives are total for the
 * selected quest's settings.
 * Example: $gameSystem.totalQuestObjectives(50)
 *
 * $gameSystem.totalVisibleQuestRewards(questId)
 * - Replace 'questId' with the ID of the quest you're looking for. This will
 * set the variable to show how many quest rewards are visible currently for
 * the selected quest.
 * Example: $gameSystem.totalVisibleQuestRewards(50)
 *
 * $gameSystem.totalQuestRewards(questId)
 * - Replace 'questId' with the ID of the quest you're looking for. This will
 * set the variable to show how many quest rewards are total for the selected
 * quest's settings.
 * Example: $gameSystem.totalQuestRewards(50)
 *
 * $gameSystem.getQuestSubtextIndex(questId)
 * - Replace 'questId' with the ID of the quest you're looking for. This will
 * set the variable to show which subtext is being used currently.
 * Example: $gameSystem.getQuestSubtextIndex(50)
 *
 *
 * --- Conditional Branch Event's Script Calls ---
 *
 * 
 * $gameSystem.isQuestObjectiveCompleted(questId, objectiveId)
 * - Replace 'questId' with the ID of the quest you're looking for. Replace
 * 'objectiveId' with the ID of the objective you're intending to check. This
 * will make a check in the conditional branch's script call to see if an
 * objective's status is completed (true) or not (false).
 * Example: $gameSystem.isQuestObjectiveCompleted(50, 1)
 *
 * $gameSystem.isQuestObjectiveFailed(questId, objectiveId)
 * - Replace 'questId' with the ID of the quest you're looking for. Replace
 * 'objectiveId' with the ID of the objective you're intending to check. This
 * will make a check in the conditional branch's script call to see if an
 * objective's status is failed (true) or not (false).
 * Example: $gameSystem.isQuestObjectiveFailed(50, 1)
 *
 * $gameSystem.isQuestObjectiveUncleared(questId, objectiveId)
 * - Replace 'questId' with the ID of the quest you're looking for. Replace
 * 'objectiveId' with the ID of the objective you're intending to check. This
 * will make a check in the conditional branch's script call to see if an
 * objective's status is neither completed nor failed (true) or either (false).
 * Example: $gameSystem.isQuestObjectiveUncleared(50, 1)
 * 
 * $gameSystem.isQuestRewardClaimed(questId, rewardId)
 * - Replace 'questId' with the ID of the quest you're looking for. Replace
 * 'rewardId' with the ID of the reward you're intending to check. This will
 * make a check in the conditional branch's script call to see if a reward's
 * status is claimed (true) or not (false).
 * Example: $gameSystem.isQuestRewardClaimed(50, 1)
 * 
 * $gameSystem.isQuestRewardDenied(questId, rewardId)
 * - Replace 'questId' with the ID of the quest you're looking for. Replace
 * 'rewardId' with the ID of the reward you're intending to check. This will
 * make a check in the conditional branch's script call to see if a reward's
 * status is denied (true) or not (false).
 * Example: $gameSystem.isQuestRewardDenied(50, 1)
 * 
 * $gameSystem.isQuestRewardUnclaimed(questId, rewardId)
 * - Replace 'questId' with the ID of the quest you're looking for. Replace
 * 'rewardId' with the ID of the reward you're intending to check. This will
 * make a check in the conditional branch's script call to see if a reward's
 * status is neither claimed nor denied (true) or either (false).
 * Example: $gameSystem.isQuestRewardUnclaimed(50, 1)
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * There are various plugin commands you can use to control the quest journal
 * system in your game.
 *
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * Plugin Commands:
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 *
 *   Quest Journal Open
 *   - Opens the quest journal system menu with no quest selected.
 *
 *   Quest Journal Open To x
 *   - Replace 'x' with the quest ID you wish to open the quest journal system
 *   to. If the quest isn't known to the player at the time this plugin command
 *   takes place, then the quest will be added to the player's quest journal.
 *
 *   ---
 *
 *   Quest Journal Show
 *   Quest Journal Hide
 *   - Show or hide the Quest Journal option from the main menu.
 *
 *   Quest Journal Enable
 *   Quest Journal Disable
 *   - Enable or disable the Quest Journal option in the main menu.
 *
 *   ---
 *
 *   Quest Add x
 *   - Replace 'x' with an integer. Adds quest ID 'x' to the quest journal as
 *   an available quest. This will make it viewable from the in-game quest
 *   journal system menu.
 *
 *   Quest Add x to y
 *   - Replace 'x' and 'y' with integer values determining the quest ID range
 *   you wish to add in mass amounts to the quest journal.
 *
 *   Quest Add x, x, x
 *   - Replace 'x' values with integer values representing the quest ID's you
 *   wish to add to the quest journal.
 *
 *   ---
 *
 *   Quest Remove x
 *   - Replace 'x' with an integer. This will remove quest ID 'x' from the
 *   quest journal.
 *
 *   Quest Remove x to y
 *   - Replace 'x' and 'y' with integer values determining the quest ID range
 *   you wish to remove in mass amounts from the quest journal.
 *
 *   Quest Remove x, x, x
 *   - Replace 'x' values with integer values representing the quest ID's you
 *   wish to remove from the quest journal.
 *
 *   ---
 *
 *   Quest Set Completed x
 *   Quest Set Failed x
 *   Quest Set Available x
 *   - Replace 'x' with the quest ID you wish to change the quest status to
 *   'completed', 'failed', or 'available'.
 *
 *   Quest Set Completed x to y
 *   Quest Set Failed x to y
 *   Quest Set Available x to y
 *   - Replace 'x' and 'y' with integer values determining the quest ID range
 *   you wish to set as completed, failed, or available.
 *
 *   Quest Set Completed x, x, x
 *   Quest Set Failed x, x, x
 *   Quest Set Available x, x, x
 *   - Replace 'x' values with integer values representing the quest ID's you
 *   wish to set as completed, failed, or available.
 *
 *   ---
 *
 *   Quest x Change Description Entry To y
 *   - Replace 'x' with the Quest ID you want to modify the description of.
 *   Replace 'y' with the description entry ID you wish to change the quest to.
 *   This will make the description, when viewed in-game in the quest journal,
 *   to display the description entry ID 'y' found in the plugin parameters for
 *   quest 'x'. This is used for times you wish to update the description text
 *   midway through a quest.
 *
 *   ---
 *
 *   Quest x Show Objective y
 *   Quest x Hide Objective y
 *   - Replace 'x' with the Quest ID you wish to alter the objective of.
 *   Replace 'y' with the objective ID you wish to make visible/hidden. Quests
 *   can show multiple objectives at once.
 *
 *   Quest x Show Objective y to z
 *   Quest x Hide Objective y to z
 *   - Replace 'x' with the Quest ID you wish to alter the objective of.
 *   Replace 'y' and 'z' with the objective ID range you wish to make
 *   visible/hidden. Quests can show multiple objectives at once.
 *
 *   Quest x Show Objective y, y, y
 *   Quest x Hide Objective y, y, y
 *   - Replace 'x' with the Quest ID you wish to alter the objective of.
 *   Replace 'y' values with integer values representing the objective ID's you
 *   wish to make visible/hidden. Quests can show multiple objectives at once.
 *
 *   Quest X Show All Objectives
 *   Quest X Hide All Objectives
 *   - Replace 'x' with the Quest ID you wish to alter the objectives of.
 *   This will show/hide all of the quest's objectives.
 *
 *   Quest x Complete Objective y
 *   Quest x Fail Objective y
 *   Quest x Normalize Objective y
 *   - Replace 'x' with the Quest ID you wish to alter the objective of.
 *   Replace 'y' with the objective ID you wish to change the status of.
 *   Using 'Complete' will mark the objective as completed. Using 'Fail' will
 *   mark the objective as failed. Using 'Normalize' will set the objective's
 *   status to neither completed or failed.
 *
 *   Quest x Complete Objective y to z
 *   Quest x Fail Objective y to z
 *   Quest x Normalize Objective y to z
 *   - Replace 'x' with the Quest ID you wish to alter the objective of.
 *   Replace 'y' and 'z' with the objective ID range you wish to change the
 *   status of. Using 'Complete' will mark the objective as completed. Using
 *   'Fail' will mark the objective as failed. Using 'Normalize' will set the
 *   objective's status to neither completed or failed.
 *
 *   Quest x Complete Objective y, y, y
 *   Quest x Fail Objective y, y, y
 *   Quest x Normalize Objective y, y, y
 *   - Replace 'x' with the Quest ID you wish to alter the objective of.
 *   Replace 'y' values with integer values representing the objective ID's you
 *   wish to change the status of. Using 'Complete' will mark the objective as
 *   completed. Using 'Fail' will mark the objective as failed. Using
 *   'Normalize' will set the objective's status to neither completed or
 *   failed.
 *
 *   Quest x Complete All Objectives
 *   Quest x Fail All Objectives
 *   Quest x Normalize All Objectives
 *   - Replace 'x' with the Quest ID you wish to alter the objectives of.
 *   This will complete/fail/normalize all of the quest's objectives.
 *
 *   ---
 *
 *   Quest x Show Reward y
 *   Quest x Hide Reward y
 *   - Replace 'x' with the Quest ID you wish to alter the reward of. Replace
 *   'y' with the reward ID you wish to make visible/hidden. Quests can show
 *   multiple reward at once.
 *
 *   Quest x Show Reward y to z
 *   Quest x Hide Reward y to z
 *   - Replace 'x' with the Quest ID you wish to alter the reward of. Replace
 *   'y' and 'z' with the reward ID range you wish to make visible/hidden.
 *   Quests can show multiple reward at once.
 *
 *   Quest x Show Reward y, y, y
 *   Quest x Hide Reward y, y, y
 *   - Replace 'x' with the Quest ID you wish to alter the reward of. Replace
 *   'y' values with integer values representing the reward ID's you wish to
 *   make visible/hidden. Quests can show multiple reward at once.
 *
 *   Quest x Show All Rewards
 *   Quest x Hide All Rewards
 *   - Replace 'x' with the Quest ID you wish to alter the rewards of. This
 *   will show/hide all of the quest's rewards.
 *
 *   Quest x Claim Reward y
 *   Quest x Deny Reward y
 *   Quest x Normalize Reward y
 *   - Replace 'x' with the Quest ID you wish to alter the reward of. Replace
 *   'y' with the reward ID you wish to change the status of. Using 'Claim'
 *   will mark the reward as claimed. Using 'Deny' will mark the reward as
 *   denied. Using 'Normalize' will set the reward's status to neither claimed
 *   or denied.
 *
 *   Quest x Claim Reward y to z
 *   Quest x Deny Reward y to z
 *   Quest x Normalize Reward y to z
 *   - Replace 'x' with the Quest ID you wish to alter the reward of. Replace
 *   'y' and 'z' with the reward ID range you wish to change the status of.
 *   Using 'Claim' will mark the reward as claimed. Using 'Deny' will mark the
 *   reward as denied. Using 'Normalize' will set the reward's status to
 *   neither claimed or denied.
 *
 *   Quest x Claim Reward y, y, y
 *   Quest x Deny Reward y, y, y
 *   Quest x Normalize Reward y, y, y
 *   - Replace 'x' with the Quest ID you wish to alter the reward of. Replace
 *   'y' values with integer values representing the reward ID you wish to
 *   change the status of. Using 'Claim' will mark the reward as claimed. Using
 *   'Deny' will mark the reward as denied. Using 'Normalize' will set the
 *   reward's status to neither claimed or denied.
 *
 *   Quest x Claim All Rewards
 *   Quest x Deny All Rewards
 *   Quest x Normalize All Rewards
 *   - Replace 'x' with the Quest ID you wish to alter the rewards of. This
 *   will claim/deny/normalize all of the quest's rewards.
 *
 *   ---
 *
 *   Quest x Change Subtext Entry To y
 *   - Replace 'x' with the Quest ID you want to modify the subtext of. Replace
 *   'y' with the subtext entry ID you wish to change the quest to. This will
 *   make the subtext, when viewed in-game in the quest journal, to display the
 *   subtext entry ID 'y' found in the plugin parameters for quest 'x'. This is
 *   used for times you wish to update the subtext text midway through a quest.
 *
 *   ---
 *
 * ============================================================================
 * Instructions - Lunatic Mode
 * ============================================================================
 *
 * The plugin parameter 'Lunatic Mode' is made for users who are familiar with
 * JavaScript. These parameters allow you to add additional lines of code to
 * their respective functions whenever the respective quest journal function
 * occurs in-game. The timing for them will occur after the function occurred
 * and only if it was successful in delivering a change.
 *
 *   ---
 *
 *   Before Create Windows
 *   After Create Windows
 *   Close Quest Menu
 *
 *   ---
 *
 *   Quest Add
 *   Quest Remove
 *   Quest Complete
 *   Quest Fail
 *   Quest Available
 *
 *   ---
 *
 *   Change Description
 *
 *   ---
 *
 *   Show Objective
 *   Hide Objective
 *   Complete Objective
 *   Fail Objective
 *   Normalize Objective
 *
 *   ---
 *
 *   Show Reward
 *   Hide Reward
 *   Claim Reward
 *   Deny Reward
 *   Normalize Reward
 *
 *   ---
 *
 *   Change Subtext
 *
 *   ---
 *
 * There are a few rules to note. The code for each of those plugin functions
 * will only run if it meets these rules:
 *
 *   1. The code will run for each quest or quest property changed. This means
 *      that if you used a plugin command that alters a group of quests or
 *      quest properties at once, the code will run multiple times individually
 *      for each quest or quest property.
 *
 *   2. The code will only run if there has been successful changes to a quest
 *      or quest property. For example, if a quest is already set to 'Failed',
 *      running the plugin command to fail that quest again will not trigger
 *      the Lunatic Mode code to run again.
 *
 *   3. When a quest is first added, any default properties added to the quest
 *      will not trigger the Lunatic Mode to run. For example, if the quest
 *      being added has objectives 1 and 2 already visible from the start, then
 *      the Lunatic Mode code will not run for 1 and 2.
 *
 * Make sure you understand these rules so that you know what governs whether
 * or not the custom code runs.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Fixed a bug that caused a game freeze when using the Quest Journal Open
 * plugin command.
 *
 * Version 1.01:
 * - Fixed some bugs regarding certain plugin commands not working properly.
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Help
 * ============================================================================
 *
 * @param ---Main Menu---
 * @default
 *
 * @param Quest Command
 * @parent ---Main Menu---
 * @desc This is the text used for the main menu command
 * @default Quest
 *
 * @param Show Command
 * @parent ---Main Menu---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the Quest command in the main menu by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Enable Command
 * @parent ---Main Menu---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the Synthesis command in the main menu by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Auto Place Command
 * @parent ---Main Menu---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow this plugin to decide the menu placement position?
 * NO - false     YES - true
 * @default true
 *
 * @param ---Quest Menu---
 * @default
 *
 * @param Quest Category Window
 * @parent ---Quest Menu---
 * @type struct<CategoryWindow>
 * @desc Adjust the properties for the quest category window here.
 * @default {"---Categories---":"","Category Order":"[\"available\",\"completed\",\"failed\",\"all\"]","Available Text":"\\i[192]Available (%1)","Completed Text":"\\i[191]Completed (%1)","Failed Text":"\\i[194]Failed (%1)","All Text":"\\i[189]All Quests (%1)","Cancel Text":"\\i[161]Close","---Window Settings---":"","X":"0","Y":"0","Width":"Graphics.boxWidth / 3","Height":"this.fittingHeight(this.numVisibleRows())","Rows":"4","Columns":"1","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Text Alignment":"left","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window"}
 *
 * @param Quest List Window
 * @parent ---Quest Menu---
 * @type struct<ListWindow>
 * @desc Adjust the properties for the quest list window here.
 * @default {"---Types---":"","Show Types":"true","Type Order":"[\"\\\\c[6]Main Quests\",\"\\\\c[4]Side Quests\",\"\\\\c[3]Character Quests\",\"\\\\c[5]Tutorial Quests\"]","List Open Symbol":"-","List Closed Symbol":"+","Type Text Format":"%1%2 (%3)","Quest Indent":"0","Show Empty":"false","Read Quest":"\\i[121]Read Quest","Cancel":"\\i[16]Cancel","---Window Settings---":"","X":"0","Y":"Graphics.boxHeight - height","Width":"Graphics.boxWidth / 3","Height":"Graphics.boxHeight - this.fittingHeight(4)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Standard Opacity":"255","Back Opacity":"192","Type Alignment":"left","Quest Alignment":"left","Window Skin":"Window"}
 *
 * @param Quest Title Window
 * @parent ---Quest Menu---
 * @type struct<TitleWindow>
 * @desc Adjust the properties for the quest title window here.
 * @default {"---Window Settings---":"","No Quest Title":"\\c[4]Quest Journal","X":"Graphics.boxWidth - width","Y":"0","Width":"Graphics.boxWidth * 2 / 3","Height":"this.fittingHeight(1)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Text Alignment":"center","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window"}
 *
 * @param Quest Data Window
 * @parent ---Quest Menu---
 * @type struct<DataWindow>
 * @desc Adjust the properties for the quest data window here.
 * @default {"---Data Settings---":"","No Data Text":"\"Welcome to the \\\\c[4]Quest Journal\\\\c[0].\\n\\nHere, you can review over the various\\nquests given to you by people from all\\nover the world.\"","Quest Data Format":"\"<WordWrap>\\\\{%1\\\\}\\n<br>\\\\c[4]Level:\\\\c[0] %2\\n<br>\\\\c[4]From:\\\\c[0] %3\\n<br>\\\\c[4]Location:\\\\c[0] %4\\n<br>\\n<br>\\\\c[4]Description:\\\\c[0]\\n<br>%5\\n<br>\\n<br>\\\\c[4]Objectives:\\\\c[0]\\n<br>%6\\n<br>\\n<br>\\\\c[4]Rewards:\\\\c[0]\\n<br>%7\\n<br>\\n<br>%8\"","Uncleared Objective":"\\i[160]%1","Completed Objective":"\\i[165]%1","Failed Objective":"\\i[162]%1","Unclaimed Reward":"\\i[160]%1","Claimed Reward":"\\i[163]%1","Denied Reward":"\\i[161]%1","Load Delay":"30","---Window Settings---":"","X":"Graphics.boxWidth - width","Y":"Graphics.boxHeight - height","Width":"Graphics.boxWidth * 2 / 3","Height":"Graphics.boxHeight - this.fittingHeight(1)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window","Scroll Speed":"4"}
 *
 * @param Lunatic Mode
 * @parent ---Quest Menu---
 * @type struct<LunaticMode>
 * @desc Add custom code to each of the plugin's major functions.
 * @default {"---Quest Menu---":"","Before Create Windows":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\\n//\\n// background.bitmap = ImageManager.loadTitle1(\\\"Book\\\");\\n// this.fitScreen(background);\"","After Create Windows":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\"","Close Quest Menu":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\"","---Quest Status---":"","Quest Add":"\"// Variables:\\n//   questId - ID of the quest being added\\n//\\n// console.log('Quest ' + questId + ' successfully added!')\"","Quest Remove":"\"// Variables:\\n//   questId - ID of the quest being removed\\n//\\n// console.log('Quest ' + questId + ' successfully removed!')\"","Quest Complete":"\"// Variables:\\n//   questId - ID of the quest set to completed\\n//\\n// console.log('Quest ' + questId + ' status changed to Completed!')\"","Quest Fail":"\"// Variables:\\n//   questId - ID of the quest set to failed\\n//\\n// console.log('Quest ' + questId + ' status changed to Failed!')\"","Quest Available":"\"// Variables:\\n//   questId - ID of the quest set to available\\n//\\n// console.log('Quest ' + questId + ' status changed to Available!')\"","---Description---":"","Change Description":"\"// Variables:\\n//   questId - ID of the quest whose description is changed\\n//   index - Description index being changed to\\n//\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\"","---Objectives---":"","Show Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective being shown\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\"","Hide Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective being hidden\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\"","Complete Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective being completed\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\"","Fail Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective having failed\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\"","Normalize Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective normalized\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\"","---Rewards---":"","Show Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward being shown\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\"","Hide Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward being hidden\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\"","Claim Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward becoming claimed\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\"","Deny Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward becoming denied\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\"","Normalize Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward normalized\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\"","---Subtext---":"","Change Subtext":"\"// Variables:\\n//   questId - ID of the quest whose subtext is changed\\n//   index - Subtext index being changed to\\n//\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\""}
 *
 * @param ---Quest List---
 * @default
 *
 * @param Quest 1
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 2
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 4
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 5
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 6
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 7
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 8
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 9
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 10
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 11
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 12
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 13
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 14
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 15
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 16
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 17
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 18
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 19
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 20
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 21
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 22
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 23
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 24
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 25
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 26
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 27
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 28
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 29
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 30
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 31
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 32
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 33
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 34
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 35
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 36
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 37
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 38
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 39
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 40
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 41
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 42
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 43
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 44
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 45
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 46
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 47
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 48
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 49
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 50
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 51
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 52
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 53
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 54
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 55
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 56
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 57
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 58
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 59
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 60
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 61
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 62
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 63
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 64
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 65
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 66
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 67
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 68
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 69
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 70
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 71
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 72
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 73
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 74
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 75
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 76
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 77
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 78
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 79
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 80
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 81
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 82
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 83
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 84
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 85
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 86
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 87
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 88
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 89
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 90
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 91
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 92
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 93
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 94
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 95
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 96
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 97
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 98
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 99
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 100
 * @parent ---Quest List---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 */
//=============================================================================
/* Plugin Parameter Structure Settings
 *=============================================================================
 */
/* ----------------------------------------------------------------------------
 * CategoryWindow Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~CategoryWindow:
 * @param ---Categories---
 * @default
 *
 * @param Category Order
 * @parent ---Categories---
 * @type string[]
 * @desc Order list for the quest type categories.
 * Options: available, completed, failed, all, cancel
 * @default ["available","completed","failed","all"]
 *
 * @param Available Text
 * @parent ---Categories---
 * @desc The text used for available quests.
 * Text codes allowed. %1 - Quest Number
 * @default \i[192]Available (%1)
 *
 * @param Completed Text
 * @parent ---Categories---
 * @desc The text used for completed quests.
 * Text codes allowed. %1 - Quest Number
 * @default \i[191]Completed (%1)
 *
 * @param Failed Text
 * @parent ---Categories---
 * @desc The text used for failed quests.
 * Text codes allowed. %1 - Quest Number
 * @default \i[194]Failed (%1)
 *
 * @param All Text
 * @parent ---Categories---
 * @desc The text used for all quests.
 * Text codes allowed. %1 - Quest Number
 * @default \i[189]All Quests (%1)
 *
 * @param Cancel Text
 * @parent ---Categories---
 * @desc The text used for the Close option.
 * Text codes allowed.
 * @default \i[161]Close
 * 
 * @param ---Window Settings---
 * @default
 *
 * @param X
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc Formula for the window's X position.
 * @default 0
 *
 * @param Y
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc Formula for the window's Y position.
 * @default 0
 *
 * @param Width
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc Formula for the window width.
 * @default Graphics.boxWidth / 3
 *
 * @param Height
 * @parent ---Window Settings---
 * @type combo
 * @option this.fittingHeight(1)
 * @option this.fittingHeight(2)
 * @option this.fittingHeight(3)
 * @option this.fittingHeight(4)
 * @option this.fittingHeight(5)
 * @option this.fittingHeight(this.numVisibleRows())
 * @desc Formula for the window height.
 * @default this.fittingHeight(this.numVisibleRows())
 *
 * @param Rows
 * @parent ---Window Settings---
 * @type combo
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @desc Formula for the number of window rows.
 * @default 4
 *
 * @param Columns
 * @parent ---Window Settings---
 * @type combo
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @desc Formula for the number of window columns.
 * @default 1
 *
 * @param Line Height
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The height used for each line entry.
 * @default 36
 *
 * @param Font Face
 * @parent ---Window Settings---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc The font face used for your game.
 * @default GameFont
 *
 * @param Font Size
 * @parent ---Window Settings---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc Formula for the standard font size.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc Formula for the window's padding.
 * @default 18
 *
 * @param Text Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc Formula for the padding used before displaying text.
 * @default 6
 *
 * @param Text Alignment
 * @parent ---Window Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Choose what type of alignment to use for the window's text.
 * left     center     right
 * @default left
 *
 * @param Standard Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the standard opacity used by the window.
 * @default 255
 *
 * @param Back Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the opacity used by the window.
 * @default 192
 *
 * @param Window Skin
 * @parent ---Window Settings---
 * @type file
 * @dir img/system/
 * @desc Window skin used.
 * @default Window
 * 
 */
/* ----------------------------------------------------------------------------
 * ListWindow Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~ListWindow:
 * @param ---Types---
 * @default
 *
 * @param Show Types
 * @parent ---Types---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show quest types in the quest list?
 * @default true
 *
 * @param Type Order
 * @parent ---Types---
 * @type string[]
 * @desc Order list for the quest list types.
 * Name these however you want. Text codes are allowed.
 * @default ["\\c[6]Main Quests","\\c[4]Side Quests","\\c[3]Character Quests","\\c[5]Tutorial Quests"]
 *
 * @param List Open Symbol
 * @parent ---Types---
 * @desc Text indicator to show if a type is opened.
 * Opened types will show all quests within that quest type.
 * @default -
 *
 * @param List Closed Symbol
 * @parent ---Types---
 * @desc Text indicator to show if a type is closed.
 * Closed types will not show all quests within that quest type.
 * @default +
 *
 * @param Type Text Format
 * @parent ---Types---
 * @desc Format used to display quest types. Text codes allowed.
 * %1 - Open/Closed   %2 - Type Name   %3 - Quest Number
 * @default %1%2 (%3)
 *
 * @param Quest Indent
 * @parent ---Types---
 * @number
 * @number 0
 * @desc How many pixels much to indent quests by.
 * @default 0
 *
 * @param Show Empty
 * @parent ---Types---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show quest types that are empty? If not, types
 * without any quests will be hidden from the list.
 * @default false
 *
 * @param Read Quest
 * @parent ---Types---
 * @desc Vocabulary used for the 'Read Quest' option.
 * You can use text codes.
 * @default \\i[121]Read Quest
 *
 * @param Cancel
 * @parent ---Types---
 * @desc Vocabulary used for the 'Cancel' option.
 * @default \\i[16]Cancel
 * 
 * @param ---Window Settings---
 * @default
 *
 * @param X
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc Formula for the window's X position.
 * @default 0
 *
 * @param Y
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc Formula for the window's Y position.
 * @default Graphics.boxHeight - height
 *
 * @param Width
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc Formula for the window width.
 * @default Graphics.boxWidth / 3
 *
 * @param Height
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxHeight - this.fittingHeight(1)
 * @option Graphics.boxHeight - this.fittingHeight(2)
 * @option Graphics.boxHeight - this.fittingHeight(3)
 * @option Graphics.boxHeight - this.fittingHeight(4)
 * @option Graphics.boxHeight - this.fittingHeight(5)
 * @desc Formula for the window height.
 * @default Graphics.boxHeight - this.fittingHeight(4)
 *
 * @param Line Height
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The height used for each line entry.
 * @default 36
 *
 * @param Font Face
 * @parent ---Window Settings---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc The font face used for your game.
 * @default GameFont
 *
 * @param Font Size
 * @parent ---Window Settings---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc Formula for the standard font size.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc Formula for the window's padding.
 * @default 18
 *
 * @param Text Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc Formula for the padding used before displaying text.
 * @default 6
 *
 * @param Standard Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the standard opacity used by the window.
 * @default 255
 *
 * @param Back Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the opacity used by the window.
 * @default 192
 *
 * @param Type Alignment
 * @parent ---Window Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Choose what type of alignment to use for the quest types.
 * left     center     right
 * @default left
 *
 * @param Quest Alignment
 * @parent ---Window Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Choose what type of alignment to use for the quests themselves.
 * left     center     right
 * @default left
 *
 * @param Window Skin
 * @parent ---Window Settings---
 * @type file
 * @dir img/system/
 * @desc Window skin used.
 * @default Window
 * 
 */
/* ----------------------------------------------------------------------------
 * TitleWindow Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~TitleWindow:
 * @param ---Window Settings---
 * @default
 *
 * @param No Quest Title
 * @parent ---Window Settings---
 * @desc Display this when there's no quest selected.
 * Text codes allowed.
 * @default \\c[4]Quest Journal
 *
 * @param X
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc Formula for the window's X position.
 * @default Graphics.boxWidth - width
 *
 * @param Y
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc Formula for the window's Y position.
 * @default 0
 *
 * @param Width
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc Formula for the window width.
 * @default Graphics.boxWidth * 2 / 3
 *
 * @param Height
 * @parent ---Window Settings---
 * @type combo
 * @option this.fittingHeight(1)
 * @option this.fittingHeight(2)
 * @option this.fittingHeight(3)
 * @option this.fittingHeight(4)
 * @option this.fittingHeight(5)
 * @desc Formula for the window height.
 * @default this.fittingHeight(1)
 *
 * @param Line Height
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The height used for each line entry.
 * @default 36
 *
 * @param Font Face
 * @parent ---Window Settings---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc The font face used for your game.
 * @default GameFont
 *
 * @param Font Size
 * @parent ---Window Settings---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc Formula for the standard font size.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc Formula for the window's padding.
 * @default 18
 *
 * @param Text Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc Formula for the padding used before displaying text.
 * @default 6
 *
 * @param Text Alignment
 * @parent ---Window Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Choose what type of alignment to use for the window's text.
 * left     center     right
 * @default center
 *
 * @param Standard Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the standard opacity used by the window.
 * @default 255
 *
 * @param Back Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the opacity used by the window.
 * @default 192
 *
 * @param Window Skin
 * @parent ---Window Settings---
 * @type file
 * @dir img/system/
 * @desc Window skin used.
 * @default Window
 * 
 */
/* ----------------------------------------------------------------------------
 * DataWindow Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~DataWindow:
 * @param ---Data Settings---
 * @default
 *
 * @param No Data Text
 * @parent ---Data Settings---
 * @type note
 * @desc Text to display when no quest data is available.
 * @default "Welcome to the \\c[4]Quest Journal\\c[0].\n\nHere, you can review over the various\nquests given to you by people from all\nover the world."
 *
 * @param Quest Data Format
 * @parent ---Data Settings---
 * @type note
 * @desc %1 - Title, %2 - Difficulty, %3 - From, %4 - Location
 * %5 - Desc, %6 - Objectives, %7 - Rewards, %8 - Subtext
 * @default "\\{%1\\}\n\\c[4]Level:\\c[0] %2\n\\c[4]From:\\c[0] %3\n\\c[4]Location:\\c[0] %4\n\n\\c[4]Description:\\c[0]\n%5\n\n\\c[4]Objectives:\\c[0]\n%6\n\n\\c[4]Rewards:\\c[0]\n%7\n\n%8"
 *
 * @param Uncleared Objective
 * @parent ---Data Settings---
 * @desc Text format for uncleared quest objectives.
 * %1 - Objective Text
 * @default \i[160]%1
 *
 * @param Completed Objective
 * @parent ---Data Settings---
 * @desc Text format for completed quest objectives.
 * %1 - Objective Text
 * @default \i[165]%1
 *
 * @param Failed Objective
 * @parent ---Data Settings---
 * @desc Text format for failed quest objectives.
 * %1 - Objective Text
 * @default \i[162]%1
 *
 * @param Unclaimed Reward
 * @parent ---Data Settings---
 * @desc Text format for unclaimed quest rewards.
 * %1 - Reward Text
 * @default \i[160]%1
 *
 * @param Claimed Reward
 * @parent ---Data Settings---
 * @desc Text format for claimed quest rewards.
 * %1 - Reward Text
 * @default \i[163]%1
 *
 * @param Denied Reward
 * @parent ---Data Settings---
 * @desc Text format for denied quest rewards.
 * %1 - Reward Text
 * @default \i[161]%1
 *
 * @param Load Delay
 * @parent ---Data Settings---
 * @type number
 * @desc Loading time delay for data in frames.
 * This is to prevent overburdening the engine.
 * @default 30
 *
 * @param ---Window Settings---
 * @default
 *
 * @param X
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc Formula for the window's X position.
 * @default Graphics.boxWidth - width
 *
 * @param Y
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc Formula for the window's Y position.
 * @default Graphics.boxHeight - height
 *
 * @param Width
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc Formula for the window width.
 * @default Graphics.boxWidth * 2 / 3
 *
 * @param Height
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxHeight - this.fittingHeight(1)
 * @option Graphics.boxHeight - this.fittingHeight(2)
 * @option Graphics.boxHeight - this.fittingHeight(3)
 * @option Graphics.boxHeight - this.fittingHeight(4)
 * @option Graphics.boxHeight - this.fittingHeight(5)
 * @desc Formula for the window height.
 * @default Graphics.boxHeight - this.fittingHeight(1)
 *
 * @param Line Height
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The height used for each line entry.
 * @default 36
 *
 * @param Font Face
 * @parent ---Window Settings---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc The font face used for your game.
 * @default GameFont
 *
 * @param Font Size
 * @parent ---Window Settings---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc Formula for the standard font size.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc Formula for the window's padding.
 * @default 18
 *
 * @param Text Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc Formula for the padding used before displaying text.
 * @default 6
 *
 * @param Standard Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the standard opacity used by the window.
 * @default 255
 *
 * @param Back Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the opacity used by the window.
 * @default 192
 *
 * @param Window Skin
 * @parent ---Window Settings---
 * @type file
 * @dir img/system/
 * @desc Window skin used.
 * @default Window
 *
 * @param Scroll Speed
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The speed at which the window scrolls when pressing up/down.
 * @default 4
 * 
 */
/* ----------------------------------------------------------------------------
 * LunaticMode Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~LunaticMode:
 * @param ---Quest Menu---
 * @default
 *
 * @param Before Create Windows
 * @parent ---Quest Menu---
 * @type note
 * @desc This code will run before any of the quest menus
 * are created for the scene.
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows\n//\n// background.bitmap = ImageManager.loadTitle1(\"Book\");\n// this.fitScreen(background);"
 *
 * @param After Create Windows
 * @parent ---Quest Menu---
 * @type note
 * @desc This code will run after all of the quest menus
 * are created for the scene.
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows"
 *
 * @param Close Quest Menu
 * @parent ---Quest Menu---
 * @type note
 * @desc This code will run when the quest menu is closed.
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows"
 *
 * @param ---Quest Status---
 * @default 
 * 
 * @param Quest Add
 * @parent ---Quest Status---
 * @type note
 * @desc This code will run any time a quest is successfully
 * added to the Quest Journal.
 * @default "// Variables:\n//   questId - ID of the quest being added\n//\n// console.log('Quest ' + questId + ' successfully added!')"
 *
 * @param Quest Remove
 * @parent ---Quest Status---
 * @type note
 * @desc This code will run any time a quest is successfully
 * removed the Quest Journal.
 * @default "// Variables:\n//   questId - ID of the quest being removed\n//\n// console.log('Quest ' + questId + ' successfully removed!')"
 *
 * @param Quest Complete
 * @parent ---Quest Status---
 * @type note
 * @desc This code will run any time a quest's status is
 * changed to completed.
 * @default "// Variables:\n//   questId - ID of the quest set to completed\n//\n// console.log('Quest ' + questId + ' status changed to Completed!')"
 *
 * @param Quest Fail
 * @parent ---Quest Status---
 * @type note
 * @desc This code will run any time a quest's status is
 * changed to failed.
 * @default "// Variables:\n//   questId - ID of the quest set to failed\n//\n// console.log('Quest ' + questId + ' status changed to Failed!')"
 *
 * @param Quest Available
 * @parent ---Quest Status---
 * @type note
 * @desc This code will run any time a quest's status is
 * changed to available.
 * @default "// Variables:\n//   questId - ID of the quest set to available\n//\n// console.log('Quest ' + questId + ' status changed to Available!')"
 *
 * @param ---Description---
 * @default
 *
 * @param Change Description
 * @parent ---Description---
 * @type note
 * @desc This code will run any time a quest's description
 * has been changed to a particular index.
 * @default "// Variables:\n//   questId - ID of the quest whose description is changed\n//   index - Description index being changed to\n//\n// console.log('Quest ' + questId + ' description index changed to ' + index)"
 *
 * @param ---Objectives---
 * @default
 *
 * @param Show Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a quest's objectives
 * becomes shown.
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective being shown\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')"
 *
 * @param Hide Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a quest's objectives
 * becomes hidden.
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective being hidden\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')"
 *
 * @param Complete Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a quest's objectives
 * becomes completed.
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective being completed\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')"
 *
 * @param Fail Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a quest's objectives
 * becomes failed.
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective having failed\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')"
 *
 * @param Normalize Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a quest's objectives
 * becomes normalized.
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective normalized\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')"
 *
 * @param ---Rewards---
 * @default
 *
 * @param Show Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a quest's rewards
 * becomes shown.
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward being shown\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')"
 *
 * @param Hide Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a quest's rewards
 * becomes hidden.
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward being hidden\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')"
 *
 * @param Claim Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a quest's rewards
 * is claimed.
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward becoming claimed\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')"
 *
 * @param Deny Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a quest's rewards
 * is denied.
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward becoming denied\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')"
 *
 * @param Normalize Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a quest's rewards
 * is normalized.
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward normalized\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')"
 *
 * @param ---Subtext---
 * @default
 *
 * @param Change Subtext
 * @parent ---Subtext---
 * @type note
 * @desc This code will run any time a quest's subtext
 * has been changed to a particular index.
 * @default "// Variables:\n//   questId - ID of the quest whose subtext is changed\n//   index - Subtext index being changed to\n//\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)"
 * 
 */
/* ----------------------------------------------------------------------------
 * Quest Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~Quest:
 *
 * @param Title
 * @desc Title of the quest.
 * Text codes allowed.
 * @default \i[87]Untitled Quest
 *
 * @param Type
 * @parent Title
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc What type of quest is this?
 * @default Main Quests
 *
 * @param Difficulty
 * @parent Title
 * @desc Difficulty level for this quest.
 * Text codes allowed.
 * @default Easy Peasy
 *
 * @param From
 * @parent Title
 * @desc Insert the name of the NPC who issued this quest.
 * Text codes allowed.
 * @default NPC Name
 *
 * @param Location
 * @parent Title
 * @desc Insert the location of the NPC who issued this quest.
 * Text codes allowed.
 * @default Location Name
 *
 * @param Description
 * @parent Title
 * @type note[]
 * @desc Type out the description used for this quest.
 * Text codes allowed.
 * @default ["\"This is the \\\\c[4]default\\\\c[0] quest description.\"","\"This is the \\\\c[4]default\\\\c[0] quest description.\\n\\nYou can insert multiple description entries in case you\\never want to update the quest description midway while the\\nquest is in progress.\""]
 *
 * @param Objectives List
 * @type note[]
 * @desc The objectives to be completed for this quest.
 * Text codes allowed.
 * @default ["\"\\\\c[4]First\\\\c[0] objective to be cleared.\"","\"\\\\c[4]Second\\\\c[0] objective, but it's hidden.\"","\"To make other objectives appear,\\nenable them through the \\\\c[4]'Visible\\nObjectives'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 *
 * @param Visible Objectives
 * @parent Objectives List
 * @type number[]
 * @min 1
 * @desc The objectives that are visible from the start.
 * @default ["1"]
 *
 * @param Rewards List
 * @type note[]
 * @desc The reward list for this quest.
 * Text codes allowed.
 * @default ["\"\\\\i[176]Potion x5\"","\"\\\\i[178]Ether x3\"","\"To make other rewards appear,\\nenable them through the \\\\c[4]'Visible\\nRewards'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 * 
 * @param Visible Rewards
 * @parent Rewards List
 * @type number[]
 * @min 1
 * @desc The rewards that are visible from the start.
 * @default ["1"]
 *
 * @param Subtext
 * @type note[]
 * @desc Subtext to be displayed with the quest.
 * @default ["\"\"","\"This is a subtext. It is used as\\nextra text that you may want to\\nplace on your quest journal that\\ndiffers from the description.\""]
 */

 /*:ja
 * @plugindesc v1.02 クエストジャーナルシステムを導入します。
 * @author Yanfly Engine Plugins
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * このプラグインを日本語で使用するには YEP_MessageCore
 * で提供される WordWrap タグ機能はほとんど役に立ちません。
 * 公式で配布されている YED_WordWrap の使用を推奨します。
 * YED_WordWrap を使用する前提で、翻訳設定を済ませてあります。
 * 変更されている箇所は、このプラグインの下記のパラメーター内です。
 * データウィンドウ＞クエスト表示形式
 *
 * YED_WordWrap の使用方法は、下記になります。
 *   1.YED_WordWrapプラグインを入れます。
 *   2.プラグイン設定内の「Break Word」を「false」から「true」に書き換えます。
 *   3.クエスト表示形式の最初に <wrap> タグを入れます。(このパッチは設定済み)
 * 文章が表示幅からはみ出ると改行されるようになります。
 * 表示幅以外で強制的に改行したり、空行を入れたい箇所には
 * <br> タグを入れてください。
 *
 * ===========================================================================
 * 導入
 * ===========================================================================
 *
 * 警告：このプラグインはRPGツクールMV 1.5.0以降で使用できます。
 * MV 1.5.0エディタでこのプラグインを正常に動作するためです。
 * このプラグインを使用する前に、RPGツクールMVのバージョンを確認してください。
 *
 * ---
 *
 * クエストジャーナルは、プレイヤーにとって非常に重要なツールです。
 * ゲームを進めるためにプレイヤーが追求することができる
 * クエスト、ミッション、目的を表示します。
 * 広大なRPGの世界でプレイヤーがしていることを忘れる可能性がある場合、
 * プレイヤーが何をする必要があるのかを思い出すのに役立ちます。
 *
 * このプラグインはクエストジャーナルシステムを追加します。
 * クエストジャーナルの表示方法を設定、
 * ウィンドウを移動、形状を変更したりできます。
 * このプラグインには100のクエストスロットがあり、
 * （拡張プラグインを通してより多くを得ることができます）、
 * それらを個別に構築するには開発者の注意を必要とします。
 *
 * クエストのタイトル、難易度、依頼者、場所、説明、目的、報酬のリスト、
 * サブテキストを見ることができます。
 *
 * ---
 *
 * このプラグインはクエストジャーナルシステムを追加しますが、
 * このプラグインは何も自動化しません。
 * クエストを有効にしている場合でも、そのクエストをジャーナルに適切に追加し、
 * その多くの目的を設定し、他の目的が現れた時に、
 * 報酬を何にするか、そして報酬を与えるのは開発者の設定次第です。
 * このプラグインの目的は、
 * プレイヤーにどんなクエストが伝えられたのかを視覚的に記録することです。
 *
 * ===========================================================================
 * 説明 - クエストカテゴリウィンドウの設定
 * ===========================================================================
 *
 * プラグインのパラメータ 'Quest Category Window'は、
 * デフォルトのままにしておくことができますが、
 * カスタマイズしたい場合、知っておくべきことがあります。
 *
 * ---
 *
 * Category Order
 * - カテゴリがメニューに表示される順序です。
 * 進行中、完了、失敗、すべて、キャンセル。
 * これらを動かすと、メニューの構成を調整できます。
 * 移動した場合、デフォルトでは最初の項目が最初に選択されます。
 * デフォルト:["available","completed","failed","all"]
 *
 * Available Text
 * - 「進行中」カテゴリの表示テキスト。
 * 制御文字を使ってアイコンや色の外観を指定できます。
 * %1は、進行中クエストの数を表示するためのフォーマットオプションです。
 * デフォルト:\i[192]Available (%1)
 *
 * Completed Text
 * - 「完了」カテゴリの表示テキスト。
 * 制御文字を使ってアイコンや色の外観を指定できます。
 * %1は、完了したクエストの数を表示するためのフォーマットオプションです。
 * デフォルト:\i[191]Completed (%1)
 *
 * Failed Text
 * - 「失敗」カテゴリの表示テキスト。
 * 制御文字を使ってアイコンや色の外観を指定できます。
 * %1は、失敗したクエストの数を表示するためのフォーマットオプションです。
 * デフォルト:\i[194]Failed (%1)
 *
 * All Text
 * - 「全て」カテゴリの表示テキスト。
 * 制御文字を使ってアイコンや色の外観を指定できます。
 * %1は、全てのクエストの数を表示するためのフォーマットオプションです。
 * デフォルト:\i[189]All Quests (%1)
 *
 * Cancel Text
 * - 「キャンセル」オプションのエントリの表示テキスト。
 * 制御文字を使ってアイコンや色の外観を指定できます。
 * このテキストで使用するフォーマットオプションはありません。
 * デフォルト:\i[161]Close
 *
 * ---
 *
 * Window Settings
 * - カテゴリウィンドウをカスタマイズしたい場合、設定で詳細を調整できます。
 * 
 * ただし、JavaScript を使えない限り、
 * エラーを発生させてウィンドウがゲーム内で機能しなくなる可能性があることに
 * 注意してください。
 *
 * デフォルト:
 *
 * X: 0
 * Y: 0
 * Width: Graphics.boxWidth / 3
 * Height: this.fittingHeight(this.numVisibleRows())
 * Rows: 4
 * Columns: 1
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Text Alignment: left
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 *
 * ===========================================================================
 * 説明 - クエストリストウィンドウの設定
 * ===========================================================================
 *
 * プラグインパラメータ'Quest List Window'は、
 * 様々なクエストタイプを表示するように修正することができます。
 * デフォルトでは、プラグインは以下のクエストタイプを持ちます。
 * メイン、サイド、人物、指導。
 * クエストリストウィンドウについて知っておくべきことです。
 *
 * ---
 *
 * Show Types
 * - 有効になっていると、
 * Quest Listウィンドウに様々なクエストタイプを表示することができます。
 * 無効になっていると、それらのクエストタイプは表示されず、
 * すべてのクエストは個々のヘッダとしてのクエストタイプなしで表示されます。
 * デフォルト:true
 *
 * Type Order
 * - クエストリストのタイプの順番であり、
 * クエストジャーナルでどのタイプを表示するかを指定することもできます。
 * 制御文字を使って、
 * クエストタイプにアイコンや色を追加することができます。
 * 個々のクエストタイプのクエストタイプ名の入力には、
 * \i[x] と \c[x] のコードを省略することができますが、
 * それ以外はすべて正しくなければなりません。
 * デフォルト:
 * ["\\c[6]Main Quests","\\c[4]Side Quests","\\c[3]Character Quests",
 * "\\c[5]Tutorial Quests"]
 *
 * List Open Symbol
 * - クエストタイプを表示するために使用されるシンボルは開かれ
 * （その下にリストされているすべてのクエストを表示して）、
 * 閉じられません（その下にリストされているクエストを一切表示しません）。
 * デフォルト:-
 *
 * List Closed Symbol
 * - クエストタイプを表示するために使用されるシンボルは閉じられ
 * （その下にリストされているクエストのいずれも表示されていない）、
 * 開かれません（その下にリストされているクエストのすべてを表示します）。
 * デフォルト:+
 *
 * Type Text Format
 * - テキスト形成タイプは、Quest Listウィンドウにクエストタイプを表示します。
 * %1は開閉記号を参照します。
 * %2がクエストタイプの名前になります。
 * %3はこのクエストタイプの下にリストされているクエストの数を明らかにします。
 * デフォルト:%1%2 (%3)
 *
 * Quest Indent
 * - クエストタイプが表示されている場合、
 * 通常のクエストをどれだけインデントするかです。
 * プレイヤーが通常のクエストとクエストのタイプを区別するのを助けるためですが、
 * あなたがあなたのクエストのためにアイコンを使うことを計画し、
 * あなたのクエストのタイプのためにどれも使う必要がないならば必要ない。
 * デフォルト:0
 *
 * Show Empty
 * - 有効にすると、
 * 空で、それらの下にクエストがないクエストタイプを表示します。
 * 無効にされていると、
 * クエストを持たないクエストタイプはクエストリストに表示されず、
 * 混乱を減らすのに役立ちます。
 * デフォルト:false
 *
 * Read Quest
 * - 'ReadQuest'コマンドの表示テキスト。
 * エクストラアクションリストの表示を促す拡張プラグインがある場合のみ、
 * リストウィンドウに表示されます。
 * デフォルト:\i[121]Read Quest
 *
 * Cancel
 * - 'Cancel'コマンドの表示テキスト。
 * エクストラクションリストの表示を促す拡張プラグインがある場合、
 * このコマンドはリストウィンドウにのみ表示されます。
 * デフォルト:\i[16]Cancel
 *
 * ---
 *
 * Window Settings
 * -カテゴリウィンドウをカスタマイズしたい場合、
 * 様々な設定を調整してそのプロパティを調整できます。
 * ただし、
 * JavaScriptに精通していない限り、
 * エラーを発生させて
 * ウィンドウがゲーム内で機能しなくなる可能性があることに注意してください。
 *
 * デフォルト:
 *
 * X: 0
 * Y: Graphics.boxHeight - height
 * Width: Graphics.boxWidth / 3
 * Height: Graphics.boxHeight - this.fittingHeight(4)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Standard Opacity: 255
 * Back Opacity: 192
 * Type Alignment: left
 * Quest Alignment: left
 * Window Skin: Window
 *
 * ===========================================================================
 * 説明 - クエストタイトルウィンドウの設定
 * ===========================================================================
 *
 * プラグインのパラメータ'QuestTitleWindow'もデフォルトで
 * そのままにしておくことができますが、変更したいのであれば、
 * あなたが知っておくべきことです。
 *
 * ---
 *
 * No Quest Title
 * -クエストリストウィンドウでクエストが選択されていない場合、
 * このテキストはクエストタイトルウィンドウに表示されます。
 * それ以外の場合、
 * 選択したクエストの名前はデータウィンドウの上に表示されます。
 * 制御文字を使用できます。
 * デフォルト:\c[4]Quest Journal
 *
 * ---
 *
 * Window Settings
 * -カテゴリウィンドウをカスタマイズしたい場合、
 * 様々な設定を調整してそのプロパティを調整できます。
 * ただし、
 * JavaScriptに精通していない限り、
 * エラーを発生させて
 * ウィンドウがゲーム内で機能しなくなる可能性があることに注意してください。
 *
 * X: Graphics.boxWidth - width
 * Y: 0
 * Width: Graphics.boxWidth2 / 3
 * Height: this.fittingHeight(1)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Text Alignment: center
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 *
 * ===========================================================================
 * 説明 - クエストデータウィンドウの設定
 * ===========================================================================
 *
 * プラグインパラメータ'QuestDataWindow'は、
 * クエスト内に含まれる様々な情報を表示するように修正することができます。
 * このデータは、
 * プレイヤーがクエストを遂行し完了するために
 * 必要なことを理解するために使用されます。
 * このウィンドウの設定はそのままにしておくことができますが、
 * 変更したいと思うでしょう。
 *
 * ---
 *
 * No Data Text
 * - クエストリストウィンドウで現在選択されているクエストがない時、
 * データウィンドウに表示されるテキストです。
 * 制御文字を使用して、
 * テキストがプレーヤーにとってより鮮明に見えるようにすることができます。
 *
 * デフォルト:
 * Welcome to the \c[4]Quest Journal\c[0].
 *
 * 世界中の人々から受けたクエストを確認できます。
 *
 * Word Wrap Version (Requires YEP_MessageCore.js):
 * <WordWrap>Welcome to the \c[4]Quest Journal\c[0].
 * <br>
 * <br>世界中の人々から受けたクエストを確認できます。
 *
 * Quest Data Format
 * - このフォーマットは、
 * クエストデータウィンドウのデータがプレイヤーに表示される形式です。
 * 様々な制御文字を使用して、
 * クエストデータウィンドウをプレイヤーにとってより明確にすることができます。
 * 以下は、各データを参照します。
 * %1 - アイコンや色付きの制御文字なしでタイトル
 * %2 - クエストの難易度
 * %3 - 依頼者
 * %4 - 依頼場所
 * %5 - クエストの現在の説明、クエストの途中で変更することができます。
 * %6 - 達成に必要な目的
 * %7 - 報酬
 * %8 - クエストのサブテキスト
 *
 * デフォルト:
 * \{%1\}
 * \c[4]Level:\c[0] %2
 * \c[4]From:\c[0] %3
 * \c[4]Location:\c[0] %4
 *
 * \c[4]Description:\c[0]
 * %5
 *
 * \c[4]Objectives:\c[0]
 * %6
 *
 * \c[4]Rewards:\c[0]
 * %7
 *
 * %8
 *
 * Word Wrap Version (Requires YEP_MessageCore.js):
 * <WordWrap>\{%1\}
 * <br>\c[4]Level:\c[0] %2
 * <br>\c[4]From:\c[0] %3
 * <br>\c[4]Location:\c[0] %4
 * <br>
 * <br>\c[4]Description:\c[0]
 * <br>%5
 * <br>
 * <br>\c[4]Objectives:\c[0]
 * <br>%6
 * <br>
 * <br>\c[4]Rewards:\c[0]
 * <br>%7
 * <br>
 * <br>%8
 *
 * Uncleared Objective
 * - 各目的について表示されるテキスト形式で、
 * 未完了でも失敗でもありません。
 * %1は目的のテキストに置き換えられます。
 * デフォルト:\i[160]%1
 *
 * Completed Objective
 * - 目的が完了している場合、
 * 代わりにこのテキストフォーマットが使用されます。
 * %1は目的のテキストに置き換えられます。
 * デフォルト:\i[165]%1
 *
 * Failed Objective
 * - 目的が失敗した場合、
 * 代わりにこのテキストフォーマットが使用されます。
 * %1は目的のテキストに置き換えられます。
 * デフォルト:\i[162]%1
 *
 * Unclaimed Reward
 * - 請求も拒否もされていない各報酬アイテムに表示されるテキスト形式です。
 * %1は報酬のテキストに置き換えられます。
 * デフォルト:\i[160]%1
 *
 * Claimed Reward
 * - 報酬が請求された場合、
 * 代わりにこのテキストフォーマットが使用され、
 * %1は報酬のテキストに置き換えられます。
 * デフォルト:\i[163]%1
 *
 * Denied Reward
 * - 報酬が拒否された場合、
 * 代わりにこのテキストフォーマットが使用されます。
 * %1は報酬のテキストに置き換えられます。
 * デフォルト:\i[161]%1
 *
 * Load Delay
 * - 要求のデータをウィンドウ自体にロードする前に
 * データウィンドウが待機するフレームの量です。
 * カーソルが通過する全てのクエストをロードすることによって
 * ゲームエンジンに過度の負担をかけることを防ぐためであり、
 * カーソルが特定のクエストエントリにxフレーム分落ち着くまで待機します。
 * デフォルト:30
 *
 * ---
 *
 * Window Settings
 * - カテゴリウィンドウをカスタマイズしたい場合、
 * 様々な設定を調整してそのプロパティを調整できます。
 * ただし、
 * JavaScriptに精通していない限り、
 * エラーを発生させて
 * ウィンドウがゲーム内で機能しなくなる可能性があることに注意してください。
 *
 * X: Graphics.boxWidth - width
 * Y: Graphics.boxHeight - height
 * Width: Graphics.boxWidth2 / 3
 * Height: Graphics.boxHeight - this.fittingHeight(1)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 * Scroll Speed: 4
 *
 * ===========================================================================
 * 説明 - 新しいクエストの設定
 * ===========================================================================
 *
 * デフォルトでは、作られたクエストはありません。
 * 1つずつ設定しなければなりません。
 * YEP_QuestJournal.jsのプラグインパラメータに行き、
 * ---QuestList---セクションを見てください。
 * これらのエントリはそれぞれ空から始まります。
 * ただし、変更する場合、
 * クエストの設定方法を説明するテンプレートが表示されます。
 * 各パラメータの機能は次のとおりです。
 *
 * ---
 *
 * Title
 * - クエストのタイトルです。
 * それは3つの場所に現れます。クエストリスト、クエストタイトルウィンドウ、
 * それをデータウィンドウに表示するためにフォーマットするならば、
 * それは同様にそこに現れるでしょう。
 * 制御文字を使ってクエストの色を変えたり、
 * クエストのアイコンを付けたりすることができます。
 *
 * Type
 * - クエストタイプです。
 * リストウィンドウからクエストタイプを表示することにした場合、
 * このクエストがその下に表示される場所になります。
 * テンプレートにはいくつかの人気のあるクエストタイプの
 * ドロップダウンウィンドウがありますが、
 * 自由なクエストタイプを入力することができます。
 * 大文字と小文字を区別し、
 * クエストタイプを正しくタイプする必要があることを覚えておいてください。
 * ただし、
 * \i[x]・\c[x]の制御文字は省略できます。
 *
 * Difficulty
 * - 実効的な影響はありません。
 * クエストの難易度を表示するためだけのものです
 * ここに望むどんなタイプのテキストでも挿入することができます。
 * クエストデータウィンドウに表示されます。
 *
 * From
 * - 実効的な影響はありません。
 * どの人物が
 * このクエストを発行したかを述べるために使うことができるので、
 * プレイヤーはクエストの結果を出す時間になった時、
 * 誰に戻るべきかを知るための基準点を持つことができます。
 *
 * Location
 * - 実効的な影響はありません。
 * クエストがどの場所から来たのかを伝えるために使うことができ、
 * プレイヤーの労力を減らすことができます。
 *
 * Description
 * - 実効的な影響はありません。
 * プレイヤーにクエストの内容を説明し、
 * プレイヤーが実際にしなければならないことに関する
 * 一連の一般的な指示を提供するためによく使用されます。
 * 複数の説明を入力できます。
 * ただし、最初の説明だけがデフォルトで表示されます。
 * 複数の説明を入力する場合、
 * プラグインコマンドを使用してエントリを変更できます。
 * 'Quest x Change Description Entry To y'
 * 説明エントリを変更し、クエストの途中で他の何かを表示する。
 *
 * Objectives List
 * - 実効的な影響はありません。
 * 目的リストは一般に、プレイヤーがクエストを完了するために行う必要がある
 * 特定の命令のセットを表示するために使用されます。
 * プレーヤーによって達成される必要がある複数の目的を示すために、
 * 複数セットの目的を表示することができます。
 *
 * Visible Objectives
 * - クエストがゲームのクエストジャーナルに追加された時、
 * デフォルトで表示されることになる一連の目的のリストです。
 * 内部の各番号エントリは、
 * 'ObjectivesList'プラグインパラメータにある
 * 目的ID(それらの注文位置)を参照します。
 *
 * Rewards List
 * - 実効的な影響はありません。
 * このリストは、クエストを終えた結果としてプレイヤーが
 * 何を得なければならないかを示します。
 * プレーヤが1タイプ以上の報酬を受け取ることを示すために、
 * 複数組の報酬を表示することができます。
 *
 * Visible Rewards
 * - クエストがゲームのクエストジャーナルに追加された時、
 * デフォルトで表示される報酬のセットのリストです。
 * その中のそれぞれの番号エントリは、
 * 'RewardsList'プラグインパラメータにある
 * 報酬ID(それらの注文ポジション)を参照します。
 *
 * Subtext
 * - 実効的な影響はありません。
 * データウィンドウの他の場所に収まらないメッセージを
 * プレーヤーに提供するためのフッターとして使用されます。
 * これを使用するかどうかは開発者の自由です。
 * 途中でサブテキストを更新したい場合、
 * 複数セットのサブテキストを使用できます。
 *
 * ===========================================================================
 * Main Menu Manager - クエストジャーナルコマンドの配置
 * ===========================================================================
 *
 * MainMenuManager.js を使用していて、
 * Questコマンドを好きな場所に配置したい場合、
 * 次の形式を使用してください。
 *
 *       Name: Yanfly.Param.QuestCmdName
 *     Symbol: quest
 *       Show: $gameSystem.isShowQuest()
 *    Enabled: $gameSystem.isEnableQuest()
 *        Ext:
 *  Main Bind: this.commandQuest.bind(this)
 * Actor Bind:
 *
 * MainMenuManagerのスロットに上記の設定を挿入します。
 * 正確な設定を必要な場所にコピーすると、
 * 全ての命名の使用、
 * 有効化、
 * 無効化、
 * 非表示、
 * 及びプラグインパラメータによる効果の表示中にその設定が表示されます。
 *
 * プラグインパラメータから 'Auto Place Command'を
 * オフにするのを忘れないでください。
 *
 * ===========================================================================
 * スクリプトコール
 * ===========================================================================
 *
 * このプラグインでは、
 * 特定のイベントに対して様々なスクリプトコールを使用して、
 * クエストの進行状況を確認できます。
 * 様々なイベントタイプと、
 * それらと共に使用できる様々なスクリプトコールです。
 *
 * --- イベントの変数の操作で使えるスクリプト ---
 *
 * $gameSystem.totalQuestsAvailable()
 *  - 変数の値を進行中クエストの数に設定します。
 *
 * $gameSystem.totalQuestsCompleted()
 *  - 変数の値を完了したクエストの数に設定します。
 *
 * $gameSystem.totalQuestsFailed()
 *  - 変数の値を失敗したクエストの数に設定します。
 *
 * $gameSystem.totalQuestsKnown()
 *  - 変数の値を既知のクエストの総数に設定します。
 *
 * $gameSystem.totalQuestsInGame()
 *  - 変数の値をゲーム内のクエストの総数に設定します。
 *
 * $gameSystem.totalQuestTypes(category, type)
 * - カテゴリを指定するには、
 * 'category'を'available'、'completed'、'failed'、'all'
 * のいずれかに置き換えます。
 * 'type'をクエストタイプに置き換えます。
 * ('Main Quest'、'Side Quest'、'Character Quest'など)
 * カテゴリとタイプの前後に引用符を含める
 * 例: $gameSystem.totalQuestTypes('all', 'Main Quests')
 *
 * $gameSystem.getQuestDescriptionIndex(questId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * どの説明が現在使用されているかを示すために変数を設定します。
 * 例: $gameSystem.getQuestDescriptionIndex(50)
 *
 * $gameSystem.totalVisibleQuestObjectives(questId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 現在選択されているクエストに対して、
 * いくつのクエスト目的が現在表示されているかを示す変数を設定します。
 * 例: $gameSystem.totalVisibleQuestObjectives(50)
 *
 * $gameSystem.totalQuestObjectives(questId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 選択されたクエストの設定に対して、
 * いくつのクエスト目的が合計されているかを示す変数を設定します。
 * 例: $gameSystem.totalQuestObjectives(50)
 *
 * $gameSystem.totalVisibleQuestRewards(questId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 選択されたクエストに対して、
 * 現在いくつのクエスト報酬が表示されているかを示す変数を設定します。
 * 例: $gameSystem.totalVisibleQuestRewards(50)
 *
 * $gameSystem.totalQuestRewards(questId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 変数を設定して、
 * 選択されたクエストの設定に対して
 * どれだけのクエスト報酬があるかを示します。
 * 例: $gameSystem.totalQuestRewards(50)
 *
 * $gameSystem.getQuestSubtextIndex(questId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 現在使用されているサブテキストを示す変数を設定します。
 * 例: $gameSystem.getQuestSubtextIndex(50)
 *
 * --- イベントの条件分岐で使えるスクリプト ---
 *
 * $gameSystem.isQuestObjectiveCompleted(questId, objectiveId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 'objectiveId'を、
 * チェックしようとしている目的のIDに置き換えます。
 * 条件付きブランチのスクリプトコールを調べて、
 * 目的の状況が完了したか(true)、
 * そうでないか(false)を確認します。
 * 例: $gameSystem.isQuestObjectiveCompleted(50, 1)
 *
 * $gameSystem.isQuestObjectiveFailed(questId, objectiveId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 'objectiveId'を、
 * チェックしようとしている目的のIDに置き換えます。
 * 条件付きブランチのスクリプトコールで、
 * 目的のステータスが失敗したか(true)、
 * そうでないか(false)を確認します。
 * 例: $gameSystem.isQuestObjectiveFailed(50, 1)
 *
 * $gameSystem.isQuestObjectiveUncleared(questId, objectiveId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 'objectiveId'を、
 * チェックしようとしている目的のIDに置き換えます。
 * 条件付きブランチのスクリプトコールをチェックして、
 * 目的の状況が完了も失敗もしていない(true)か、
 * どちらか(false)かを確認します。
 * 例: $gameSystem.isQuestObjectiveUncleared(50, 1)
 *
 * $gameSystem.isQuestRewardClaimed(questId, rewardId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 'rewardId'を、
 * チェックしようとしている報酬のIDに置き換えます。
 * 条件付きブランチのスクリプトコールをチェックして、
 * 報酬のステータスが主張されている(true)か否か(false)を確認します。
 * 例: $gameSystem.isQuestRewardClaimed(50, 1)
 *
 * $gameSystem.isQuestRewardDenied(questId, rewardId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 'rewardId'を、
 * チェックしようとしている報酬のIDに置き換えます。
 * 条件付きブランチのスクリプトコールをチェックして、
 * 報酬のステータスが拒否されるか(true)、
 * 否か(false)を確認します。
 * 例: $gameSystem.isQuestRewardDenied(50, 1)
 *
 * $gameSystem.isQuestRewardUnclaimed(questId, rewardId)
 * - 'questId'を探しているクエストのIDに置き換えます。
 * 'rewardId'を、
 * チェックしようとしている報酬のIDに置き換えます。
 * 条件付きブランチのスクリプトコールをチェックして、
 * 報酬のステータスが主張も拒否もされていないか(true)、
 * どちらか(false)を確認します。
 * 例: $gameSystem.isQuestRewardUnclaimed(50, 1)
 *
 * ===========================================================================
 * プラグインコマンド
 * ===========================================================================
 *
 * ゲームの中でクエストジャーナルシステムを制御するために使用できる
 * 様々なプラグインコマンドがあります。
 *
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * プラグインコマンド:
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 *
 *   Quest Journal Open
 *   - クエストが選択されていない状態で
 *   クエストジャーナルシステムメニューを開きます。
 *
 *   Quest Journal Open To x
 *   - 'x'をクエストジャーナルで開きたいクエストIDに置き換えます。
 *   このプラグインコマンドが実行された時点で
 *   クエストがプレイヤーに知られていない場合、
 *   クエストはプレイヤーのクエストジャーナルに追加されます。
 *
 *   ---
 *
 *   Quest Journal Show
 *   Quest Journal Hide
 *   - メインメニューからクエストジャーナルオプションを
 *   表示または非表示にします。
 *
 *   Quest Journal Enable
 *   Quest Journal Disable
 *   - メインメニューのQuest Journalオプションを有効または無効にします。
 *
 *   ---
 *
 *   Quest Add x
 *   - 'x'を整数に置き換えます。
 *   進行中クエストとしてクエストID'x'をクエストジャーナルに追加します。
 *   ゲーム内のクエストジャーナルシステムのメニューから見ることができます。
 *
 *   Quest Add x to y
 *   - 'x'と'y'を、クエストジャーナルに追加したいクエストIDの範囲を
 *   決定する整数値に置き換えます。
 *
 *   Quest Add x, x, x
 *   - クエストジャーナルに追加したいクエストIDを表す整数値で'x'値を
 *   置き換えます。
 *
 *   ---
 *
 *   Quest Remove x
 *   - 'x'を整数に置き換えます。
 *   クエストジャーナルからクエストID'x'が削除されます。
 *
 *   Quest Remove x to y
 *   - 'x'と'y'を、クエストジャーナルから削除したいクエストIDの範囲を
 *   決定する整数値に置き換えます。
 *
 *   Quest Remove x, x, x
 *   - クエストジャーナルから削除したいクエストIDを表す整数値で
 *   'x'値を置き換えます。
 *
 *   ---
 *
 *   Quest Set Completed x
 *   Quest Set Failed x
 *   Quest Set Available x
 *   - 'x'をクエストステータスを'完了'、
 *   '失敗'、'進行中'に変更したいクエストIDに置き換えます。
 *
 *   Quest Set Completed x to y
 *   Quest Set Failed x to y
 *   Quest Set Available x to y
 *   - 'x'と'y'を、
 *   完了、失敗、進行中として設定するクエストIDの範囲を
 *   決定する整数値に置き換えます。
 *
 *   Quest Set Completed x, x, x
 *   Quest Set Failed x, x, x
 *   Quest Set Available x, x, x
 *   - 'x'の値を、完了、失敗、進行中として
 *   設定したいクエストIDを表す整数値に置き換えます。
 *
 *   ---
 *
 *   Quest x Change Description Entry To y
 *   - 'x'を説明を修正したいQuestIDに置き換えます。
 *   'y'をクエストを変更したい説明エントリIDに置き換えます。
 *   クエストジャーナルでゲーム内で表示された時、
 *   クエスト'x'のプラグインパラメータにある説明エントリID'y'が表示されます。
 *   クエストの途中で説明文を更新したい時、使います。
 *
 *   ---
 *
 *   Quest x Show Objective y
 *   Quest x Hide Objective y
 *   - 'x'を目的を変更したいQuestIDに置き換えます。
 *   表示/非表示にする対物レンズIDで'y'を置き換えます。
 *   クエストは一度に複数の目的を示すことができます。
 *
 *   Quest x Show Objective y to z
 *   Quest x Hide Objective y to z
 *   - 'x'を目的を変更したいQuestIDに置き換えます。
 *   'y'と'z'を、
 *   表示/非表示にする目的のID範囲に置き換えます。
 *   クエストは一度に複数の目的を示すことができます。
 *
 *   Quest x Show Objective y, y, y
 *   Quest x Hide Objective y, y, y
 *   - 'x'を目的を変更したいQuestIDに置き換えます。
 *   表示/非表示にするオブジェクトIDを表す整数値で'y'値を置き換えます。
 *   クエストは一度に複数の目的を示すことができます。
 *
 *   Quest X Show All Objectives
 *   Quest X Hide All Objectives
 *   - 'x'を目的を変更したいQuestIDに置き換えます。
 *   クエストの目的の全てを表示/非表示にします。
 *
 *   Quest x Complete Objective y
 *   Quest x Fail Objective y
 *   Quest x Normalize Objective y
 *   - 'x'を目的を変更したいQuestIDに置き換えます。
 *   'y'を、状況を変更したい目的IDに置き換えます。
 *   'Complete'を使用すると、目的は完了としてマークされます。
 *   'Fail'を使用すると、目的は失敗としてマークされます。
 *   'Normalize'を使用すると、
 *   対物レンズのステータスが'未完了'・'失敗'に設定されます。
 *
 *   Quest x Complete Objective y to z
 *   Quest x Fail Objective y to z
 *   Quest x Normalize Objective y to z
 *   - 'x'を目的を変更したいQuestIDに置き換えます。
 *   'Complete'を使用すると、目的は完了としてマークされます。
 *   'Fail'を使用すると、目的は失敗としてマークされます。
 *   'Normalize'を使用すると、
 *   対物レンズのステータスが'未完了'・'失敗'に設定されます。
 *
 *   Quest x Complete Objective y, y, y
 *   Quest x Fail Objective y, y, y
 *   Quest x Normalize Objective y, y, y
 *   - 'x'を目的を変更したいQuestIDに置き換えます。
 *   'y'の値を、ステータスを変更したい客観的IDを表す整数値に置き換えます。
 *   'Complete'を使用すると、目的は完了としてマークされます。
 *   'Fail'を使用すると、目的は失敗としてマークされます。
 *   'Normalize'を使用すると、
 *   対物レンズのステータスが'未完了'・'失敗'に設定されます。
 *
 *   Quest x Complete All Objectives
 *   Quest x Fail All Objectives
 *   Quest x Normalize All Objectives
 *   - 'x'を目的を変更したいQuestIDに置き換えます。
 *   クエストの目的の全てを完了/失敗/正規化します。
 *
 *   ---
 *
 *   Quest x Show Reward y
 *   Quest x Hide Reward y
 *   - 報酬を変更したいクエストIDで'x'を置き換えます。
 *   表示/非表示にする報酬IDで'y'を置き換えます。
 *   クエストは一度に複数の報酬を見せることができます。
 *
 *   Quest x Show Reward y to z
 *   Quest x Hide Reward y to z
 *   - 報酬を変更したいクエストIDで'x'を置き換えます。
 *   'y'と'z'を、表示/非表示にする報酬IDの範囲に置き換えます。
 *   クエストは一度に複数の報酬を見せることができます。
 *
 *   Quest x Show Reward y, y, y
 *   Quest x Hide Reward y, y, y
 *   - 報酬を変更したいクエストIDで'x'を置き換えます。
 *   表示/非表示にする報酬IDを表す整数値で'y'値を置き換えます。
 *   クエストは一度に複数の報酬を見せることができます。
 *
 *   Quest x Show All Rewards
 *   Quest x Hide All Rewards
 *   - 報酬を変更したいクエストIDで'x'を置き換えます。
 *   クエストの報酬を全て表示/非表示にします。
 *
 *   Quest x Claim Reward y
 *   Quest x Deny Reward y
 *   Quest x Normalize Reward y
 *   - 報酬を変更したいクエストIDで'x'を置き換えます。
 *   ステータスを変更したい報酬IDで'y'を置き換えます。
 *   'Claim'を使用すると、報酬に請求のマークが付けられます。
 *   'Deny'を使用すると、報酬に拒否のマークが付けられます。
 *   'Normalize'を使用すると、報酬のステータスは請求も拒否もされません。
 *
 *   Quest x Claim Reward y to z
 *   Quest x Deny Reward y to z
 *   Quest x Normalize Reward y to z
 *   - 報酬を変更したいクエストIDで'x'を置き換えます。
 *   'y'と'z'を、ステータスを変更したい報酬IDの範囲に置き換えます。
 *   'Claim'を使用すると、報酬に請求のマークが付けられます。
 *   'Deny'を使用すると、報酬に拒否のマークが付けられます。
 *   'Normalize'を使用すると、報酬のステータスは請求も拒否もされません。
 *
 *   Quest x Claim Reward y, y, y
 *   Quest x Deny Reward y, y, y
 *   Quest x Normalize Reward y, y, y
 *   - 報酬を変更したいクエストIDで'x'を置き換えます。
 *   ステータスを変更したい報酬IDを表す整数値で'y'値を置き換えます。
 *   'Claim'を使用すると、報酬に請求のマークが付けられます。
 *   'Deny'を使用すると、報酬に拒否のマークが付けられます。
 *   'Normalize'を使用すると、報酬のステータスは請求も拒否もされません。
 *
 *   Quest x Claim All Rewards
 *   Quest x Deny All Rewards
 *   Quest x Normalize All Rewards
 *   - 報酬を変更したいクエストIDで'x'を置き換えます。
 *   クエストの報酬を全て主張/拒否/正規化します。
 *
 *   ---
 *
 *   Quest x Change Subtext Entry To y
 *   - 'x'をサブテキストを変更したいQuestIDに置き換えます。
 *   クエストを変更したいサブテキストエントリIDで'y'を置き換えます。
 *   クエストジャーナルでゲーム内で表示された時、
 *   サブテキストは、クエスト'x'のプラグインパラメータにある
 *   サブテキストエントリID'y'を表示します。
 *   クエストの途中でサブテキストのテキストを更新したい場合に使用されます。
 *
 *   ---
 *
 * ===========================================================================
 * 説明 - ルナティックモード
 * ===========================================================================
 *
 * プラグインパラメータ'LunaticMode'は、
 * JavaScriptに精通している使用者向けに作られています。
 * これらのパラメータは、
 * それぞれのクエストジャーナル機能がゲーム内で発生した時、
 * それぞれの機能に追加のコード行を追加することを可能にします。
 * タイミングは機能が起こった後、
 * そして、それが変更を提供することに成功した場合だけ起こるでしょう。
 *
 *   ---
 *
 *   Before Create Windows
 *   After Create Windows
 *   Close Quest Menu
 *
 *   ---
 *
 *   Quest Add
 *   Quest Remove
 *   Quest Complete
 *   Quest Fail
 *   Quest Available
 *
 *   ---
 *
 *   Change Description
 *
 *   ---
 *
 *   Show Objective
 *   Hide Objective
 *   Complete Objective
 *   Fail Objective
 *   Normalize Objective
 *
 *   ---
 *
 *   Show Reward
 *   Hide Reward
 *   Claim Reward
 *   Deny Reward
 *   Normalize Reward
 *
 *   ---
 *
 *   Change Subtext
 *
 *   ---
 *
 * 注意すべきいくつかの規則があります。
 * これらの各プラグイン機能のコードは、
 * 次の規則を満たしている場合のみ実行されます。
 *
 * 1.変更されたクエスト・クエストプロパティ毎にコードが実行されます。
 * 一度に一連のクエスト・クエストプロパティを変更する
 * プラグインコマンドを使用した場合、
 * コードは各クエスト・クエストプロパティに対して個別に複数回実行されます。
 *
 * 2.コードはクエスト・クエストプロパティへの変更が
 * 成功した場合のみ実行されます。
 * 例えば、クエストがすでに'失敗'に設定されている場合、
 * そのクエストを再度失敗させるためにプラグインコマンドを実行しても、
 * ルナティックモードコードが再度実行されることはありません。
 *
 * 3.クエストが最初に追加された時、
 * そのクエストに追加されたデフォルトのプロパティは
 * ルナティックモードの実行をトリガーしません。
 * 例えば、
 * 追加されているクエストが最初から目に見える目的1と2を持っている場合、
 * ルナティックモードコードは1と2に対して実行されません。
 *
 * カスタムコードが実行されるかどうかを決定するものがわかるように、
 * 必ずこれらの規則を理解してください。
 *
 * ===========================================================================
 * Changelog
 * ===========================================================================
 *
 * Version 1.02:
 * - Fixed a bug that caused a game freeze when using the Quest Journal Open
 * plugin command.
 *
 * Version 1.01:
 * - Fixed some bugs regarding certain plugin commands not working properly.
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ===========================================================================
 * End of Help
 * ===========================================================================
 *
 * @param ---メインメニュー---
 * @text ---メインメニュー---
 * @default
 *
 * @param Quest Command
 * @text コマンド表示テキスト
 * @parent ---メインメニュー---
 * @desc メインメニューコマンドでの表示テキスト
 * @default クエスト
 *
 * @param Show Command
 * @text コマンド表示有効化
 * @parent ---メインメニュー---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc クエストコマンドをメインメニューへデフォルト表示
 * 非表示:false / 表示:true
 * @default true
 *
 * @param Enable Command
 * @text コマンド有効化
 * @parent ---メインメニュー---
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc クエストコマンドをメインメニューでデフォルト有効化
 * 無効:false / 有効:true
 * @default true
 *
 * @param Auto Place Command
 * @text コマンド自動配置
 * @parent ---メインメニュー---
 * @type boolean
 * @on 自動
 * @off 手動
 * @desc メニュー配置位置を自動化
 * 手動:false / 自動:true
 * @default true
 *
 * @param ---クエストメニュー---
 * @default
 *
 * @param Quest Category Window
 * @text カテゴリウィンドウ
 * @parent ---クエストメニュー---
 * @type struct<CategoryWindow>
 * @desc クエストカテゴリウィンドウのプロパティを調整してください。
 * @default {"---カテゴリ---":"","Category Order":"[\"available\",\"completed\",\"failed\",\"all\"]","Available Text":"\\i[192]進行中 (%1)","Completed Text":"\\i[191]完了 (%1)","Failed Text":"\\i[194]失敗 (%1)","All Text":"\\i[189]全クエスト (%1)","Cancel Text":"\\i[161]閉じる","---ウィンドウ---":"","X":"0","Y":"0","Width":"Graphics.boxWidth / 3","Height":"this.fittingHeight(this.numVisibleRows())","Rows":"4","Columns":"1","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Text Alignment":"left","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window"}
 *
 * @param Quest List Window
 * @text リストウィンドウ
 * @parent ---クエストメニュー---
 * @type struct<ListWindow>
 * @desc クエストリストウィンドウのプロパティを調整してください。
 * @default {"---タイプ---":"","Show Types":"true","Type Order":"[\"\\\\c[6]メイン\",\"\\\\c[4]サイド\",\"\\\\c[3]人物\",\"\\\\c[5]指導\"]","List Open Symbol":"-","List Closed Symbol":"+","Type Text Format":"%1%2 (%3)","Quest Indent":"0","Show Empty":"false","Read Quest":"\\i[121]クエストを見る","Cancel":"\\i[16]閉じる","---ウィンドウ---":"","X":"0","Y":"Graphics.boxHeight - height","Width":"Graphics.boxWidth / 3","Height":"Graphics.boxHeight - this.fittingHeight(4)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Standard Opacity":"255","Back Opacity":"192","Type Alignment":"left","Quest Alignment":"left","Window Skin":"Window"}
 *
 * @param Quest Title Window
 * @text タイトルウィンドウ
 * @parent ---クエストメニュー---
 * @type struct<TitleWindow>
 * @desc クエストタイトルウィンドウのプロパティを調整します。
 * @default {"---ウィンドウ---":"","No Quest Title":"\\c[4]クエストジャーナル","X":"Graphics.boxWidth - width","Y":"0","Width":"Graphics.boxWidth * 2 / 3","Height":"this.fittingHeight(1)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Text Alignment":"center","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window"}
 *
 * @param Quest Data Window
 * @text データウィンドウ
 * @parent ---クエストメニュー---
 * @type struct<DataWindow>
 * @desc クエストデータウィンドウのプロパティを調整します。
 * @default {"---データ---":"","No Data Text":"\"\\\\c[4]クエストジャーナル\\\\c[0]では、\\n世界中の人々から受けたクエストを\\n確認できます。\"","Quest Data Format":"\"<wrap>\\\\{%1\\\\}\\n<br>\\\\c[4]難易度:\\\\c[0] %2\\n<br>\\\\c[4]依頼者:\\\\c[0] %3\\n<br>\\\\c[4]場所:\\\\c[0] %4\\n<br>\\n<br>\\\\c[4]説明:\\\\c[0]\\n<br>%5\\n<br>\\n<br>\\\\c[4]目的:\\\\c[0]\\n<br>%6\\n<br>\\n<br>\\\\c[4]報酬:\\\\c[0]\\n<br>%7\\n<br>\\n<br>%8\"","Uncleared Objective":"\\i[160]%1","Completed Objective":"\\i[165]%1","Failed Objective":"\\i[162]%1","Unclaimed Reward":"\\i[160]%1","Claimed Reward":"\\i[163]%1","Denied Reward":"\\i[161]%1","Load Delay":"30","---ウィンドウ---":"","X":"Graphics.boxWidth - width","Y":"Graphics.boxHeight - height","Width":"Graphics.boxWidth * 2 / 3","Height":"Graphics.boxHeight - this.fittingHeight(1)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window","Scroll Speed":"4"}
 *
 * @param Lunatic Mode
 * @text ルナティックモード
 * @parent ---クエストメニュー---
 * @type struct<LunaticMode>
 * @desc プラグインの各主要機能にカスタムコードを追加します。
 * @default {"---クエストメニュー---":"","Before Create Windows":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\\n//\\n// background.bitmap = ImageManager.loadTitle1(\\\"Book\\\");\\n// this.fitScreen(background);\"","After Create Windows":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\"","Close Quest Menu":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\"","---クエスト状況---":"","Quest Add":"\"// Variables:\\n//   questId - ID of the quest being added\\n//\\n// console.log('Quest ' + questId + ' successfully added!')\"","Quest Remove":"\"// Variables:\\n//   questId - ID of the quest being removed\\n//\\n// console.log('Quest ' + questId + ' successfully removed!')\"","Quest Complete":"\"// Variables:\\n//   questId - ID of the quest set to completed\\n//\\n// console.log('Quest ' + questId + ' status changed to Completed!')\"","Quest Fail":"\"// Variables:\\n//   questId - ID of the quest set to failed\\n//\\n// console.log('Quest ' + questId + ' status changed to Failed!')\"","Quest Available":"\"// Variables:\\n//   questId - ID of the quest set to available\\n//\\n// console.log('Quest ' + questId + ' status changed to Available!')\"","---説明文---":"","Change Description":"\"// Variables:\\n//   questId - ID of the quest whose description is changed\\n//   index - Description index being changed to\\n//\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\"","---目的---":"","Show Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective being shown\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\"","Hide Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective being hidden\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\"","Complete Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective being completed\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\"","Fail Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective having failed\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\"","Normalize Objective":"\"// Variables:\\n//   questId - ID of the quest whose objectives are altered\\n//   objectiveId - ID of the objective normalized\\n//\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\"","---報酬---":"","Show Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward being shown\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\"","Hide Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward being hidden\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\"","Claim Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward becoming claimed\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\"","Deny Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward becoming denied\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\"","Normalize Reward":"\"// Variables:\\n//   questId - ID of the quest whose rewards are altered\\n//   rewardId - ID of the reward normalized\\n//\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\"","---サブテキスト---":"","Change Subtext":"\"// Variables:\\n//   questId - ID of the quest whose subtext is changed\\n//   index - Subtext index being changed to\\n//\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\""}
 *
 * @param ---クエストリスト---
 * @default
 *
 * @param Quest 1
 * @text クエスト1
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 2
 * @text クエスト2
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 3
 * @text クエスト3
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 4
 * @text クエスト4
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 5
 * @text クエスト5
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 6
 * @text クエスト6
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 7
 * @text クエスト7
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 8
 * @text クエスト8
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 9
 * @text クエスト9
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 10
 * @text クエスト10
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 11
 * @text クエスト11
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 12
 * @text クエスト12
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 13
 * @text クエスト13
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 14
 * @text クエスト14
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 15
 * @text クエスト15
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 16
 * @text クエスト16
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 17
 * @text クエスト17
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 18
 * @text クエスト18
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 19
 * @text クエスト19
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 20
 * @text クエスト20
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 21
 * @text クエスト21
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 22
 * @text クエスト22
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 23
 * @text クエスト23
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 24
 * @text クエスト24
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 25
 * @text クエスト25
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 26
 * @text クエスト26
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 27
 * @text クエスト27
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 28
 * @text クエスト28
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 29
 * @text クエスト29
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 30
 * @text クエスト30
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 31
 * @text クエスト31
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 32
 * @text クエスト32
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 33
 * @text クエスト33
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 34
 * @text クエスト34
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 35
 * @text クエスト35
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 36
 * @text クエスト36
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 37
 * @text クエスト37
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 38
 * @text クエスト38
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 39
 * @text クエスト39
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 40
 * @text クエスト40
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 41
 * @text クエスト41
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 42
 * @text クエスト42
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 43
 * @text クエスト43
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 44
 * @text クエスト44
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 45
 * @text クエスト45
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 46
 * @text クエスト46
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 47
 * @text クエスト47
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 48
 * @text クエスト48
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 49
 * @text クエスト49
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 50
 * @text クエスト50
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 51
 * @text クエスト51
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 52
 * @text クエスト52
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 53
 * @text クエスト53
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 54
 * @text クエスト54
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 55
 * @text クエスト55
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 56
 * @text クエスト56
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 57
 * @text クエスト57
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 58
 * @text クエスト58
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 59
 * @text クエスト59
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 60
 * @text クエスト60
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 61
 * @text クエスト61
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 62
 * @text クエスト62
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 63
 * @text クエスト63
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 64
 * @text クエスト64
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 65
 * @text クエスト65
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 66
 * @text クエスト66
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 67
 * @text クエスト67
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 68
 * @text クエスト68
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 69
 * @text クエスト69
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 70
 * @text クエスト70
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 71
 * @text クエスト71
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 72
 * @text クエスト72
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 73
 * @text クエスト73
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 74
 * @text クエスト74
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 75
 * @text クエスト75
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 76
 * @text クエスト76
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 77
 * @text クエスト77
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 78
 * @text クエスト78
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 79
 * @text クエスト79
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 80
 * @text クエスト80
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 81
 * @text クエスト81
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 82
 * @text クエスト82
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 83
 * @text クエスト83
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 84
 * @text クエスト84
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 85
 * @text クエスト85
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 86
 * @text クエスト86
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 87
 * @text クエスト87
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 88
 * @text クエスト88
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 89
 * @text クエスト89
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 90
 * @text クエスト90
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 91
 * @text クエスト91
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 92
 * @text クエスト92
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 93
 * @text クエスト93
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 94
 * @text クエスト94
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 95
 * @text クエスト95
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 96
 * @text クエスト96
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 97
 * @text クエスト97
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 98
 * @text クエスト98
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 99
 * @text クエスト99
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 *
 * @param Quest 100
 * @text クエスト100
 * @parent ---クエストリスト---
 * @type struct<Quest>
 * @desc このクエストエントリで使用されるデータを変更します。各設定の詳細については、ヘルプを参照してください。
 * @default
 */
//============================================================================
/* プラグインのパラメーター構造の設定
 *============================================================================
 */
/* ---------------------------------------------------------------------------
 * カテゴリウィンドウのパラメーター構造
 * ---------------------------------------------------------------------------
 */
/*~struct~CategoryWindow:ja
 * @param ---カテゴリ---
 * @default
 *
 * @param Category Order
 * @text オーダー
 * @parent ---カテゴリ---
 * @type string[]
 * @desc クエストタイプのカテゴリのオーダーリスト。
 * Options: available, completed, failed, all, cancel
 * @default ["available","completed","failed","all"]
 *
 * @param Available Text
 * @text 進行中表示形式
 * @parent ---カテゴリ---
 * @desc '進行中'クエストの表示テキスト。制御文字使用可(%1:クエスト番号)
 * @default \i[192]進行中 (%1)
 *
 * @param Completed Text
 * @text 完了表示形式
 * @parent ---カテゴリ---
 * @desc '完了'クエストの表示テキスト。制御文字使用可(%1:クエスト番号)
 * @default \i[191]完了 (%1)
 *
 * @param Failed Text
 * @text 失敗表示形式
 * @parent ---カテゴリ---
 * @desc '失敗'クエストの表示テキスト。制御文字使用可(%1:クエスト番号)
 * @default \i[194]失敗 (%1)
 *
 * @param All Text
 * @text 全て表示形式
 * @parent ---カテゴリ---
 * @desc '全て'クエストの表示テキスト。制御文字使用可(%1:クエスト番号)
 * @default \i[189]全て (%1)
 *
 * @param Cancel Text
 * @text キャンセル表示形式
 * @parent ---カテゴリ---
 * @desc 'キャンセル'オプションの表示テキスト。制御文字使用可
 * @default \i[161]キャンセル
 *
 * @param ---ウィンドウ---
 * @default
 *
 * @param X
 * @text X位置
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc ウィンドウのX位置の計算式
 * @default 0
 *
 * @param Y
 * @text Y位置
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc ウィンドウのY位置の計算式
 * @default 0
 *
 * @param Width
 * @text 幅
 * @parent ---ウィンドウ---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc ウィンドウ幅の計算式
 * @default Graphics.boxWidth / 3
 *
 * @param Height
 * @text 高さ
 * @parent ---ウィンドウ---
 * @type combo
 * @option this.fittingHeight(1)
 * @option this.fittingHeight(2)
 * @option this.fittingHeight(3)
 * @option this.fittingHeight(4)
 * @option this.fittingHeight(5)
 * @option this.fittingHeight(this.numVisibleRows())
 * @desc ウィンドウ高の計算式
 * @default this.fittingHeight(this.numVisibleRows())
 *
 * @param Rows
 * @text 行数
 * @parent ---ウィンドウ---
 * @type combo
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @desc ウィンドウ行数の式
 * @default 4
 *
 * @param Columns
 * @text 列数
 * @parent ---ウィンドウ---
 * @type combo
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @desc ウィンドウの列数の式
 * @default 1
 *
 * @param Line Height
 * @text 行高
 * @parent ---ウィンドウ---
 * @type number
 * @min 1
 * @desc 各エントリの行高
 * @default 36
 *
 * @param Font Face
 * @text フォント
 * @parent ---ウィンドウ---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc 使用フォント
 * @default GameFont
 *
 * @param Font Size
 * @text フォントサイズ
 * @parent ---ウィンドウ---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc フォントサイズの式
 * @default 28
 *
 * @param Standard Padding
 * @text 余白
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc ウィンドウ余白の式
 * @default 18
 *
 * @param Text Padding
 * @text テキスト前余白
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc テキスト表示する前余白の式
 * @default 6
 *
 * @param Text Alignment
 * @text テキスト配置
 * @parent ---ウィンドウ---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc ウィンドウ内のテキスト配置
 * 左:left / 中央:center / 右:right
 * @default left
 *
 * @param Standard Opacity
 * @text 標準不透明度
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc ウィンドウ標準の不透明度の式
 * @default 255
 *
 * @param Back Opacity
 * @text 背景不透明度
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc ウィンドウ不透明度の式
 * @default 192
 *
 * @param Window Skin
 * @text ウィンドウスキン
 * @parent ---ウィンドウ---
 * @type file
 * @dir img/system/
 * @desc ウィンドウスキン
 * @default Window
 *
 */
/* ---------------------------------------------------------------------------
 * リストウィンドウのパラメーター構造
 * ---------------------------------------------------------------------------
 */
/*~struct~ListWindow:ja
 * @param ---タイプ---
 * @default
 *
 * @param Show Types
 * @text タイプ表示
 * @parent ---タイプ---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc クエストリストにタイプを表示
 * @default true
 *
 * @param Type Order
 * @text タイプリスト
 * @parent ---タイプ---
 * @type string[]
 * @desc クエストタイプのリスト。好きな名前をつけてください。制御文字使用可
 * @default ["\\c[6]メイン","\\c[4]サイド","\\c[3]人物","\\c[5]指導"]
 *
 * @param List Open Symbol
 * @text 開いたリストのシンボル
 * @parent ---タイプ---
 * @desc タイプが開かれている時に表示されるインジケータ。開かれたタイプは内の全てのクエストを表示します。
 * @default -
 *
 * @param List Closed Symbol
 * @text 閉じたリストのシンボル
 * @parent ---タイプ---
 * @desc タイプが閉じている時に表示されるインジケータ。閉じられたタイプは内の全てのクエストを表示しません。
 * @default +
 *
 * @param Type Text Format
 * @text タイプ表示形式
 * @parent ---タイプ---
 * @desc クエストタイプの表示形式。制御文字使用可
 * %1:リストの状態シンボル / %2:タイプ名 / %3:クエスト番号
 * @default %1%2 (%3)
 *
 * @param Quest Indent
 * @text インデント
 * @parent ---タイプ---
 * @number
 * @number 0
 * @desc クエストをインデントするピクセル数
 * @default 0
 *
 * @param Show Empty
 * @text 空の表示
 * @parent ---タイプ---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 空のクエストタイプを表示しますか？しない場合、クエストのないタイプはリストから隠されます。
 * @default false
 *
 * @param Read Quest
 * @text クエスト確認
 * @parent ---タイプ---
 * @desc 'ReadQuest'オプションの表示テキスト。制御文字使用可
 * @default \\i[121]クエスト確認
 *
 * @param Cancel
 * @text キャンセル
 * @parent ---タイプ---
 * @desc 'Cancel'オプションの表示テキスト。制御文字使用可
 * @default \\i[16]キャンセル
 *
 * @param ---ウィンドウ---
 * @default
 *
 * @param X
 * @text X位置
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc ウィンドウのX位置の計算式
 * @default 0
 *
 * @param Y
 * @text Y位置
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc ウィンドウのY位置の計算式
 * @default Graphics.boxHeight - height
 *
 * @param Width
 * @text 幅
 * @parent ---ウィンドウ---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc ウィンドウ幅の計算式
 * @default Graphics.boxWidth / 3
 *
 * @param Height
 * @text 高さ
 * @parent ---ウィンドウ---
 * @type combo
 * @option Graphics.boxHeight - this.fittingHeight(1)
 * @option Graphics.boxHeight - this.fittingHeight(2)
 * @option Graphics.boxHeight - this.fittingHeight(3)
 * @option Graphics.boxHeight - this.fittingHeight(4)
 * @option Graphics.boxHeight - this.fittingHeight(5)
 * @desc ウィンドウ高の計算式
 * @default Graphics.boxHeight - this.fittingHeight(4)
 *
 * @param Line Height
 * @text 行高
 * @parent ---ウィンドウ---
 * @type number
 * @min 1
 * @desc 各エントリの行高
 * @default 36
 *
 * @param Font Face
 * @text フォント
 * @parent ---ウィンドウ---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc 使用フォント
 * @default GameFont
 *
 * @param Font Size
 * @text フォントサイズ
 * @parent ---ウィンドウ---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc フォントサイズの式
 * @default 28
 *
 * @param Standard Padding
 * @text 余白
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc ウィンドウ余白の式
 * @default 18
 *
 * @param Text Padding
 * @text テキスト前余白
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc テキスト表示する前余白の式
 * @default 6
 *
 * @param Standard Opacity
 * @text 不透明度
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc ウィンドウ標準の不透明度の式
 * @default 255
 *
 * @param Back Opacity
 * @text 背景不透明度
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc ウィンドウ不透明度の式
 * @default 192
 *
 * @param Type Alignment
 * @text タイプのテキスト配置
 * @parent ---ウィンドウ---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc クエストタイプのテキスト配置
 * 左:left / 中央:center / 右:right
 * @default left
 *
 * @param Quest Alignment
 * @text クエストのテキスト配置
 * @parent ---ウィンドウ---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc クエスト自体のテキスト配置
 * 左:left / 中央:center / 右:right
 * @default left
 *
 * @param Window Skin
 * @text ウィンドウスキン
 * @parent ---ウィンドウ---
 * @type file
 * @dir img/system/
 * @desc ウィンドウスキン
 * @default Window
 *
 */
/* ---------------------------------------------------------------------------
 * タイトルウィンドウのパラメーター構造
 * ---------------------------------------------------------------------------
 */
/*~struct~TitleWindow:ja
 * @param ---ウィンドウ---
 * @default
 *
 * @param No Quest Title
 * @text クエストタイトルなし
 * @parent ---ウィンドウ---
 * @desc クエストが選択されていない表示
 * 制御文字使用可
 * @default \\c[4]クエストジャーナル
 *
 * @param X
 * @text X位置
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc ウィンドウのX位置の計算式
 * @default Graphics.boxWidth - width
 *
 * @param Y
 * @text Y位置
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc ウィンドウのY位置の計算式
 * @default 0
 *
 * @param Width
 * @text 幅
 * @parent ---ウィンドウ---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc ウィンドウ幅の計算式
 * @default Graphics.boxWidth * 2 / 3
 *
 * @param Height
 * @text 高さ
 * @parent ---ウィンドウ---
 * @type combo
 * @option this.fittingHeight(1)
 * @option this.fittingHeight(2)
 * @option this.fittingHeight(3)
 * @option this.fittingHeight(4)
 * @option this.fittingHeight(5)
 * @desc ウィンドウ高の計算式
 * @default this.fittingHeight(1)
 *
 * @param Line Height
 * @text 行高
 * @parent ---ウィンドウ---
 * @type number
 * @min 1
 * @desc 各エントリの行高
 * @default 36
 *
 * @param Font Face
 * @text フォント
 * @parent ---ウィンドウ---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc 使用フォント
 * @default GameFont
 *
 * @param Font Size
 * @text フォントサイズ
 * @parent ---ウィンドウ---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc フォントサイズの式
 * @default 28
 *
 * @param Standard Padding
 * @text 余白
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc ウィンドウ余白の式
 * @default 18
 *
 * @param Text Padding
 * @text テキスト前余白
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc テキスト表示する前余白の式
 * @default 6
 *
 * @param Text Alignment
 * @text テキスト配置
 * @parent ---ウィンドウ---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc ウィンドウのテキスト配置
 * 左:left / 中央:center / 右:right
 * @default center
 *
 * @param Standard Opacity
 * @text 不透明度
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc ウィンドウ標準の不透明度の式
 * @default 255
 *
 * @param Back Opacity
 * @text 背景不透明度
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc ウィンドウ不透明度の式
 * @default 192
 *
 * @param Window Skin
 * @text ウィンドウスキン
 * @parent ---ウィンドウ---
 * @type file
 * @dir img/system/
 * @desc ウィンドウスキン
 * @default Window
 *
 */
/* ---------------------------------------------------------------------------
 * データウィンドウのパラメーター構造
 * ---------------------------------------------------------------------------
 */
/*~struct~DataWindow:ja
 * @param ---データ---
 * @default
 *
 * @param No Data Text
 * @text 無データ時テキスト
 * @parent ---データ---
 * @type note
 * @desc 進行中クエストがない場合の表示テキスト
 * @default "\\c[4]クエストジャーナル\\c[0]へようこそ。\n\nここでは、世界中の人々から与えられた\n様々なクエストを確認できます。"
 *
 * @param Quest Data Format
 * @text クエスト表示形式
 * @parent ---データ---
 * @type note
 * @desc %1:タイトル / %2:難易度 / %3:依頼者 / %4:場所 / %5:説明 / %6:目的 / %7:報酬 / %8:サブテキスト
 * @default "\\{%1\\}\n\\c[4]難易度:\\c[0] %2\n\\c[4]依頼者:\\c[0] %3\n\\c[4]場所:\\c[0] %4\n\n\\c[4]説明:\\c[0]\n%5\n\n\\c[4]目的:\\c[0]\n%6\n\n\\c[4]報酬:\\c[0]\n%7\n\n%8"
 *
 * @param Uncleared Objective
 * @text 未確認クエスト
 * @parent ---データ---
 * @desc 未確認クエストの表示形式
 * %1 - クエスト目的
 * @default \i[160]%1
 *
 * @param Completed Objective
 * @text 完了クエスト
 * @parent ---データ---
 * @desc 完了クエストの表示形式
 * %1 - クエスト目的
 * @default \i[165]%1
 *
 * @param Failed Objective
 * @text 失敗クエスト
 * @parent ---データ---
 * @desc 失敗クエストの表示形式
 * %1 - クエスト目的
 * @default \i[162]%1
 *
 * @param Unclaimed Reward
 * @text 未請求クエスト
 * @parent ---データ---
 * @desc 未請求クエストの報酬の表示形式
 * %1 - 報酬
 * @default \i[160]%1
 *
 * @param Claimed Reward
 * @text クエスト報酬
 * @parent ---データ---
 * @desc 要求されたクエスト報酬の表示形式
 * %1 - 報酬
 * @default \i[163]%1
 *
 * @param Denied Reward
 * @text 拒否クエスト報酬
 * @parent ---データ---
 * @desc 拒否されたクエスト報酬の表示形式
 * %1 - 報酬
 * @default \i[161]%1
 *
 * @param Load Delay
 * @text 読込待ち時間
 * @parent ---データ---
 * @type number
 * @desc フレーム単位のデータの読み込み待ち時間。エンジンの過負荷を防ぐためです。
 * @default 30
 *
 * @param ---ウィンドウ---
 * @default
 *
 * @param X
 * @text X位置
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc ウィンドウのX位置の計算式
 * @default Graphics.boxWidth - width
 *
 * @param Y
 * @text Y位置
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc ウィンドウのY位置の計算式
 * @default Graphics.boxHeight - height
 *
 * @param Width
 * @text 幅
 * @parent ---ウィンドウ---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc ウィンドウ幅の計算式
 * @default Graphics.boxWidth * 2 / 3
 *
 * @param Height
 * @text 高さ
 * @parent ---ウィンドウ---
 * @type combo
 * @option Graphics.boxHeight - this.fittingHeight(1)
 * @option Graphics.boxHeight - this.fittingHeight(2)
 * @option Graphics.boxHeight - this.fittingHeight(3)
 * @option Graphics.boxHeight - this.fittingHeight(4)
 * @option Graphics.boxHeight - this.fittingHeight(5)
 * @desc ウィンドウ高の計算式
 * @default Graphics.boxHeight - this.fittingHeight(1)
 *
 * @param Line Height
 * @text 行数
 * @parent ---ウィンドウ---
 * @type number
 * @min 1
 * @desc 各エントリの行高
 * @default 36
 *
 * @param Font Face
 * @text フォント
 * @parent ---ウィンドウ---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc 使用フォント
 * @default GameFont
 *
 * @param Font Size
 * @text フォントサイズ
 * @parent ---ウィンドウ---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc フォントサイズの式
 * @default 28
 *
 * @param Standard Padding
 * @text 余白
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc ウィンドウ余白の式
 * @default 18
 *
 * @param Text Padding
 * @text テキスト前余白
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc テキスト表示する前パディングの式
 * @default 6
 *
 * @param Standard Opacity
 * @text 標準不透明度
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc ウィンドウ標準の不透明度の式
 * @default 255
 *
 * @param Back Opacity
 * @text 背景不透明度
 * @parent ---ウィンドウ---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc ウィンドウ不透明度の式
 * @default 192
 *
 * @param Window Skin
 * @text ウィンドウスキン
 * @parent ---ウィンドウ---
 * @type file
 * @dir img/system/
 * @desc ウィンドウスキン
 * @default Window
 *
 * @param Scroll Speed
 * @text スクロール速度
 * @parent ---ウィンドウ---
 * @type number
 * @min 1
 * @desc ウィンドウの上下スクロール速度
 * @default 4
 *
 */
/* ---------------------------------------------------------------------------
 * ルナティックモードのパラメーター構造
 * ---------------------------------------------------------------------------
 */
/*~struct~LunaticMode:ja
 * @param ---クエストメニュー---
 * @default
 *
 * @param Before Create Windows
 * @text ウィンドウ作成前
 * @parent ---クエストメニュー---
 * @type note
 * @desc このコードは、シーン用のクエストメニューが作成される前に実行されます。
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows\n//\n// background.bitmap = ImageManager.loadTitle1(\"Book\");\n// this.fitScreen(background);"
 *
 * @param After Create Windows
 * @text ウィンドウ作成後
 * @parent ---クエストメニュー---
 * @type note
 * @desc このコードは、すべてのクエストメニューがシーン用に作成された後に実行されます。
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows"
 *
 * @param Close Quest Menu
 * @text メニューを閉じる時
 * @parent ---クエストメニュー---
 * @type note
 * @desc このコードは、クエストメニューが閉じられた時に実行されます。
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows"
 *
 * @param ---クエスト状況---
 * @default
 *
 * @param Quest Add
 * @text 追加
 * @parent ---クエスト状況---
 * @type note
 * @desc このコードは、クエストがクエストジャーナルに追加されたときに実行されます。
 * @default "// Variables:\n//   questId - ID of the quest being added\n//\n// console.log('Quest ' + questId + ' successfully added!')"
 *
 * @param Quest Remove
 * @text 削除
 * @parent ---クエスト状況---
 * @type note
 * @desc このコードは、クエストがクエストジャーナルから削除されたときに実行されます。
 * @default "// Variables:\n//   questId - ID of the quest being removed\n//\n// console.log('Quest ' + questId + ' successfully removed!')"
 *
 * @param Quest Complete
 * @text 完了
 * @parent ---クエスト状況---
 * @type note
 * @desc このコードは、クエストのステータスが完了に変わる度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest set to completed\n//\n// console.log('Quest ' + questId + ' status changed to Completed!')"
 *
 * @param Quest Fail
 * @text 失敗
 * @parent ---クエスト状況---
 * @type note
 * @desc このコードは、クエストのステータスが失敗に変わる度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest set to failed\n//\n// console.log('Quest ' + questId + ' status changed to Failed!')"
 *
 * @param Quest Available
 * @text 進行中
 * @parent ---クエスト状況---
 * @type note
 * @desc このコードは、クエストのステータスが進行中に変わる度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest set to available\n//\n// console.log('Quest ' + questId + ' status changed to Available!')"
 *
 * @param ---説明文---
 * @default
 *
 * @param Change Description
 * @text 変更
 * @parent ---説明文---
 * @type note
 * @desc このコードは、クエストの説明が特定のインデックスに変更される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose description is changed\n//   index - Description index being changed to\n//\n// console.log('Quest ' + questId + ' description index changed to ' + index)"
 *
 * @param ---目的---
 * @default
 *
 * @param Show Objective
 * @text 表示
 * @parent ---目的---
 * @type note
 * @desc このコードは、クエストの目的が示される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective being shown\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')"
 *
 * @param Hide Objective
 * @text 非表示
 * @parent ---目的---
 * @type note
 * @desc このコードは、クエストの目的が隠される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective being hidden\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')"
 *
 * @param Complete Objective
 * @text 達成
 * @parent ---目的---
 * @type note
 * @desc このコードは、クエストの目的が達成される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective being completed\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')"
 *
 * @param Fail Objective
 * @text 失敗
 * @parent ---目的---
 * @type note
 * @desc このコードは、クエストの目的が失敗する度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective having failed\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')"
 *
 * @param Normalize Objective
 * @text 正規化
 * @parent ---目的---
 * @type note
 * @desc このコードは、クエストの目的が正規化される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose objectives are altered\n//   objectiveId - ID of the objective normalized\n//\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')"
 *
 * @param ---報酬---
 * @default
 *
 * @param Show Reward
 * @text 表示
 * @parent ---報酬---
 * @type note
 * @desc このコードは、クエストの報酬が表示される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward being shown\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')"
 *
 * @param Hide Reward
 * @text 非表示
 * @parent ---報酬---
 * @type note
 * @desc このコードは、クエストの報酬が隠される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward being hidden\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')"
 *
 * @param Claim Reward
 * @text 請求
 * @parent ---報酬---
 * @type note
 * @desc このコードは、クエストの報酬が請求される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward becoming claimed\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')"
 *
 * @param Deny Reward
 * @text 拒否
 * @parent ---報酬---
 * @type note
 * @desc このコードは、クエストの報酬が拒否される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward becoming denied\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')"
 *
 * @param Normalize Reward
 * @text 正規化
 * @parent ---報酬---
 * @type note
 * @desc このコードは、クエストの報酬が正規化される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose rewards are altered\n//   rewardId - ID of the reward normalized\n//\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')"
 *
 * @param ---サブテキスト---
 * @default
 *
 * @param Change Subtext
 * @text サブテキスト変更
 * @parent ---サブテキスト---
 * @type note
 * @desc このコードは、クエストのサブテキストが特定のインデックスに変更される度に実行されます。
 * @default "// Variables:\n//   questId - ID of the quest whose subtext is changed\n//   index - Subtext index being changed to\n//\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)"
 *
 */
/* ---------------------------------------------------------------------------
 * クエストのパラメーター構造
 * ---------------------------------------------------------------------------
 */
/*~struct~Quest:ja
 *
 * @param Title
 * @text タイトル
 * @desc クエストのタイトル
 * 制御文字使用可
 * @default \i[87]無題のクエスト
 *
 * @param Type
 * @text タイプ
 * @parent Title
 * @type combo
 * @option メイン
 * @option サイド
 * @option 人物
 * @option 指導
 * @desc クエストのタイプ
 * @default メイン
 *
 * @param Difficulty
 * @text 難易度
 * @parent Title
 * @desc このクエストの難易度
 * 制御文字使用可
 * @default \i[87]\i[87]\i[87]
 *
 * @param From
 * @text 依頼者
 * @parent Title
 * @desc このクエストを発行したNPCの名前
 * 制御文字使用可
 * @default NPCの名前
 *
 * @param Location
 * @text 場所
 * @parent Title
 * @desc このクエストを発行したNPCの場所
 * 制御文字使用可
 * @default NPCの場所
 *
 * @param Description
 * @text 説明
 * @parent Title
 * @type note[]
 * @desc このクエストの説明
 * 制御文字使用可
 * @default ["\"\\\\c[4]デフォルト\\\\c[0]クエスト説明\"","\"\\\\c[4]デフォルト\\\\c[0]クエスト説明です。\\n\\nクエストの進行中に途中でクエストの説明を更新したい場合、\\複数の説明エントリを挿入できます。\""]
 *
 * @param Objectives List
 * @text 目的リスト
 * @type note[]
 * @desc このクエストのために達成されるべき目的
 * 制御文字使用可
 * @default ["\"\\\\c[4]最初に\\\\c[0]クリアする目的\"","\"\\\\c[4]第2の\\\\c[0]隠された目的\"","\"他の目的を表示するには、\\nプラグインパラメータ\\n\\\\c[4]'Visible Objectives'\\\\c[0]を使用するか、\\nプラグインコマンドを使用します。\""]
 *
 * @param Visible Objectives
 * @text 提示目的
 * @parent Objectives List
 * @type number[]
 * @min 1
 * @desc 最初の提示目的
 * @default ["1"]
 *
 * @param Rewards List
 * @text 報酬リスト
 * @type note[]
 * @desc このクエストの報酬リスト
 * 制御文字使用可
 * @default ["\"\\\\i[176]ポーション x5\"","\"\\\\i[178]エーテル x3\"","\"他の報酬を表示するには、\\nプラグインパラメータ\\n\\\\c[4]'提示報酬'\\\\c[0]を使用するか、\\nプラグインコマンドを使用します。\""]
 *
 * @param Visible Rewards
 * @text 提示報酬
 * @parent Rewards List
 * @type number[]
 * @min 1
 * @desc 最初の提示報酬
 * @default ["1"]
 *
 * @param Subtext
 * @text サブテキスト
 * @type note[]
 * @desc クエストと共に表示されるサブテキスト
 * @default ["\"\"","\"サブテキストです。\\nクエストジャーナルに表示する説明文とは\\n別の付属文として表示されます。\""]
 */
//=============================================================================

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.3.5") {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_QuestJournal');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.QuestCmdName = String(Yanfly.Parameters['Quest Command']);
Yanfly.Param.QuestCmdShow = eval(Yanfly.Parameters['Show Command']);
Yanfly.Param.QuestCmdEnable = eval(Yanfly.Parameters['Enable Command']);
Yanfly.Param.QuestCmdPlace = eval(Yanfly.Parameters['Auto Place Command']);

Yanfly.Param.QuestCategoryWindow = 
  JSON.parse(Yanfly.Parameters['Quest Category Window']);
Yanfly.Param.QuestListWindow = 
  JSON.parse(Yanfly.Parameters['Quest List Window']);
Yanfly.Param.QuestTitleWindow = 
  JSON.parse(Yanfly.Parameters['Quest Title Window']);
Yanfly.Param.QuestDataWindow = 
  JSON.parse(Yanfly.Parameters['Quest Data Window']);
Yanfly.Quest.LunaticMode = 
  JSON.parse(Yanfly.Parameters['Lunatic Mode']);

//=============================================================================
// TouchInput
//=============================================================================

Yanfly.Quest.TouchInput_onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
  Yanfly.Quest.TouchInput_onMouseMove.call(this, event);
  this._mouseOverX = Graphics.pageToCanvasX(event.pageX);
  this._mouseOverY = Graphics.pageToCanvasY(event.pageY);
};

//=============================================================================
// DataManager
//=============================================================================

var $dataQuests = [null];
Yanfly.Quest.totalCount = 0;

DataManager.questDatabaseAdd = function(id, data) {
  if (!data) return $dataQuests.push(null);
  data = this.questDataFailsafe(id, data);
  var visibleObjectives = JSON.parse(data['Visible Objectives']);
  for (var i = 0; i < visibleObjectives.length; ++i) {
    visibleObjectives[i] = parseInt(visibleObjectives[i]);
  };
  var visibleRewards = JSON.parse(data['Visible Rewards']);
  for (var i = 0; i < visibleRewards.length; ++i) {
    visibleRewards[i] = parseInt(visibleRewards[i]);
  };
  var description = JSON.parse(data['Description']);
  description.unshift('');
  var objectives = JSON.parse(data['Objectives List']);
  objectives.unshift('');
  var rewards = JSON.parse(data['Rewards List']);
  rewards.unshift('');
  var subtext = JSON.parse(data['Subtext']);
  subtext.unshift('');
  var type = data['Type'];
  type = type.replace(/\\I\[(\d+)\]/gi, '').trim();
  type = type.replace(/\\C\[(\d+)\]/gi, '').trim();
  var quest = {
    name: data['Title'],
    id: id,
    type: type,
    difficulty: data['Difficulty'],
    from: data['From'],
    location: data['Location'],
    description: description,
    objectives: objectives,
    visibleObjectives: visibleObjectives,
    rewards: rewards,
    visibleRewards: visibleRewards,
    subtext: subtext,
    note: ''
  };
  $dataQuests[id] = quest;
  Yanfly.Quest.totalCount += 1;
};

DataManager.questDataFailsafe = function(id, data) {
  if (!data['Title']) data['Title'] = "\\i[87]Unfinished Quest";
  if (!data['Type']) data['Type'] = "Main Quests";
  if (!data['Difficulty']) data['Difficulty'] = "Easy Peasy";
  if (!data['From']) data['From'] = "NPC Name";
  if (!data['Location']) data['Location'] = "Location Name";
  if (!data['Description']) data['Description'] = "[\"\\\"\\\"\"]";
  if (data['Description'] === '[]') data['Description'] = "[\"\\\"\\\"\"]";
  if (!data['Objectives List']) data['Objectives List'] = "[\"\\\"\\\"\"]";
  if (data['Objectives List'] === '[]') data['Objectives List'] =
    "[\"\\\"\\\"\"]";
  if (!data['Visible Objectives']) data['Visible Objectives'] = "[\"1\"]";
  if (!data['Rewards List']) data['Rewards List'] = "[\"\\\"\\\"\"]";
  if (data['Rewards List'] === '[]') data['Rewards List'] = "[\"\\\"\\\"\"]";
  if (!data['Visible Rewards']) data['Visible Rewards'] = "[\"1\"]";
  if (!data['Subtext']) data['Subtext'] = "[\"\\\"\\\"\"]";
  if (data['Subtext'] === '[]') data['Subtext'] = "[\"\\\"\\\"\"]";
  return data;
};

DataManager.questDatabaseCreate = function() {
  $dataQuests = [null];
  for (var i = 1; i <= 100; ++i) {
    var questData = JSON.parse(Yanfly.Parameters['Quest ' + i] || 'null');
    if (!questData) continue;
    this.questDatabaseAdd(i, questData);
  };
};

DataManager.questDatabaseCreate();

//=============================================================================
// Game_Temp
//=============================================================================

Game_Temp.prototype.reservedQuestOpen = function(questId) {
  this._questOpen = questId;
};

Game_Temp.prototype.getQuestOpen = function() {
  return this._questOpen;
};

Game_Temp.prototype.clearQuestOpen = function() {
  this._questOpen = undefined;
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.Quest.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Yanfly.Quest.Game_System_initialize.call(this);
  this.initQuestSettings();
};

Game_System.prototype.initQuestSettings = function() {
  this._showQuest = this._showQuest || Yanfly.Param.QuestCmdShow;
  this._enableQuest = this._enableQuest || Yanfly.Param.QuestCmdEnable;
  this._questsKnown = this._questsKnown || [];
  this._questsCompleted = this._questsCompleted || [];
  this._questsFailed = this._questsFailed || [];
  this._questsDescription = this._questsDescription || {};
  this._questsObjectives = this._questsObjectives || {};
  this._questsObjectivesCompleted = this._questsObjectivesCompleted || {};
  this._questsObjectivesFailed = this._questsObjectivesFailed || {};
  this._questsRewards = this._questsRewards || {};
  this._questsRewardsClaimed = this._questsRewardsClaimed || {};
  this._questsRewardsDenied = this._questsRewardsDenied || {};
  this._questsSubtext = this._questsSubtext || {};
};

Game_System.prototype.isShowQuest = function() {
  this.initQuestSettings();
  return this._showQuest;
};

Game_System.prototype.setShowQuest = function(value) {
  this.initQuestSettings();
  this._showQuest = value;
};

Game_System.prototype.isEnableQuest = function() {
  this.initQuestSettings();
  return this._enableQuest;
};

Game_System.prototype.setEnableQuest = function(value) {
  this.initQuestSettings();
  this._enableQuest = value;
};

Game_System.prototype.getQuestsAvailable = function() {
  this.initQuestSettings();
  var result = [];
  var length = this._questsKnown.length;
  for (var i = 0; i < length; ++i) {
    var questId = this._questsKnown[i];
    if (this._questsCompleted.contains(questId)) continue;
    if (this._questsFailed.contains(questId)) continue;
    result.push(questId);
  }
  return result;
};

Game_System.prototype.getQuestsCompleted = function() {
  this.initQuestSettings();
  var result = [];
  var length = this._questsKnown.length;
  for (var i = 0; i < length; ++i) {
    var questId = this._questsKnown[i];
    if (this._questsCompleted.contains(questId)) result.push(questId);
  }
  return result;
};

Game_System.prototype.getQuestsFailed = function() {
  this.initQuestSettings();
  var result = [];
  var length = this._questsKnown.length;
  for (var i = 0; i < length; ++i) {
    var questId = this._questsKnown[i];
    if (this._questsFailed.contains(questId)) result.push(questId);
  }
  return result;
};

Game_System.prototype.getAllQuests = function() {
  this.initQuestSettings();
  return this._questsKnown;
};

Game_System.prototype.getTypeQuests = function(category, type) {
  this.initQuestSettings();
  category = category || 'all';
  type = type || '';
  var result = [];
  if (category === 'available') {
    var quests = this.getQuestsAvailable();
  } else if (category === 'completed') {
    var quests = this.getQuestsCompleted();
  } else if (category === 'failed') {
    var quests = this.getQuestsFailed();
  } else {
    var quests = this.getAllQuests();
  }
  var length = quests.length;
  for (var i = 0; i < length; ++i) {
    var questId = quests[i];
    var questData = $dataQuests[questId];
    if (!questData) continue;
    if (questData.type === type) result.push(questId);
  }
  return result;
};

Game_System.prototype.getQuestDescriptionIndex = function(questId) {
  this.initQuestSettings();
  return this._questsDescription[questId] || 0;
};

Game_System.prototype.getQuestObjectives = function(questId) {
  this.initQuestSettings();
  return this._questsObjectives[questId] || ['1'];
};

Game_System.prototype.getQuestObjectiveStatus = function(questId, objId) {
  this.initQuestSettings();
  this._questsObjectivesCompleted[questId] =
    this._questsObjectivesCompleted[questId] || [];
  this._questsObjectivesFailed[questId] =
    this._questsObjectivesFailed[questId] || [];
  if (this._questsObjectivesCompleted[questId].contains(objId)) {
    return 'Completed Objective';
  } else if (this._questsObjectivesFailed[questId].contains(objId)) {
    return 'Failed Objective';
  } else {
    return 'Uncleared Objective';
  }
};

Game_System.prototype.getQuestRewards = function(questId) {
  this.initQuestSettings();
  return this._questsRewards[questId] || ['1'];
};

Game_System.prototype.getQuestRewardStatus = function(questId, objId) {
  this.initQuestSettings();
  if (this._questsRewardsClaimed[questId].contains(objId)) {
    return 'Claimed Reward';
  } else if (this._questsRewardsDenied[questId].contains(objId)) {
    return 'Denied Reward';
  } else {
    return 'Unclaimed Reward';
  }
};

Game_System.prototype.getQuestSubtextIndex = function(questId) {
  this.initQuestSettings();
  return this._questsSubtext[questId] || 0;
};

Game_System.prototype.questAdd = function(questId) {
  this.initQuestSettings();
  if (this._questsKnown.contains(questId)) return;
  var questData = $dataQuests[questId];
  if (!questData) return;
  this._questsKnown.push(questId);
  this._questsKnown.sort(function(a, b) {
    return a - b;
  });
  this._questsDescription[questId] = 1;
  this._questsObjectives[questId] = [];
  for (var i = 0; i < questData['visibleObjectives'].length; ++i) {
    var value = questData['visibleObjectives'][i];
    this._questsObjectives[questId].push(value);
  }
  this._questsObjectivesCompleted[questId] = [];
  this._questsObjectivesFailed[questId] = [];
  this._questsRewards[questId] = [];
  for (var i = 0; i < questData['visibleRewards'].length; ++i) {
    var value = questData['visibleRewards'][i];
    this._questsRewards[questId].push(value);
  }
  this._questsRewardsClaimed[questId] = [];
  this._questsRewardsDenied[questId] = [];
  this._questsSubtext[questId] = 1;
  this.questAddCustomEval(questId);
};

Yanfly.Quest.questAdd = 
  JSON.parse(Yanfly.Quest.LunaticMode['Quest Add']);
Game_System.prototype.questAddCustomEval = function(questId) {
  eval(Yanfly.Quest.questAdd);
};

Game_System.prototype.questAddRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var questId = range[i];
    this.questAdd(questId);
  }
};

Game_System.prototype.questRemove = function(questId) {
  this.initQuestSettings();
  if (!this._questsKnown.contains(questId)) return;
  var index = this._questsKnown.indexOf(questId);
  this._questsKnown.splice(index, 1);
  this.questRemoveCustomEval(questId);
};

Yanfly.Quest.questRemove = 
  JSON.parse(Yanfly.Quest.LunaticMode['Quest Remove']);
Game_System.prototype.questRemoveCustomEval = function(questId) {
  eval(Yanfly.Quest.questRemove);
};

Game_System.prototype.questRemoveRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var questId = range[i];
    this.questRemove(questId);
  }
};

Game_System.prototype.questSetCompleted = function(questId) {
  this.initQuestSettings();
  var changed = false;
  if (!this._questsKnown.contains(questId)) this.questAdd(questId);
  if (!this._questsCompleted.contains(questId)) {
    changed = true;
    this._questsCompleted.push(questId);
    this._questsCompleted.sort(function(a, b) {
      return a - b;
    });
  }
  if (this._questsFailed.contains(questId)) {
    var index = this._questsFailed.indexOf(questId);
    this._questsFailed.splice(index, 1);
    this._questsFailed.sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.questSetCompletedEval(questId);
};

Yanfly.Quest.questSetCompleted = 
  JSON.parse(Yanfly.Quest.LunaticMode['Quest Complete']);
Game_System.prototype.questSetCompletedEval = function(questId) {
  eval(Yanfly.Quest.questSetCompleted);
};

Game_System.prototype.questSetCompletedRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var questId = range[i];
    this.questSetCompleted(questId);
  }
};

Game_System.prototype.questSetFailed = function(questId) {
  this.initQuestSettings();
  var changed = false;
  if (!this._questsKnown.contains(questId)) this.questAdd(questId);
  if (!this._questsFailed.contains(questId)) {
    changed = true;
    this._questsFailed.push(questId);
    this._questsFailed.sort(function(a, b) {
      return a - b;
    });
  }
  if (this._questsCompleted.contains(questId)) {
    var index = this._questsCompleted.indexOf(questId);
    this._questsCompleted.splice(index, 1);
    this._questsCompleted.sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.questSetFailedEval(questId);
};

Yanfly.Quest.questSetFailed = 
  JSON.parse(Yanfly.Quest.LunaticMode['Quest Fail']);
Game_System.prototype.questSetFailedEval = function(questId) {
  eval(Yanfly.Quest.questSetFailed);
};

Game_System.prototype.questSetFailedRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var questId = range[i];
    this.questSetFailed(questId);
  }
};

Game_System.prototype.questSetAvailable = function(questId) {
  this.initQuestSettings();
  var changed = false;
  if (!this._questsKnown.contains(questId)) this.questAdd(questId);
  if (this._questsCompleted.contains(questId)) {
    changed = true;
    var index = this._questsCompleted.indexOf(questId);
    this._questsCompleted.splice(index, 1);
    this._questsCompleted.sort(function(a, b) {
      return a - b;
    });
  }
  if (this._questsFailed.contains(questId)) {
    changed = true;
    var index = this._questsFailed.indexOf(questId);
    this._questsFailed.splice(index, 1);
    this._questsFailed.sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.questSetAvailableEval(questId);
};

Yanfly.Quest.questSetAvailable = 
  JSON.parse(Yanfly.Quest.LunaticMode['Quest Available']);
Game_System.prototype.questSetAvailableEval = function(questId) {
  eval(Yanfly.Quest.questSetAvailable);
};

Game_System.prototype.questSetAvailableRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var questId = range[i];
    this.questSetAvailable(questId);
  }
};

Game_System.prototype.questChangeDescriptionIndex = function(questId, index) {
  this.initQuestSettings();
  this._questsDescription[questId] = index;
  this.questChangeDescIndexEval(questId, index);
};

Yanfly.Quest.questChangeDescriptionIndex = 
  JSON.parse(Yanfly.Quest.LunaticMode['Change Description']);
Game_System.prototype.questChangeDescIndexEval = function(questId, index) {
  eval(Yanfly.Quest.questChangeDescriptionIndex);
};

Game_System.prototype.questObjectivesShow = function(questId, objectiveId) {
  this.initQuestSettings();
  this._questsObjectives[questId] = this._questsObjectives[questId] || [];
  if (this._questsObjectives[questId].contains(objectiveId)) return;
  this._questsObjectives[questId].push(objectiveId);
  this._questsObjectives[questId].sort(function(a, b) {
    return a - b;
  });
  this.questObjectivesShowEval(questId, objectiveId);
};

Yanfly.Quest.questObjectivesShow = 
  JSON.parse(Yanfly.Quest.LunaticMode['Show Objective']);
Game_System.prototype.questObjectivesShowEval = function(questId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Quest.questObjectivesShow);
};

Game_System.prototype.questObjectivesShowRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.questObjectivesShow(questId, objId);
  }
};

Game_System.prototype.questObjectivesShowAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.questObjectivesShow(questId, i);
  }
};

Game_System.prototype.questObjectivesHide = function(questId, objectiveId) {
  this.initQuestSettings();
  this._questsObjectives[questId] = this._questsObjectives[questId] || [];
  if (!this._questsObjectives[questId].contains(objectiveId)) return;
  var index = this._questsObjectives[questId].indexOf(objectiveId);
  this._questsObjectives[questId].splice(index, 1);
  this._questsObjectives[questId].sort(function(a, b) {
    return a - b;
  });
  this.questObjectivesHideEval(questId, objectiveId);
};

Yanfly.Quest.questObjectivesHide = 
  JSON.parse(Yanfly.Quest.LunaticMode['Hide Objective']);
Game_System.prototype.questObjectivesHideEval = function(questId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Quest.questObjectivesHide);
};

Game_System.prototype.questObjectivesHideRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.questObjectivesHide(questId, objId);
  }
};

Game_System.prototype.questObjectivesHideAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.questObjectivesHide(questId, i);
  }
};

Game_System.prototype.questObjectivesNormal = function(questId, objectiveId) {
  this.initQuestSettings();
  var changed = false;
  this._questsObjectivesCompleted[questId] = 
    this._questsObjectivesCompleted[questId] || [];
  if (this._questsObjectivesCompleted[questId].contains(objectiveId)) {
    changed = true;
    var index = this._questsObjectivesCompleted[questId].indexOf(objectiveId);
    this._questsObjectivesCompleted[questId].splice(index, 1);
    this._questsObjectivesCompleted[questId].sort(function(a, b) {
      return a - b;
    });
  }
  if (this._questsObjectivesFailed[questId].contains(objectiveId)) {
    changed = true;
    var index = this._questsObjectivesFailed[questId].indexOf(objectiveId);
    this._questsObjectivesFailed[questId].splice(index, 1);
    this._questsObjectivesFailed[questId].sort(function(a, b) {
      return a - b;
    });
  }
  this.questObjectivesNormalEval(questId, objectiveId);
};

Yanfly.Quest.questObjectivesNormal = 
  JSON.parse(Yanfly.Quest.LunaticMode['Normalize Objective']);
Game_System.prototype.questObjectivesNormalEval = function(questId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Quest.questObjectivesNormal);
};

Game_System.prototype.questObjectivesNormalRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.questObjectivesNormal(questId, objId);
  }
};

Game_System.prototype.questObjectivesNormalAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.questObjectivesNormal(questId, i);
  }
};

Game_System.prototype.questObjectivesComplete = function(questId, objectiveId) {
  this.initQuestSettings();
  var changed = false;
  this._questsObjectivesCompleted[questId] = 
    this._questsObjectivesCompleted[questId] || [];
  if (!this._questsObjectivesCompleted[questId].contains(objectiveId)) {
    changed = true;
    this._questsObjectivesCompleted[questId].push(objectiveId);
    this._questsObjectivesCompleted[questId].sort(function(a, b) {
      return a - b;
    });
  }
  this._questsObjectivesFailed[questId] = 
    this._questsObjectivesFailed[questId] || [];
  if (this._questsObjectivesFailed[questId].contains(objectiveId)) {
    var index = this._questsObjectivesFailed[questId].indexOf(objectiveId);
    this._questsObjectivesFailed[questId].splice(index, 1);
    this._questsObjectivesFailed[questId].sort(function(a, b) {
      return a - b;
    });
  }
  this.questObjectivesCompleteEval(questId, objectiveId);
};

Yanfly.Quest.questObjectivesComplete = 
  JSON.parse(Yanfly.Quest.LunaticMode['Complete Objective']);
Game_System.prototype.questObjectivesCompleteEval = function(questId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Quest.questObjectivesComplete);
};

Game_System.prototype.questObjectivesCompleteRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.questObjectivesComplete(questId, objId);
  }
};

Game_System.prototype.questObjectivesCompleteAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.questObjectivesComplete(questId, i);
  }
};

Game_System.prototype.questObjectivesFail = function(questId, objectiveId) {
  this.initQuestSettings();
  var changed = false;
  this._questsObjectivesFailed[questId] = 
    this._questsObjectivesFailed[questId] || [];
  if (!this._questsObjectivesFailed[questId].contains(objectiveId)) {
    changed = true;
    this._questsObjectivesFailed[questId].push(objectiveId);
    this._questsObjectivesFailed[questId].sort(function(a, b) {
      return a - b;
    });
  }
  this._questsObjectivesCompleted[questId] = 
    this._questsObjectivesCompleted[questId] || [];
  if (this._questsObjectivesCompleted[questId].contains(objectiveId)) {
    var index = this._questsObjectivesCompleted[questId].indexOf(objectiveId);
    this._questsObjectivesCompleted[questId].splice(index, 1);
    this._questsObjectivesCompleted[questId].sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.questObjectivesFailEval(questId, objectiveId);
};

Yanfly.Quest.questObjectivesFail = 
  JSON.parse(Yanfly.Quest.LunaticMode['Fail Objective']);
Game_System.prototype.questObjectivesFailEval = function(questId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Quest.questObjectivesFail);
};

Game_System.prototype.questObjectivesFailRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.questObjectivesFail(questId, objId);
  }
};

Game_System.prototype.questObjectivesFailAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.questObjectivesFail(questId, i);
  }
};

Game_System.prototype.questRewardsShow = function(questId, rewardId) {
  this.initQuestSettings();
  this._questsRewards[questId] = this._questsRewards[questId] || [];
  if (this._questsRewards[questId].contains(rewardId)) return;
  this._questsRewards[questId].push(rewardId);
  this._questsRewards[questId].sort(function(a, b) {
    return a - b;
  });
  this.questRewardsShowEval(questId, rewardId);
};

Yanfly.Quest.questRewardsShow = 
  JSON.parse(Yanfly.Quest.LunaticMode['Show Reward']);
Game_System.prototype.questRewardsShowEval = function(questId, rewardId) {
  eval(Yanfly.Quest.questRewardsShow);
};

Game_System.prototype.questRewardsShowRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.questRewardsShow(questId, rewardId);
  }
};

Game_System.prototype.questRewardsShowAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.questRewardsShow(questId, i);
  }
};

Game_System.prototype.questRewardsHide = function(questId, rewardId) {
  this.initQuestSettings();
  this._questsRewards[questId] = this._questsRewards[questId] || [];
  if (!this._questsRewards[questId].contains(rewardId)) return;
  var index = this._questsRewards[questId].indexOf(rewardId);
  this._questsRewards[questId].splice(index, 1);
  this._questsRewards[questId].sort(function(a, b) {
    return a - b;
  });
  this.questRewardsHideEval(questId, rewardId);
};

Yanfly.Quest.questRewardsHide = 
  JSON.parse(Yanfly.Quest.LunaticMode['Hide Reward']);
Game_System.prototype.questRewardsHideEval = function(questId, rewardId) {
  eval(Yanfly.Quest.questRewardsHide);
};

Game_System.prototype.questRewardsHideRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.questRewardsHide(questId, rewardId);
  }
};

Game_System.prototype.questRewardsHideAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.questRewardsHide(questId, i);
  }
};

Game_System.prototype.questRewardsNormal = function(questId, rewardId) {
  this.initQuestSettings();
  var changed = false;
  this._questsRewardsClaimed[questId] = 
    this._questsRewardsClaimed[questId] || [];
  if (this._questsRewardsClaimed[questId].contains(rewardId)) {
    changed = true;
    var index = this._questsRewardsClaimed[questId].indexOf(rewardId);
    this._questsRewardsClaimed[questId].splice(index, 1);
    this._questsRewardsClaimed[questId].sort(function(a, b) {
      return a - b;
    });
  }
  this._questsRewardsDenied[questId] = 
    this._questsRewardsDenied[questId] || [];
  if (this._questsRewardsDenied[questId].contains(rewardId)) {
    changed = true;
    var index = this._questsRewardsDenied[questId].indexOf(rewardId);
    this._questsRewardsDenied[questId].splice(index, 1);
    this._questsRewardsDenied[questId].sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.questRewardsNormalEval(questId, rewardId);
};

Yanfly.Quest.questRewardsNormal = 
  JSON.parse(Yanfly.Quest.LunaticMode['Normalize Reward']);
Game_System.prototype.questRewardsNormalEval = function(questId, rewardId) {
  eval(Yanfly.Quest.questRewardsNormal);
};

Game_System.prototype.questRewardsNormalRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.questRewardsNormal(questId, rewardId);
  }
};

Game_System.prototype.questRewardsNormalAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.questRewardsNormal(questId, i);
  }
};

Game_System.prototype.questRewardsClaim = function(questId, rewardId) {
  this.initQuestSettings();
  var changed = false;
  this._questsRewardsClaimed[questId] = 
    this._questsRewardsClaimed[questId] || [];
  if (!this._questsRewardsClaimed[questId].contains(rewardId)) {
    changed = true;
    this._questsRewardsClaimed[questId].push(rewardId);
    this._questsRewardsClaimed[questId].sort(function(a, b) {
      return a - b;
    });
  }
  this._questsRewardsDenied[questId] = 
    this._questsRewardsDenied[questId] || [];
  if (this._questsRewardsDenied[questId].contains(rewardId)) {
    var index = this._questsRewardsDenied[questId].indexOf(rewardId);
    this._questsRewardsDenied[questId].splice(index, 1);
    this._questsRewardsDenied[questId].sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.questRewardsClaimEval(questId, rewardId);
};

Yanfly.Quest.questRewardsClaim = 
  JSON.parse(Yanfly.Quest.LunaticMode['Claim Reward']);
Game_System.prototype.questRewardsClaimEval = function(questId, rewardId) {
  eval(Yanfly.Quest.questRewardsClaim);
};

Game_System.prototype.questRewardsClaimRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.questRewardsClaim(questId, rewardId);
  }
};

Game_System.prototype.questRewardsClaimAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.questRewardsClaim(questId, i);
  }
};

Game_System.prototype.questRewardsDeny = function(questId, rewardId) {
  this.initQuestSettings();
  var changed = false;
  this._questsRewardsDenied[questId] = 
    this._questsRewardsDenied[questId] || [];
  if (!this._questsRewardsDenied[questId].contains(rewardId)) {
    changed = true;
    this._questsRewardsDenied[questId].push(rewardId);
    this._questsRewardsDenied[questId].sort(function(a, b) {
      return a - b;
    });
  }
  this._questsRewardsClaimed[questId] = 
    this._questsRewardsClaimed[questId] || [];
  if (this._questsRewardsClaimed[questId].contains(rewardId)) {
    var index = this._questsRewardsClaimed[questId].indexOf(rewardId);
    this._questsRewardsClaimed[questId].splice(index, 1);
    this._questsRewardsClaimed[questId].sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.questRewardsDenyEval(questId, rewardId);
};

Yanfly.Quest.questRewardsDeny = 
  JSON.parse(Yanfly.Quest.LunaticMode['Deny Reward']);
Game_System.prototype.questRewardsDenyEval = function(questId, rewardId) {
  eval(Yanfly.Quest.questRewardsDeny);
};

Game_System.prototype.questRewardsDenyRange = function(questId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.questRewardsDeny(questId, rewardId);
  }
};

Game_System.prototype.questRewardsDenyAll = function(questId) {
  this.initQuestSettings();
  var questData = $dataQuests[questId];
  if (!questData) return;
  var length = questData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.questRewardsDeny(questId, i);
  }
};

Game_System.prototype.questChangeSubtextIndex = function(questId, index) {
  this.initQuestSettings();
  this._questsSubtext[questId] = index;
  this.questChangeSubtextIndexEval(questId, index);
};

Yanfly.Quest.questChangeSubtextIndexEval = 
  JSON.parse(Yanfly.Quest.LunaticMode['Change Subtext']);
Game_System.prototype.questChangeSubtextIndexEval = function(questId, index) {
  eval(Yanfly.Quest.questChangeSubtextIndexEval);
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Game_System Script Calls
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Game_System.prototype.totalQuestsAvailable = function() {
  return this.getQuestsAvailable().length;
};

Game_System.prototype.totalQuestsCompleted = function() {
  return this.getQuestsCompleted().length;
};

Game_System.prototype.totalQuestsFailed = function() {
  return this.getQuestsFailed().length;
};

Game_System.prototype.totalQuestsKnown = function() {
  return this.getAllQuests().length;
};

Game_System.prototype.totalQuestsInGame = function() {
  return Yanfly.Quest.totalCount;
};

Game_System.prototype.totalQuestTypes = function(category, type) {
  return this.getTypeQuests(category, type).length;
};

Game_System.prototype.totalVisibleQuestObjectives = function(questId) {
  return this.getQuestObjectives(questId).length;
};

Game_System.prototype.totalQuestObjectives = function(questId) {
  var questData = $dataQuests[questId];
  if (!questData) return 0;
  return questData.objectives.length;
};

Game_System.prototype.totalVisibleQuestRewards = function(questId) {
  return this.getQuestRewards(questId).length;
};

Game_System.prototype.totalQuestRewards = function(questId) {
  var questData = $dataQuests[questId];
  if (!questData) return 0;
  return questData.rewards.length;
};

Game_System.prototype.isQuestObjectiveCompleted = function(questId, objId) {
  if (this._questsObjectivesCompleted[questId]) {
    return this._questsObjectivesCompleted[questId].contains(objId);
  } else {
    return false;
  }
};

Game_System.prototype.isQuestObjectiveFailed = function(questId, objId) {
  if (this._questsObjectivesFailed[questId]) {
    return this._questsObjectivesFailed[questId].contains(objId);
  } else {
    return false;
  }
};

Game_System.prototype.isQuestObjectiveUncleared = function(questId, objId) {
  if (this._questsKnown.contains(questId)) {
    return !this.isQuestObjectiveCompleted(questId, objId) &&
      !this.isQuestObjectiveFailed(questId, objId)
  } else {
    return false;
  }
};

Game_System.prototype.isQuestRewardClaimed = function(questId, objId) {
  if (this._questsRewardsClaimed[questId]) {
    return this._questsRewardsClaimed[questId].contains(objId);
  } else {
    return false;
  }
};

Game_System.prototype.isQuestRewardDenied = function(questId, objId) {
  if (this._questsRewardsDenied[questId]) {
    return this._questsRewardsDenied[questId].contains(objId);
  } else {
    return false;
  }
};

Game_System.prototype.isQuestRewardUnclaimed = function(questId, objId) {
  if (this._questsKnown.contains(questId)) {
    return !this.isQuestRewardClaimed(questId, objId) &&
      !this.isQuestRewardDenied(questId, objId)
  } else {
    return false;
  }
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Quest.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.Quest.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'OpenQuestJournal') {
    SceneManager.push(Scene_Quest);
  } else if (command === 'Quest') {
    this.processQuestPluginCommands(this.argsToString(args));
  }
};

Game_Interpreter.prototype.argsToString = function(args) {
  var str = '';
  var length = args.length;
  for (var i = 0; i < length; ++i) {
    str += args[i] + ' ';
  }
  return str.trim();
};

Game_Interpreter.prototype.parseNumericRange = function(str) {
  if (str.match(/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)) {
    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
      parseInt(RegExp.$2));
  } else {
    var range = str.split(',');
    var length = range.length;
    for (var i = 0; i < length; ++i) {
      range[i] = parseInt(range[i]);
    }
  }
  return range;
};

Game_Interpreter.prototype.processQuestPluginCommands = function(line) {
  if (line.match(/EVAL[ ](.*)/i)) {
    eval(RegExp.$1);

  } else if (line.match(/JOURNAL OPEN TO[ ](\d+)/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questAdd(questId);
    $gameTemp.reservedQuestOpen(questId);
    SceneManager.push(Scene_Quest);
  } else if (line.match(/JOURNAL OPEN/i)) {
    SceneManager.push(Scene_Quest);

  } else if (line.match(/JOURNAL SHOW/i)) {
    $gameSystem.setShowQuest(true);
  } else if (line.match(/JOURNAL HIDE/i)) {
    $gameSystem.setShowQuest(false);
  } else if (line.match(/JOURNAL ENABLE/i)) {
    $gameSystem.setEnableQuest(true);
  } else if (line.match(/JOURNAL DISABLE/i)) {
    $gameSystem.setEnableQuest(false);

  } else if (line.match(/SET COMPLETED[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.questSetCompletedRange(range);
  } else if (line.match(/SET FAILED[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.questSetFailedRange(range);
  } else if (line.match(/SET AVAILABLE[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.questSetAvailableRange(range);

  } else if (line.match(/(\d+)[ ]CHANGE DESCRIPTION ENTRY TO[ ](\d+)/i)) {
    var questId = parseInt(RegExp.$1);
    var value = parseInt(RegExp.$2);
    $gameSystem.questChangeDescriptionIndex(questId, value);

  } else if (line.match(/(\d+)[ ]SHOW OBJECTIVE[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questObjectivesShowRange(questId, range);
  } else if (line.match(/(\d+)[ ]SHOW ALL OBJECTIVE/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questObjectivesShowAll(questId);
  } else if (line.match(/(\d+)[ ]HIDE OBJECTIVE[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questObjectivesHideRange(questId, range);
  } else if (line.match(/(\d+)[ ]HIDE ALL OBJECTIVE/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questObjectivesHideAll(questId);
  } else if (line.match(/(\d+)[ ]NORMALIZE OBJECTIVE[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questObjectivesNormalRange(questId, range);
  } else if (line.match(/(\d+)[ ]NORMALIZE ALL OBJECTIVE/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questObjectivesNormalAll(questId);
  } else if (line.match(/(\d+)[ ]COMPLETE OBJECTIVE[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questObjectivesCompleteRange(questId, range);
  } else if (line.match(/(\d+)[ ]COMPLETE ALL OBJECTIVE/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questObjectivesCompleteAll(questId);
  } else if (line.match(/(\d+)[ ]FAIL OBJECTIVE[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questObjectivesFailRange(questId, range);
  } else if (line.match(/(\d+)[ ]FAIL ALL OBJECTIVE/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questObjectivesFailAll(questId);

  } else if (line.match(/(\d+)[ ]SHOW REWARD[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questRewardsShowRange(questId, range);
  } else if (line.match(/(\d+)[ ]SHOW ALL REWARD/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questRewardsShowAll(questId);
  } else if (line.match(/(\d+)[ ]HIDE REWARD[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questRewardsHideRange(questId, range);
  } else if (line.match(/(\d+)[ ]HIDE ALL REWARD/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questRewardsHideAll(questId);
  } else if (line.match(/(\d+)[ ]NORMALIZE REWARD[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questRewardsNormalRange(questId, range);
  } else if (line.match(/(\d+)[ ]NORMALIZE ALL REWARD/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questRewardsNormalAll(questId);
  } else if (line.match(/(\d+)[ ]CLAIM REWARD[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questRewardsClaimRange(questId, range);
  } else if (line.match(/(\d+)[ ]CLAIM ALL REWARD/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questRewardsClaimAll(questId);
  } else if (line.match(/(\d+)[ ]DENY REWARD[ ](.*)/i)) {
    var questId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.questRewardsDenyRange(questId, range);
  } else if (line.match(/(\d+)[ ]DENY ALL REWARD/i)) {
    var questId = parseInt(RegExp.$1);
    $gameSystem.questRewardsDenyAll(questId);

  } else if (line.match(/(\d+)[ ]CHANGE SUBTEXT ENTRY TO[ ](\d+)/i)) {
    var questId = parseInt(RegExp.$1);
    var value = parseInt(RegExp.$2);
    $gameSystem.questChangeSubtextIndex(questId, value);

  } else if (line.match(/ADD[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.questAddRange(range);

  } else if (line.match(/REMOVE[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.questRemoveRange(range);

  }
};

//=============================================================================
// Window_MenuCommand
//=============================================================================

Yanfly.Quest.Window_MenuCommand_addOriginalCommands =
  Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
  Yanfly.Quest.Window_MenuCommand_addOriginalCommands.call(this);
  this.addQuestCommand();
};

Window_MenuCommand.prototype.addQuestCommand = function() {
  if (!Yanfly.Param.QuestCmdPlace) return;
  if (!$gameSystem.isShowQuest()) return;
  if (this.findSymbol('quest') > -1) return;
  var text = Yanfly.Param.QuestCmdName;
  var enabled = $gameSystem.isEnableQuest();
  this.addCommand(text, 'quest', enabled);
};

//=============================================================================
// Window_QuestData
//=============================================================================

function Window_QuestData() {
  this.initialize.apply(this, arguments);
};

Window_QuestData.prototype = Object.create(Window_Selectable.prototype);
Window_QuestData.prototype.constructor = Window_QuestData;

Window_QuestData.prototype.initialize = function() {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Math.round(eval(this.settings('X')));
  var y = Math.round(eval(this.settings('Y')));
  this._allTextHeight = 0;
  this._countdown = 0;
  this._arrowBlinkTimer = 0;
  Window_Selectable.prototype.initialize.call(this, x, y, width, height);
  this.setQuestId(0);
  this.opacity = Math.round(eval(this.settings('Standard Opacity')));
};

Window_QuestData.prototype.settings = function(key) {
  return Yanfly.Param.QuestDataWindow[key];
};

Window_QuestData.prototype.windowWidth = function() {
  if (this._windowWidth === undefined) {
    this._windowWidth = Math.round(eval(this.settings('Width')));
  }
  return this._windowWidth;
};

Window_QuestData.prototype.windowHeight = function() {
  if (this._windowHeight === undefined) {
    this._windowHeight = Math.round(eval(this.settings('Height')));
  }
  return this._windowHeight;
};

Window_QuestData.prototype.lineHeight = function() {
  if (this._windowLineHeight === undefined) {
    this._windowLineHeight = parseInt(this.settings('Line Height'));
  }
  return this._windowLineHeight;
};

Window_QuestData.prototype.standardFontFace = function() {
  if (this._windowFontFace === undefined) {
    this._windowFontFace = this.settings('Font Face');
  }
  return this._windowFontFace;
};

Window_QuestData.prototype.standardFontSize = function() {
  if (this._windowFontSize === undefined) {
    this._windowFontSize = Math.round(eval(this.settings('Font Size')));
  }
  return this._windowFontSize;
};

Window_QuestData.prototype.standardPadding = function() {
  if (this._windowStandardPadding === undefined) {
    this._windowStandardPadding = 
      Math.round(eval(this.settings('Standard Padding')));
  }
  return this._windowStandardPadding;
};

Window_QuestData.prototype.textPadding = function() {
  if (this._windowTextPadding === undefined) {
    this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
  }
  return this._windowTextPadding;
};

Window_QuestData.prototype.standardBackOpacity = function() {
  if (this._windowBackOpacity === undefined) {
    this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
  }
  return this._windowBackOpacity;
};

Window_QuestData.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
};

Window_QuestData.prototype.delayLoadFrames = function() {
  if (this._delayLoad === undefined) {
    this._delayLoad = Math.round(eval(this.settings('Load Delay')));
  }
  return this._delayLoad;
};

Window_QuestData.prototype.setQuestId = function(id) {
  if (this._questId !== id) {
    this._questId = id;
    this._countdown = 30;
    this.refresh();
  }
};

Window_QuestData.prototype.refresh = function() {
  if (this._countdown > 0) return;
  this.contents.clear();
  this._lastOriginY = -200;
  this.origin.y = 0;
  this._allTextHeight = 0;
  if (this._questId > 0) {
    this.drawQuestData();
  } else {
    this.drawEmpty();
  }
};

Window_QuestData._questNoDataFmt = 
  JSON.parse(Yanfly.Param.QuestDataWindow['No Data Text'] || "");

Window_QuestData.prototype.drawEmpty = function() {
  var fmt = Window_QuestData._questNoDataFmt;
  var wordwrap = fmt.match(/<(?:WordWrap)>/i);
  var text = fmt.format();
  var textState = { index: 0 };
  textState.originalText = text;
  textState.text = this.convertEscapeCharacters(text);
  this.resetFontSettings();
  this._allTextHeight = this.calcTextHeight(textState, true);
  this._allTextHeight *= (wordwrap) ? 10 : 1;
  this.createContents();
  this.drawQuestTextEx(text, 0, 0);
};

Window_QuestData.prototype.drawQuestData = function() {
  Window_QuestData._questDataFmt = 
    JSON.parse(Yanfly.Param.QuestDataWindow['Quest Data Format'] || "");
  var questData = $dataQuests[this._questId];
  if (!questData) return;
  var fmt = Window_QuestData._questDataFmt;
  var wordwrap = fmt.match(/<(?:WordWrap)>/i);
  var title = questData.name;
  title = title.replace(/\\I\[(\d+)\]/gi, '').trim();
  title = title.replace(/\\C\[(\d+)\]/gi, '').trim();
  var difficulty = questData.difficulty;
  var from = questData.from;
  var location = questData.location;
  var description = this.getQuestDescription();
  var objectives = this.getQuestObjectives(wordwrap);
  var rewards = this.getQuestRewards(wordwrap);
  var subtext = this.getQuestSubtext();
  var text = fmt.format(title, difficulty, from, location, description,
    objectives, rewards, subtext);
  var textState = { index: 0 };
  textState.originalText = text;
  textState.text = this.convertEscapeCharacters(text);
  this.resetFontSettings();
  this._allTextHeight = this.calcTextHeight(textState, true);
  this._allTextHeight *= (wordwrap) ? 10 : 1;
  this.createContents();
  this.drawQuestTextEx(text, 0, 0);
};

Window_QuestData.prototype.drawQuestTextEx = function(text, x, y) {
  if (text) {
    var textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    this.resetFontSettings();
    while (textState.index < textState.text.length) {
      this.processCharacter(textState);
    }
    this._allTextHeight = textState.y - y + this.lineHeight();
    return textState.x - x;
  } else {
    return 0;
  }
};

Window_QuestData.prototype.getQuestDescription = function() {
  var questData = $dataQuests[this._questId];
  var index = $gameSystem.getQuestDescriptionIndex(this._questId);
  return JSON.parse(questData.description[index]);
};

Window_QuestData.prototype.getQuestObjectives = function(wordwrap) {
  var questData = $dataQuests[this._questId];
  var lineData = questData.objectives;
  var visibleObjectives = $gameSystem.getQuestObjectives(this._questId);
  var length = visibleObjectives.length;
  var text = '';
  for (var i = 0; i < length; ++i) {
    if (i > 0) text += wordwrap ? '<br>' : '\n';
    var objectiveId = visibleObjectives[i];
    var key = $gameSystem.getQuestObjectiveStatus(this._questId, objectiveId);
    var fmt = this.settings(key);
    text += fmt.format(JSON.parse(lineData[objectiveId]));
  }
  return text;
};

Window_QuestData.prototype.getQuestRewards = function(wordwrap) {
  var questData = $dataQuests[this._questId];
  var lineData = questData.rewards;
  var visibleRewards = $gameSystem.getQuestRewards(this._questId);
  var length = visibleRewards.length;
  var text = '';
  for (var i = 0; i < length; ++i) {
    if (i > 0) text += wordwrap ? '<br>' : '\n';
    var rewardId = visibleRewards[i];
    var key = $gameSystem.getQuestRewardStatus(this._questId, rewardId);
    var fmt = this.settings(key);
    text += fmt.format(JSON.parse(lineData[rewardId]));
  }
  return text;
};

Window_QuestData.prototype.getQuestSubtext = function() {
  var questData = $dataQuests[this._questId];
  var index = $gameSystem.getQuestSubtextIndex(this._questId);
  return JSON.parse(questData.subtext[index]);
};

Window_QuestData.prototype.select = function(index) {
};

Window_QuestData.prototype.contentsHeight = function() {
  var standard = this.height - this.standardPadding() * 2;
  return Math.max(standard, this._allTextHeight);
};

Window_QuestData.prototype.update = function() {
  Window_Selectable.prototype.update.call(this);
  this.updateCountdown();
  if (this.isOpenAndActive()) this.updateKeyScrolling();
};

Window_QuestData.prototype.updateCountdown = function() {
  if (this._countdown > 0) {
    this._countdown -= 1;
    if (this._countdown <= 0) this.refresh();
  }
};

Window_QuestData.prototype.scrollSpeed = function() {
  if (this._scrollSpeed === undefined) {
    this._scrollSpeed = Number(this.settings('Scroll Speed'));
  }
  return this._scrollSpeed;
};

Window_QuestData.prototype.scrollOriginDown = function(speed) {
  var value = this.contentsHeight() - this.height + 
    this.standardPadding() * 2;
  this.origin.y = Math.min(value, this.origin.y + speed);
};

Window_QuestData.prototype.scrollOriginUp = function(speed) {
  this.origin.y = Math.max(0, this.origin.y - speed);
};

Window_QuestData.prototype.updateKeyScrolling = function() {
  if (Input.isPressed('up')) {
    this.scrollOriginUp(this.scrollSpeed());
  } else if (Input.isPressed('down')) {
    this.scrollOriginDown(this.scrollSpeed());
  } else if (Input.isPressed('pageup')) {
    this.scrollOriginUp(this.scrollSpeed() * 4);
  } else if (Input.isPressed('pagedown')) {
    this.scrollOriginDown(this.scrollSpeed() * 4);
  // for mobile
  // - Tap upside of window, then scroll up
  // - Tap downside of window, then scroll down
  } else if (TouchInput.isPressed()) {
    if (this.height / 2 < TouchInput.y) {
      this.scrollOriginDown(this.scrollSpeed());
    } else {
      this.scrollOriginUp(this.scrollSpeed());
    }
  }
};

Window_QuestData.prototype.updateArrows = function() {
  if (this._lastOriginY === this.origin.y) return;
  this.showArrows();
};

Window_QuestData.prototype.showArrows = function() {
  this._lastOriginY = this.origin.y;
  this.upArrowVisible = this.origin.y !== 0;
  this.downArrowVisible = this.origin.y !== this.contentsHeight() -
    this.height + this.standardPadding() * 2;
};

Window_QuestData.prototype.hideArrows = function() {
  this.upArrowVisible = false;
  this.downArrowVisible = false;
};

Window_QuestData.prototype.isInsideFrame = function() {
  var x = this.canvasToLocalX(TouchInput._mouseOverX);
  var y = this.canvasToLocalY(TouchInput._mouseOverY);
  return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Window_QuestData.prototype.processWheel = function() {
  if (!this.isInsideFrame()) return;
  var threshold = 20;
  if (TouchInput.wheelY >= threshold) {
    this.scrollOriginDown(this.scrollSpeed() * 4);
  }
  if (TouchInput.wheelY <= -threshold) {
    this.scrollOriginUp(this.scrollSpeed() * 4);
  }
};

//=============================================================================
// Window_QuestTitle
//=============================================================================

function Window_QuestTitle() {
  this.initialize.apply(this, arguments);
};

Window_QuestTitle.prototype = Object.create(Window_Base.prototype);
Window_QuestTitle.prototype.constructor = Window_QuestTitle;

Window_QuestTitle.prototype.initialize = function() {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Math.round(eval(this.settings('X')));
  var y = Math.round(eval(this.settings('Y')));
  Window_Base.prototype.initialize.call(this, x, y, width, height);
  this.setText(this.settings('No Quest Title'));
  this.opacity = Math.round(eval(this.settings('Standard Opacity')));
};

Window_QuestTitle.prototype.settings = function(key) {
  return Yanfly.Param.QuestTitleWindow[key];
};

Window_QuestTitle.prototype.windowWidth = function() {
  if (this._windowWidth === undefined) {
    this._windowWidth = Math.round(eval(this.settings('Width')));
  }
  return this._windowWidth;
};

Window_QuestTitle.prototype.windowHeight = function() {
  if (this._windowHeight === undefined) {
    this._windowHeight = Math.round(eval(this.settings('Height')));
  }
  return this._windowHeight;
};

Window_QuestTitle.prototype.lineHeight = function() {
  if (this._windowLineHeight === undefined) {
    this._windowLineHeight = parseInt(this.settings('Line Height'));
  }
  return this._windowLineHeight;
};

Window_QuestTitle.prototype.standardFontFace = function() {
  if (this._windowFontFace === undefined) {
    this._windowFontFace = this.settings('Font Face');
  }
  return this._windowFontFace;
};

Window_QuestTitle.prototype.standardFontSize = function() {
  if (this._windowFontSize === undefined) {
    this._windowFontSize = Math.round(eval(this.settings('Font Size')));
  }
  return this._windowFontSize;
};

Window_QuestTitle.prototype.standardPadding = function() {
  if (this._windowStandardPadding === undefined) {
    this._windowStandardPadding = 
      Math.round(eval(this.settings('Standard Padding')));
  }
  return this._windowStandardPadding;
};

Window_QuestTitle.prototype.textPadding = function() {
  if (this._windowTextPadding === undefined) {
    this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
  }
  return this._windowTextPadding;
};

Window_QuestTitle.prototype.itemTextAlign = function() {
    return this.settings('Text Alignment')
};

Window_QuestTitle.prototype.standardBackOpacity = function() {
  if (this._windowBackOpacity === undefined) {
    this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
  }
  return this._windowBackOpacity;
};

Window_QuestTitle.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
};

Window_QuestTitle.prototype.setText = function(text) {
  if (this._text !== text) {
    this._text = text;
    this.refresh();
  }
};

Window_QuestTitle.prototype.refresh = function() {
  this.contents.clear();
  var align = this.settings('Text Alignment');
  var wx = 0;
  var ww = this.contents.width;
  if (align === 'left') {
    wx = this.textPadding();
  } else if (align === 'center') {
    wx += (ww - this.textWidthEx(this._text)) / 2;
  } else {
    wx += ww - this.textWidthEx(this._text) - this.textPadding();
  }
  this.drawTextEx(this._text, wx, 0);
};

Window_QuestTitle.prototype.textWidthEx = function(text) {
  return this.drawTextEx(text, 0, this.contents.height);
};

//=============================================================================
// Window_QuestCategories
//=============================================================================

function Window_QuestCategories() {
  this.initialize.apply(this, arguments);
};

Window_QuestCategories.prototype = Object.create(Window_Command.prototype);
Window_QuestCategories.prototype.constructor = Window_QuestCategories;

Window_QuestCategories.prototype.initialize = function() {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Math.round(eval(this.settings('X')));
  var y = Math.round(eval(this.settings('Y')));
  Window_Command.prototype.initialize.call(this, x, y);
  this.opacity = Math.round(eval(this.settings('Standard Opacity')));
};

Window_QuestCategories.prototype.settings = function(key) {
  return Yanfly.Param.QuestCategoryWindow[key];
};

Window_QuestCategories.prototype.windowWidth = function() {
  if (this._windowWidth === undefined) {
    this._windowWidth = Math.round(eval(this.settings('Width')));
  }
  return this._windowWidth;
};

Window_QuestCategories.prototype.windowHeight = function() {
  if (this._windowHeight === undefined) {
    this._windowHeight = Math.round(eval(this.settings('Height')));
  }
  return this._windowHeight;
};

Window_QuestCategories.prototype.numVisibleRows = function() {
  if (this._windowRows === undefined) {
    this._windowRows = Math.round(eval(this.settings('Rows')));
  }
  return this._windowRows;
};

Window_QuestCategories.prototype.maxCols = function() {
  if (this._windowColumns === undefined) {
    this._windowColumns = Math.round(eval(this.settings('Columns')));
  }
  return this._windowColumns;
};

Window_QuestCategories.prototype.lineHeight = function() {
  if (this._windowLineHeight === undefined) {
    this._windowLineHeight = parseInt(this.settings('Line Height'));
  }
  return this._windowLineHeight;
};

Window_QuestCategories.prototype.standardFontFace = function() {
  if (this._windowFontFace === undefined) {
    this._windowFontFace = this.settings('Font Face');
  }
  return this._windowFontFace;
};

Window_QuestCategories.prototype.standardFontSize = function() {
  if (this._windowFontSize === undefined) {
    this._windowFontSize = Math.round(eval(this.settings('Font Size')));
  }
  return this._windowFontSize;
};

Window_QuestCategories.prototype.standardPadding = function() {
  if (this._windowStandardPadding === undefined) {
    this._windowStandardPadding = 
      Math.round(eval(this.settings('Standard Padding')));
  }
  return this._windowStandardPadding;
};

Window_QuestCategories.prototype.textPadding = function() {
  if (this._windowTextPadding === undefined) {
    this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
  }
  return this._windowTextPadding;
};

Window_QuestCategories.prototype.itemTextAlign = function() {
    return this.settings('Text Alignment')
};

Window_QuestCategories.prototype.standardBackOpacity = function() {
  if (this._windowBackOpacity === undefined) {
    this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
  }
  return this._windowBackOpacity;
};

Window_QuestCategories.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
};

Window_QuestCategories.prototype.makeCommandList = function() {
  var list = JSON.parse(this.settings('Category Order'));
  var length = list.length;
  for (var i = 0; i < length; ++i) {
    var listItem = list[i];
    switch (listItem) {
    case 'available':
      var fmt = this.settings('Available Text');
      var number = $gameSystem.totalQuestsAvailable();
      break;
    case 'completed':
      var fmt = this.settings('Completed Text');
      var number = $gameSystem.totalQuestsCompleted();
      break;
    case 'failed':
      var fmt = this.settings('Failed Text');
      var number = $gameSystem.totalQuestsFailed();
      break;
    case 'all':
      var fmt = this.settings('All Text');
      var number = $gameSystem.totalQuestsKnown();
      break;
    case 'cancel':
      var text = this.settings('Cancel Text');
      this.addCommand(text, 'cancel');
      continue;
      break;
    }
    number = Yanfly.Util.toGroup(number);
    var text = fmt.format(number);
    this.addCommand(text, 'category', true, listItem);
  }
};

Window_QuestCategories.prototype.drawItem = function(index) {
  var rect = this.itemRectForText(index);
  var text = this.commandName(index);
  var align = this.settings('Text Alignment');
  var wx = 0;
  var ww = rect.width;
  if (align === 'left') {
    wx = rect.x;
  } else if (align === 'center') {
    wx += (ww - this.textWidthEx(text)) / 2;
  } else {
    wx += ww - this.textWidthEx(text) - this.textPadding();
  }
  this.drawTextEx(text, wx, rect.y);
};

Window_QuestCategories.prototype.textWidthEx = function(text) {
  return this.drawTextEx(text, 0, this.contents.height);
};

Window_QuestCategories.prototype.setListWindow = function(win) {
  this._listWindow = win;
};

Window_QuestCategories.prototype.update = function() {
  Window_Command.prototype.update.call(this);
  if (this._listWindow) this._listWindow.setCategoryType(this.currentExt());
};

Window_QuestCategories.prototype.isInsideFrame = function() {
  var x = this.canvasToLocalX(TouchInput._mouseOverX);
  var y = this.canvasToLocalY(TouchInput._mouseOverY);
  return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Window_QuestCategories.prototype.processWheel = function() {
  if (!this.isInsideFrame()) return;
  var threshold = 20;
  if (TouchInput.wheelY >= threshold) this.scrollDown();
  if (TouchInput.wheelY <= -threshold) this.scrollUp();
};

//=============================================================================
// Window_QuestList
//=============================================================================

function Window_QuestList() {
  this.initialize.apply(this, arguments);
};

Window_QuestList.prototype = Object.create(Window_Command.prototype);
Window_QuestList.prototype.constructor = Window_QuestList;

Window_QuestList.prototype.initialize = function(cw, dw, tw) {
  this._currentCategory =
    JSON.parse(Yanfly.Param.QuestCategoryWindow['Category Order'])[0];
  this._closedQuestTypes = [];
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Math.round(eval(this.settings('X')));
  var y = Math.round(eval(this.settings('Y')));
  this._dataWindow = dw;
  this._titleWindow = tw;
  this._mode = 'Quest';
  Window_Command.prototype.initialize.call(this, x, y);
  cw.setListWindow(this);
  this.opacity = Math.round(eval(this.settings('Standard Opacity')));
  this.deselect();
  this.deactivate();
};

Window_QuestList.prototype.settings = function(key) {
  return Yanfly.Param.QuestListWindow[key];
};

Window_QuestList.prototype.windowWidth = function() {
  if (this._windowWidth === undefined) {
    this._windowWidth = Math.round(eval(this.settings('Width')));
  }
  return this._windowWidth;
};

Window_QuestList.prototype.windowHeight = function() {
  if (this._windowHeight === undefined) {
    this._windowHeight = Math.round(eval(this.settings('Height')));
  }
  return this._windowHeight;
};

Window_QuestList.prototype.maxCols = function() {
  return 1;
};

Window_QuestList.prototype.lineHeight = function() {
  if (this._windowLineHeight === undefined) {
    this._windowLineHeight = parseInt(this.settings('Line Height'));
  }
  return this._windowLineHeight;
};

Window_QuestList.prototype.standardFontFace = function() {
  if (this._windowFontFace === undefined) {
    this._windowFontFace = this.settings('Font Face');
  }
  return this._windowFontFace;
};

Window_QuestList.prototype.standardFontSize = function() {
  if (this._windowFontSize === undefined) {
    this._windowFontSize = Math.round(eval(this.settings('Font Size')));
  }
  return this._windowFontSize;
};

Window_QuestList.prototype.standardPadding = function() {
  if (this._windowStandardPadding === undefined) {
    this._windowStandardPadding = 
      Math.round(eval(this.settings('Standard Padding')));
  }
  return this._windowStandardPadding;
};

Window_QuestList.prototype.textPadding = function() {
  if (this._windowTextPadding === undefined) {
    this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
  }
  return this._windowTextPadding;
};

Window_QuestList.prototype.standardBackOpacity = function() {
  if (this._windowBackOpacity === undefined) {
    this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
  }
  return this._windowBackOpacity;
};

Window_QuestList.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
};

Window_QuestList.prototype.itemTextAlign = function() {
    return this.settings('Quest Alignment')
};

Window_QuestList.prototype.drawItem = function(index) {
  var rect = this.itemRectForText(index);
  var text = this.commandName(index);
  var symbol = this.commandSymbol(index);
  this.changePaintOpacity(this.isCommandEnabled(index));
  if (symbol === 'type') {
    var align = this.settings('Type Alignment');
  } else {
    var align = this.settings('Quest Alignment');
    var indent = parseInt(this.settings('Quest Indent'));
    rect.x += indent;
    rect.width -= indent;
  }
  var wx = 0;
  var ww = rect.width;
  if (align === 'left') {
    wx = rect.x;
  } else if (align === 'center') {
    wx += (ww - this.textWidthEx(text)) / 2;
  } else {
    wx += ww - this.textWidthEx(text) - this.textPadding();
  }
  this.drawTextEx(text, wx, rect.y);
};

Window_QuestList.prototype.textWidthEx = function(text) {
  return this.drawTextEx(text, 0, this.contents.height);
};

Window_QuestList.prototype.setCategoryType = function(category) {
  if (this._currentCategory !== category) {
    this._currentCategory = category;
    this.refresh();
    this.resetScroll();
    this.deselect();
    this.update();
  }
};

Window_QuestList.prototype.showType = function() {
  if (this._settingsShowType === undefined) {
    this._settingsShowType = Math.round(eval(this.settings('Show Types')));
  }
  return this._settingsShowType;
};

Window_QuestList.prototype.showEmptyTypes = function() {
  if (this._showEmpty === undefined) {
    this._showEmpty = eval(this.settings('Show Empty'));
  }
  return this._showEmpty;
};

Window_QuestList.prototype.setMode = function(mode) {
  if (mode === 'Extra') {
    this._prevTopRow = this.topRow();
    this._prevIndex = this.index();
    this._forcedExt = this.currentExt();
    this.setTopRow(0);
  } else {
    this._forcedExt = undefined;
  }
  this._mode = mode;
  this.refresh();
  this.activate();
  if (mode === 'Extra') {
    this.select(0);
  } else {
    this.select(this._prevIndex);
    this.setTopRow(this._prevTopRow);
  }
};

Window_QuestList.prototype.currentExt = function() {
  return this._forcedExt || Window_Command.prototype.currentExt.call(this);
};

Window_QuestList.prototype.makeCommandList = function() {
  if (this._mode === 'Quest') {
    this.makeQuestList();
  } else {
    this.makeExtraList();
  }
};

Window_QuestList.prototype.makeQuestList = function() {
  if (this.showType()) {
    var list = JSON.parse(this.settings('Type Order'));
    var length = list.length;
    for (var i = 0; i < length; ++i) {
      var listItem = list[i];
      var fmt = this.settings('Type Text Format');
      var type = listItem.replace(/\\I\[(\d+)\]/gi, '').trim();
      var type = listItem.replace(/\\C\[(\d+)\]/gi, '').trim();
      if (this._closedQuestTypes.contains(type)) {
        var closed = this.settings('List Closed Symbol');
      } else {
        var closed = this.settings('List Open Symbol');
      }
      var number = $gameSystem.getTypeQuests(this._currentCategory,
        type).length;
      if (!this.showEmptyTypes() && number <= 0) continue;
      number = Yanfly.Util.toGroup(number);
      var text = fmt.format(closed, listItem, number);
      this.addCommand(text, 'type', true, type);
      if (!this._closedQuestTypes.contains(type)) {
        this.addQuestCommands(this._currentCategory, type);
      }
    }
  } else {
    this.addQuestCommands(this._currentCategory)
  }
};

Window_QuestList.prototype.makeExtraList = function() {
  this.addReadQuestCommand();
  this.makeExtraListA();
  this.makeExtraListB();
  this.makeExtraListC();
  this.makeExtraListD();
  this.makeExtraListE();
  this.makeExtraListF();
  this.addCancelCommand();
};

Window_QuestList.prototype.addReadQuestCommand = function() {
  var text = this.settings('Read Quest') || '\\i[121]Read Quest';
  this.addCommand(text, 'readQuest');
};

Window_QuestList.prototype.addCancelCommand = function() {
  var text = this.settings('Cancel') || '\\i[16]Cancel';
  this.addCommand(text, 'cancel');
};

Window_QuestList.prototype.makeExtraListA = function() {
};

Window_QuestList.prototype.makeExtraListB = function() {
};

Window_QuestList.prototype.makeExtraListC = function() {
};

Window_QuestList.prototype.makeExtraListD = function() {
};

Window_QuestList.prototype.makeExtraListE = function() {
};

Window_QuestList.prototype.makeExtraListF = function() {
};

Window_QuestList.prototype.addQuestCommands = function(category, type) {
  category = category || this._currentCategory;
  type = type || '';
  var list = $gameSystem.getTypeQuests(category, type);
  var length = list.length;
  for (var i = 0; i < length; ++i) {
    var questId = list[i];
    var questData = $dataQuests[questId];
    if (!questData) continue;
    var text = questData.name;
    this.addCommand(text, 'quest', true, questId);
  }
};

Window_QuestList.prototype.update = function() {
  Window_Command.prototype.update.call(this);
  if (this._dataWindow) {
    if (this.currentSymbol() === 'quest' || this._mode === 'Extra') {
      this._dataWindow.setQuestId(this.currentExt());
    } else {
      this._dataWindow.setQuestId(0);
    }
  }
  if (this._titleWindow) {
    if (this.currentSymbol() === 'quest' || this._mode === 'Extra') {
      this._titleWindow.setText($dataQuests[this.currentExt()].name);
    } else {
      this._titleWindow.setText(this._titleWindow.settings('No Quest Title'));
    }
  }
};

Window_QuestList.prototype.typeToggle = function(type) {
  if (this._closedQuestTypes.contains(type)) {
    var index = this._closedQuestTypes.indexOf(type);
    this._closedQuestTypes.splice(index, 1);
  } else {
    this._closedQuestTypes.push(type);
  }
  this.refresh();
};

Window_QuestList.prototype.getVisibleRows = function() {
  var value = this.height - (this.standardPadding() * 2);
  value = Math.floor(value / this.lineHeight());
  return value;
};

Window_QuestList.prototype.isInsideFrame = function() {
  var x = this.canvasToLocalX(TouchInput._mouseOverX);
  var y = this.canvasToLocalY(TouchInput._mouseOverY);
  return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Window_QuestList.prototype.processWheel = function() {
  if (!this.isInsideFrame()) return;
  var threshold = 20;
  if (TouchInput.wheelY >= threshold) this.scrollDown();
  if (TouchInput.wheelY <= -threshold) this.scrollUp();
};

//=============================================================================
// Scene_Menu
//=============================================================================

Yanfly.Quest.Scene_Menu_createCommandWindow =
  Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
  Yanfly.Quest.Scene_Menu_createCommandWindow.call(this);
  this._commandWindow.setHandler('quest', this.commandQuest.bind(this));
};

Scene_Menu.prototype.commandQuest = function() {
  SceneManager.push(Scene_Quest);
};

//=============================================================================
// Scene_Quest
//=============================================================================

function Scene_Quest() {
  this.initialize.apply(this, arguments);
};

Scene_Quest.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Quest.prototype.constructor = Scene_Quest;

Scene_Quest.prototype.initialize = function() {
  Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Quest.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  this.runCustomCode(Yanfly.Quest.createBefore);
  this.createDataWindow();
  this.createTitleWindow();
  this.createCategoryWindow();
  this.createListWindow();
  this.processQuestOpen();
  this.runCustomCode(Yanfly.Quest.createAfter);
};

Yanfly.Quest.createBefore = 
  JSON.parse(Yanfly.Quest.LunaticMode['Before Create Windows']);
Yanfly.Quest.createAfter = 
  JSON.parse(Yanfly.Quest.LunaticMode['After Create Windows']);
Yanfly.Quest.terminateMenu = 
  JSON.parse(Yanfly.Quest.LunaticMode['Close Quest Menu']);

Scene_Quest.prototype.runCustomCode = function(code) {
  var background = this._backgroundSprite;
  var windowLayer = this._windowLayer;
  eval(code);
};

Scene_Quest.prototype.createDataWindow = function() {
  this._dataWindow = new Window_QuestData();
  this._dataWindow.setHandler('cancel', this.onDataCancel.bind(this));
  this.addWindow(this._dataWindow);
};

Scene_Quest.prototype.createTitleWindow = function() {
  this._titleWindow = new Window_QuestTitle();
  this.addWindow(this._titleWindow);
};

Scene_Quest.prototype.createCategoryWindow = function() {
  this._categoryWindow = new Window_QuestCategories();
  this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
  this._categoryWindow.setHandler('category', this.onCategoryOk.bind(this));
  this.addWindow(this._categoryWindow);
};

Scene_Quest.prototype.createListWindow = function() {
  this._listWindow = new Window_QuestList(this._categoryWindow, 
    this._dataWindow, this._titleWindow);
  this._listWindow.setHandler('cancel', this.onListCancel.bind(this));
  this._listWindow.setHandler('type', this.onListTypeToggle.bind(this));
  this._listWindow.setHandler('quest', this.onListQuest.bind(this));
  this._listWindow.setHandler('readQuest', this.dataWindowActivate.bind(this));
  this.addWindow(this._listWindow);
};

Scene_Quest.prototype.onCategoryCancel = function() {
  this.runCustomCode(Yanfly.Quest.terminateMenu);
  this.popScene();
};

Scene_Quest.prototype.onCategoryOk = function() {
  this._listWindow.activate();
  if (this._listWindow.index() < 0) this._listWindow.select(0);
};

Scene_Quest.prototype.isQuestExtraCommand = function() {
  return false;
};

Scene_Quest.prototype.onListCancel = function() {
  if (this._listWindow._mode === 'Extra') {
    this._listWindow.setMode('Quest');
  } else {
    this._categoryWindow.activate();
  }
};

Scene_Quest.prototype.onListTypeToggle = function() {
  this._listWindow.activate();
  this._listWindow.typeToggle(this._listWindow.currentExt());
};

Scene_Quest.prototype.onListQuest = function() {
  if (this.isQuestExtraCommand()) {
    this._listWindow.setMode('Extra');
  } else {
    this.dataWindowActivate();
  }
};

Scene_Quest.prototype.dataWindowActivate = function() {
  this._dataWindow.activate();
};

Scene_Quest.prototype.onDataCancel = function() {
  if (this._dataWindow._mode === 'Extra') {
    this._listWindow.setMode('Quest');
  } else {
    this._dataWindow.deactivate();
    this._listWindow.activate();
  }
};

Scene_Quest.prototype.processQuestOpen = function() {
  var questId = $gameTemp.getQuestOpen();
  if (questId) {
    var categoryOrder = this.getQuestOpenCategories();
    var length = categoryOrder.length;
    for (var i = 0; i < length; ++i) {
      var category = categoryOrder[i];
      var index = this._categoryWindow.findExt(category);
      if (index >= 0) break;
    }
    this._categoryWindow.selectExt(index);
    this.onCategoryOk();
    this._categoryWindow.deactivate();
    this._listWindow.selectExt(questId);
    this.onListQuest();
    if (this._listWindow._mode === 'Quest') {
      this._listWindow.deactivate();
      this._listWindow.setTopRow(this._listWindow.findExt(questId));
      var scrollTimes = Math.floor(this._listWindow.getVisibleRows() / 2);
      while (scrollTimes--) {
        this._listWindow.scrollUp();
      }
    } else if (this._listWindow._mode === 'Extra') {
      this.dataWindowActivate();
      this._listWindow.deactivate();
    }
    this._listWindow.ensureCursorVisible();
    this._listWindow.updateCursor();
  }
  $gameTemp.clearQuestOpen();
};

Scene_Quest.prototype.getQuestOpenCategories = function() {
  return ['available', 'completed', 'failed', 'all'];
};

// Custom Code

Scene_Quest.prototype.centerSprite = function(sprite) {
  sprite.x = Graphics.width / 2;
  sprite.y = Graphics.height / 2;
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;
};

Scene_Quest.prototype.fitScreen = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) {
    return setTimeout(this.fitScreen.bind(this, sprite), 5);
  }
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) sprite.scale.x = ratioX;
  if (ratioY > 1.0) sprite.scale.y = ratioY;
  this.centerSprite(sprite);
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {

Yanfly.Util.toGroup = function(inVal) {
  return inVal;
};

}; // Yanfly.Util.toGroup

Yanfly.Util.getRange = function(n, m) {
  var result = [];
  for (var i = n; i <= m; ++i) result.push(i);
  return result;
};

//=============================================================================
// End of Main Functions
//=============================================================================
} else {

var text = '';
text += 'You are getting this error because you are trying to run ';
text += 'YEP_QuestJournal while your project files are lower than version ';
text += '1.5.0.\n\nPlease visit this thread for instructions on how to update ';
text += 'your project files to 1.5.0 or higher: \n\n';
text += 'https://forums.rpgmakerweb.com/index.php?threads/';
text += 'rpg-maker-mv-1-5-0-update.79677/';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} // (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0')
//=============================================================================
// End of File
//=============================================================================