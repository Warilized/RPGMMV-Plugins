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
 * @desc Forbids an array having items with the same values.
 * @type boolean
 * @on YES
 * @off NO
 * @default true
 *
 * @param autoSort
 * @text Auto Sort
 * @desc Auto sort the values inside of an array.
 * @type boolean
 * @on YES
 * @off NO
 * @default false
 *
 *
 * @help
 * Variable Array by equalDelight
 * Version 0.0.1
 * Release Notes: 
 * https://github.com/Warilized/RPGMMV-Plugins/blob/main/eqD_variableArray/RELEASENOTES.txt
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
 * Then you cam modify it with arrayAdd, arratReplace, etc.
 *
 * An array must be defined first to make it work.
 *
 * ============================================================================
 * Parameters
 * ============================================================================
 *
 * This plugin have 2 parameters and it's pretty self-explanatory.
 * 
 * Parameters:
 * - Forbid Copy
 *   Forbids an array having items with the same values. 
 *   Usefull for a unique valued array.
 *
 * - Auto Sort
 *   Auto sort the values inside of an array.
 *   If the item value is strictly tied to it's index*, disable this.
 *   *Example: Making the index of an array some sort of ID that can be 
 *   referenced.
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * You can use the following script call to manipulate an array.
 *
 * Script calls:
 * - insert scriptcalls
 *   insert desc.
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
 *   arrayInsert [variable id] [value] [value index]
 *   - This will add an array inside a variable.
 *     example: arrayInsert 2 4 8
 *              Insert the item value of 8 at index 8 on variable array 2.
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
  };
  
  varArray.autoSort = function () {
    if (equalDelight.Param.autoSort) {
			varArray.sortValue(id);
		} else {
		  return;
		}
  };
  
  varArray.forbidCopy = function (id, value) {
    return false;
  };
  
  varArray.createNew = function (id) {
    $gameVariables.setValue(id, []);
  };

	varArray.addItem = function (id, value) {
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

	varArray.insertItem = function (id, a, b) {
		varValue = $gameVariables.value(id);
		itemIndex = varValue.indexOf(a);
	  action = $gameVariables.setValue(id, varValue.splice(itemIndex, 0, b);
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
	
	varArray.replaceItem = function (id, a, b) {
		varValue = $gameVariables.value(id);
		itemIndex = varValue.indexOf(a);
	  action = $gameVariables.setValue(id, varValue.splice(itemIndex, 1, b);
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
