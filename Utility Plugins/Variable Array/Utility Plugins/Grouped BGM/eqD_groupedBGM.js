  
//=============================================================================
// Grouped BGM
// By equalDelight
// eqD_groupedBGM.js
// Version: 0.0.1
// Released under MIT license
//=============================================================================

var Imported = Imported || {};
Imported.eqD_variableArray = "0.0.1";

var eqD = eqD || {};
equalDelight.groupedBGM = equalDelight.groupedBGM || {};
eqD.PluginCommands = eqD.PluginCommands || {};

//=============================================================================
 /*:
 * @plugindesc v0.0.1 | Will allow devs to change Map BGM easily.
 * @author equalDelight
 * 
 * @help
 * Grouped BGM by equalDelight
 * Version 0.0.1
 * Release Notes: See the end of the page
 *
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin will allow devs to change Map BGM easily using map notetag to 
 * reference the BGM used in other map. 
 * 
 * Let's say you have a dungeon map with this structure:
 * - Dungeon 1
 *  - Dungeon 1 A
 *  - Dungeon 1 B
 *  - Dungeon 1 C
 * 
 * Changing all of Dungeon 1 BGM will be a chore, especially if there's so 
 * many sub map of that dungeon.
 * 
 * With this plugin you can change it easily by referencing the main map's
 * BGM using map note tags.
 * 
 * ==============================================================================
 *  Notetags
 * ==============================================================================
 *
 * <bgm_reference: MapID> (case sensitive)
 * 
 * Replace MapID with the ID of a map you reference to.
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * "groupedbgm true"
 * 
 * Enables Grouped BGM.
 * 
 * "groupedbgm false"
 * 
 * Disables Grouped BGM. Disable this plugin if there's problem in playing BGM 
 * from an event
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
 * 
 * Thanks for using this plugin.
 * Credits are not required but apreciated.
 *
 * Release Notes:
 * https://github.com/Warilized/RPGMMV-Plugins/blob/main/Utility%20Plugins/Grouped%20BGM/RELEASENOTES.txt 
 *
 */
//=============================================================================

//=============================================================================
// Script
//=============================================================================
(function ($) {
	"use strict";

//LOCAL VARIABLES
  let loadReference,
      currentGroup,
      BGMGroupName;

//GAME MAP
  const eqD_groupedBGM__autoplay = Game_Map.prototype.autoplay;
  Game_Map.prototype.autoplay = function() {
    var BGMGroup = parseInt($dataMap.meta.bgm_reference);
    var mapRef = 'Map%1.json'.format(BGMGroup.padZero(3));
    loadReference = function(src) {
      var xhr = new XMLHttpRequest();
      var url = 'data/' + src;
      xhr.open('GET', url);
      xhr.overrideMimeType('application/json');
      xhr.onload = function() {
        if (xhr.status < 400) {
          dataMapRef = JSON.parse(xhr.responseText);
          DataManager.extractMetadata(dataMapRef);
		  var BGMGroupName = dataMapRef.bgm.name;
          if (BGMGroup != currentGroup) {
            currentGroup = BGMGroup;
            console.log("This is group : "+currentGroup+", BGM is: "+BGMGroupName );
            AudioManager.playBgm(dataMapRef.bgm);
            var isBGMLoaded = true; 
            console.log("Executed : "+dataMapRef.bgm.name);
          }
        }
      };
      xhr.onerror = ResourceHandler.createLoader(url, loadReference.bind($, src));
      dataMapRef = null;
      xhr.send();
    };
   if (BGMGroup > 0 && !$dataMap.autoplayBgm)  { // If bgm_reference notetag is > 0 and no assigned bgm on map present
      if ($gamePlayer.isInVehicle()) {
          $gameSystem.saveWalkingBgm2();
      } else {
		  console.log("Executed autoplay");
          loadReference(mapRef);
      }  
    }
  eqD_groupedBGM__autoplay.call(this);
};

})(eqD.groupedBGM);
