//=============================================================================
// Variable Decimals
// By equalDelight
// eqD_variableDecimals.js
// Version: 1.0
// Released under MIT license
//=============================================================================

var eqD = eqD || {};                           		//Author namespace
eqD.variableDecimals = eqD.variableDecimals || {};      //Plugin namespace
//eqD.PluginCommands = eqD.PluginCommands || {};

var Imported = Imported || {};                 //Import declaration namespace
Imported.eqD_variableDecimals = 1.0;           //Version declaration namespace

/*:
 * @plugindesc Enable Decimal on variable.
 * @author equalDelight
 * 
 * @param Decimal
 * @type number
 * @default 0
 * @min 0
 * @desc How many decimal number after the dot/comma. default = 0
 * 
 * @param Rounding
 * @type boolean
 * @default true
 * @desc Enable rounding. default = true
 * 
 * @help
 * Variable Decimals by equalDelight
 * Version 1.0
 * Release Note: TBD
 *
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin enable variable to accept a decimal value. 
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * No command at the moment.
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
 * 
 * Thanks for using this plugin.
 * Credits are not required but apreciated.
 *
 * Special thanks to Cathyril for helping learning in making this plugin
 *
 */

(function($) { // $ = eqD.varDecimals inside this IIFE (see comment on final line)

//=============================================================================
// Parameter Variables
//=============================================================================
	
  // Get this plugin's parameters (note: params are all in string format here)
  const params = PluginManager.parameters('eqD_variableDecimals');
  // Define a new property on the plugin namespace	
  $.decNum = parseInt(params["Decimal"], 10) || 0; 	// string -> base-10 integer
  $.rounding = = String(params['Rounding']).trim().toLowerCase();
		
//=============================================================================
// Game Variables
//=============================================================================
  
  // Override (i.e. replace) existing method
  Game_Variables.prototype.setValue = function(variableId, value) {
	  if (variableId > 0 && variableId < $dataSystem.variables.length) {
		  if (typeof value === 'number') {
			  //Checking if the number has 0 behind decimal point
			  if (value !== Math.floor(value)) {
				  value = value.toFixed($.decNum);
			  } else {
				  value = value.toFixed(0);
			  }
		  }
		  this._data[variableId] = value;
		  this.onChange();
	  }
  };
})(eqD.variableDecimals);    // Pass plugin namespace in as parameter 1 of the IIFE
