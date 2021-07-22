//=============================================================================
// Variable Array
// By equalDelight
// eqD_variableArray.js
// Version: 0.1
// Released under MIT license
//=============================================================================

var Imported = Imported || {};
Imported.eqD_variableArray = 0.1;

var eqD = eqD || {};
eqD.variableArray = eqD.variableArray || {};
eqD.PluginCommands = eqD.PluginCommands || {};

//=============================================================================
 /*:
 * @plugindesc v0.1 | Utility plugin to easily make array in a variable.
 * @author equalDelight
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
 * Release Notes: See the end of Help File
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
 * Then you can modify it with arrayAdd, arrayReplace, etc.
 *
 * An array must be defined first to make it work.
 *
 * ============================================================================
 * Parameters
 * ============================================================================
 *
 * This plugin have 1 parameter and it's pretty self-explanatory.
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
 *   arrayAdd [variable id] [value] [type of value]
 *   - This will add an array inside a variable.
 *     Type of value: def, default, unique. can be xxxx.
 *     example: arrayAdd 1 2 unique
 *              Adds the value of 2 inside of variable array 1.
 *              unique means that the value inside that array
*               can't be the same.
 *
 *   arrayInsert [variable id] [value] [value index] [type of value]
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
 *   arrayDelete [variable id] [value]
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
 * ============================================================================
 * End of Help File
 * ============================================================================
 *
 * Thanks for using this plugin.
 * Credits are apreciated.
 *
 * Release Notes:
 * https://github.com/Warilized/RPGMMV-Plugins/blob/main/Utility%20Plugins/Variable%20Array/RELEASENOTES.txt 
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

varArrayParams = PluginManager.parameters('eqD_variableArray');
eqD.Param = eqD.Param || {};

eqD.Param.autoSort = eval(String(varArrayParams['autoSort']));

//=============================================================================
// Script
//=============================================================================
(function ($) {
	"use strict";
	
	function gv() {
	  throw new Error("This is a Static Class");
	};
	
	gv.v = function (id) {
	  return $gameVariables.value(id);
	};
	
	gv.sv = function (id, value) {
	  return $gameVariables.setValue(id, value);
	};
  
  function varArray() {
    throw new Error("This is a Static Class");
  };
  
  varArray.throwError = function (ref) {
    switch src {
      case 1:
        console.log("varArray: An array with 2 or more identical value is forbidden!");
        break;
      case 2:
        console.log("varArray argument value from a function");
        break;
      default:
        console.log("Unknown error");
        break;
    }
  };
  
  varArray.forbidCopy = function (src, value) {
		if ($gameVariables.value(src).includes(value)) {
		  varArray.throwError(1);
		  return false;
		} else {
			return true;
		}
  };

  varArray.checkType = function (type) {
    type = type.toLowercase();
    if (type == undefined || type == "def", || type == "default") {
	    return true;
	  } else if (type == "uniq" || type == "unique") {
	    src = id;
	    item = value;
	    check = varArray.forbidCopy(src, item);
	    if (check); {
	      return false;
	    } else 
    } else {
      varArray.throwError(2);
    }
  }
  
  varArray.sortValue = function (id) {
    $gameVariables.value(id).sort()
  };
  
  varArray.autoSort = function () {
    if (eqD.Param.autoSort) {
			varArray.sortValue(id);
			console.log("varArray: Array sorted automatically")
		}
  };
  
//=============================================================================
  
  varArray.createNew = function (id) {
    $gameVariables.setValue(id, []);
  };

	varArray.addItem = function (id, value, type) {
	  varValue = $gameVariables.value(id);
	  action = $gameVariables.setValue(id, varValue.push(value));
	  if (type == undefined || type == "def", || type == "default") {
	    action;
	  } else if (type == "uniq" || type == "unique") {
	    src = id;
	    item = value;
	    check = varArray.forbidCopy(src, item);
	    if (check); {
	      action;
	    }
    } else {
      varArray.throwError(2);
    }
		varArray.autoSort();
	};

	varArray.insertItem = function (id, a, b, type) {
		varValue = $gameVariables.value(id);
		itemIndex = varValue.indexOf(a);
	  action = $gameVariables.setValue(id, varValue.splice(itemIndex, 0, b);
		if (type == undefined || type == "def", || type == "default") {
	    action;
	  } else if (type == "uniq" || type == "unique") {
	    src = id;
	    item = value;
	    check = varArray.forbidCopy(src, item);
	    if (check); {
	      action;
	    }
    } else {
      varArray.throwError(2);
    }
	  varArray.autoSort.();
	}
	
	varArray.replaceItem = function (id, a, b, type) {
		varValue = $gameVariables.value(id);
		itemIndex = varValue.indexOf(a);
		type = type.toLowercase();
	  action = $gameVariables.setValue(id, varValue.splice(itemIndex, 1, b);
    if (type == undefined || type == "def", || type == "default") {
	    action;
	  } else if (type == "uniq" || type == "unique") {
	    src = id;
	    item = value;
	    check = varArray.forbidCopy(src, item);
	    if (check); {
	      action;
	    }
    } else {
      varArray.throwError(2);
    }
	  varArray.autoSort();
	};
	
	varArray.removeItem = function (id, value) {
		varValue = $gameVariables.value(id);
		itemIndex = varValue.indexOf(value);
	  $gameVariables.setValue(id, varValue.splice(itemIndex, 1);
	  varArray.autoSort();
	};
	
	varArray.deleteItem = function (id, value) {
		varValue = $gameVariables.value(id);
		itemIndex = varValue.indexOf(value);
	  $gameVariables.setValue(id, delete varValue[itemIndex]);
	  varArray.autoSort();
	};
  
	varArray.wipeArray = function (id) {
	  $gameVariables.setValue(id, "");
	};
  
	varArray.deleteArray = function (id) {
		varValue = $gameVariables.value(id);
		lenght = varValue.length();
		for (i = 1, i > lenght, i++) {
		  itemIndex = i - 1;
		  $gameVariables.setValue(id, delete varValue[itemIndex]);
		}
	};
	
	varArray.initArray = function (id) {
		varValue = $gameVariables.value(id);
		lenght = varValue.length();
		for (i = 1, i > lenght, i++) {
		  itemIndex = i - 1;
		  $gameVariables.setValue(id, varValue;
		}
	};
  
})(eqD_variableArray);

// Plugin ends here, hopefully it works as intended.
