//=============================================================================
// Variable Array
// By equalDelight
// eqD_variableArray.js
// Version: 0.0.1
// Released under MIT license
//=============================================================================

var Imported = Imported || {};
Imported.eqD_variableArray = true;

var equalDelight = equalDelight || {};
equalDelight.variableArray = equalDelight.variableArray || {};
equalDelight.variableArray.version = "0.0.1";

//=============================================================================
 /*:
 * @plugindesc v0.0.1 | Utility plugin to easily make array in a variable.
 * @author equalDelight
 *
 * @param forbidCopy
 * @text Forbid Copy
 * @desc Forbids the same value inside of an array.
 * @type boolean
 * @on YES
 * @off NO
 * @default true
 *
 * @param autoSort
 * @text Auto Sort
 * @desc Auto sort the values inside of an array
 * @type boolean
 * @on YES
 * @off NO
 * @default true
 *
 *
 * @help
 * Variable Array by equalDelight
 * Version 0.0.1
 * Patch Notes: 
 * https://github.com/Warilized/RPGMMV-Plugins/blob/main/eqD_variableArray/PATCHNOTES.txt
 *
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin makes it easier to make an array inside a variable.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Use script calls or plugin command to define a variable as an array first.
 * - arrayCreate 1
 *   //This is a plugin command where 1 is the ID of a variable.
 *
 * Then you cam modify it with arrayAdd or arratReplace
 *
 * ============================================================================
 * Parameters
 * ============================================================================
 *
 *
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * You can use the following scriptcall to manipulate an array.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * You can use the following plugin commands to manipulate an array
 *
 * Plugin Commands:
 *
 *   arrayAdd [variable id] [value]
 *   - This will add an array inside a variable.
 *     example: arrayAdd 1 2
 *              Adds the value 2 inside of variable array 1.
 *
 *   arrayReplace [variable id] [value] [value to replace]
 *   - This will add an array inside a variable.
 *     example: arrayReplace 2 4 8
 *              Replaces the item value of variable array 2 from 4 to 8.
 *
 *   arrayRemove [variable id] [value]
 *   - This will remove a value in an array.
 *     example: arrayRemove 10 5
 *              Removes the item value 5 inside of variable array 10.
 *
 *   arrayWipe [variable id]
 *   - This will delete every value from an array.
 *     example: arrayWipe 7
 *              Deletes everything from variable array 7.
 *
 *   arraySort [variable id]
 *   - This will sort every value from an array from a-z or lesser-greater.
 *     example: arraySort 4
 *              Sorts the elements of variable 4.
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

equalDelight.Parameters = PluginManager.parameters('eqD_variableArray');
equalDelight.Param = equalDelight.Param || {};

equalDelight.Param.forbidCopy = eval(String(equalDelight.Parameters['forbidCopy']));
equalDelight.Param.autoSort = eval(String(equalDelight.Parameters['autoSort']));

//=============================================================================
// Script
//=============================================================================
(function ($) {
	"use strict";
  
  let varArray;
  
  varArray.sortValue = function (id) {
    $gameVariables.value(id).sort()
  }
  
  varArray.autoSort = function () {
    if (equalDelight.Param.autoSort) {
			varArray.sortValue(id);
		}
  };
  
  varArray.forbidCopy = function (id, value) {
    return false;
  }
  
  varArray.createNew = function (id) {
    $gameVariables.setValue(id, []);
  };

	varArray.addElement = function (id, value) {
	  varValue = $gameVariables.value(id);
	  action = $gameVariables.setValue(id, varValue.push(value));
		if (equalDelight.Param.forbidCopy) {
			if ($gameVariables.value(id).includes(value)) {
				console.log("An array with 2 or more identical value is forbidden!");
			} else {
				action;
			}
		} else {
			action;
		};
		varArray.autoSort();
		varValue = "";
	};
	
	varArray.replaceElement = function (id, a, b) {
		varValue = $gameVariables.value(id);
		elemIndex = varValue.indexOf(a);
	  action = $gameVariables.setValue(id, varValue.splice(elemIndex, b);
		if (equalDelight.Param.forbidCopy) {
			if ($gameVariables.value(id).includes(value)) {
				console.log("An array with 2 or more identical value is forbidden!");
			} else {
				action;
			}
		} else {
			action;
		};
	  varArray.autoSort();
	}
// Private variable

// Public variables  

// Private classes  

// Private functions

// Public classes  

// Public functions  

// Export area
    
})(equalDelight); // Do you see the MyName here, that is the value of $ above.

// Plugin ends here
