/**
 * @fileoverview Implements Command
 * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.
 */

'use strict';

var util = ne.util;

/**
 * Command
 * It implements command to editors
 * @exports Command
 * @constructor
 * @class
 * @param {string} name Command name
 * @param {number} type Command type (Command.TYPE)
 */
function Command(name, type) {
    this.name = name;
    this.type = type;
}

/**
 * getName
 * returns Name of command
 * @return {string} Command Name
 */
Command.prototype.getName = function() {
    return this.name;
};

/**
 * getType
 * returns Type of command
 * @return {number} Command Type
 */
Command.prototype.getType = function() {
    return this.type;
};

/**
 * isMDType
 * returns whether Command Type is Markdown or not
 * @return {boolean} result
 */
Command.prototype.isMDType = function() {
    return this.type === Command.TYPE.MD;
};

/**
 * isWWType
 * returns whether Command Type is Wysiwyg or not
 * @return {boolean} result
 */
Command.prototype.isWWType = function() {
    return this.type === Command.TYPE.WW;
};

/**
 * isGlobalType
 * returns whether Command Type is Global or not
 * @return {boolean} result
 */
Command.prototype.isGlobalType = function() {
    return this.type === Command.TYPE.GB;
};

/**
 * setKeyMap
 * Set keymap value for each os
 * @param {string} win window Key
 * @param {string} mac mac osx key
 */
Command.prototype.setKeyMap = function(win, mac) {
    this.keyMap = [win, mac];
};

Command.prototype.runWithContext = function(instance, args) {
    args = [instance].concat(args);
    return this.exec.apply(this, args);
};

Command.factory = function(props) {
    var command = new Command(props.name, Command.TYPE.GB);

    util.extend(command, props);

    return command;
};

/**
 * Command Type Constant
 */
Command.TYPE = {
    MD: 0,
    WW: 1,
    GB: 2
};

module.exports = Command;