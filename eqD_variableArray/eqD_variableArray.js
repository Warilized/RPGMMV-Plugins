//=============================================================================
// Variable Array
// By equalDelight
// eqD_variableArray.js
// Version: 0.1
// Released under MIT license
//=============================================================================

var Imported = Imported || {};
Imported.eqD_variableArray = true;

var equalDelight = equalDelight || {};
equalDelight.variableArray = equalDelight.variableArray || {};
equalDelight.variableArray.version = 0.1;

//=============================================================================
 /*:
 * @plugindesc v0.1 | Utility plugin to easily make array in a variable.
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
 * Version 0.1
 * Patch Notes: [link]
 *
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin makes it easier to make an array inside a variable.
 *
 * ============================================================================
 * Intructions
 * ============================================================================
 *
 * Place your Patch Notes file (could be either a HTML or TXT file) inside the
 * base directory of your game project. By default, this filename is set to
 * 'patchnotes.txt' in the Plugin Parameters, so change that if you intend to
 * use a different filename or file type.
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
 *   addArray [variable id] [value]
 *   - This will add an array inside a variable.
 *     example: addArray 1 2
 *              Adds the value 2 inside of variable 1.
 *
 *   replaceArray [variable id] [value] [value to replace]
 *   - This will add an array inside a variable.
 *     example: replaceArray 2 4 8
 *              Replaces the value of variable 2 from 4 to 8.
 *
 *   removeArray [variable id] [value]
 *   - This will remove a valueom an array.
 *     example: removeArray 10 5
 *              Removes the value 5 inside of variable 10.
 *
 *   deleteArray [variable id]
 *   - This will delete every value from an array.
 *     example: deleteArray 1
 *              Deletes everything from variable 1.
 *
 *   sortArray [variable id]
 *   - This will delete every value from an array.
 *     example: sortArray 1
 *              Sorts the elements of variable 1.
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

	eqD.addArray = function (src, value) {
		if (equalDelight.Param.forbidCopy) {
			if ($gameVariables.value(src).includes(value)) {
				console.log("An array with 2 or more identical value is forbidden!");
			} else {
				$gameVariables.value(src).push(value);
		} else {
			$gameVariables.value(src).push(value);
		};
		if (equalDelight.Param.autoSort) {
			$gameVariables.value(src).sort();
	};
	
	eqD.replaceArray = function (src, a, b) {
		val = $gameVariables.value(src);
	
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
