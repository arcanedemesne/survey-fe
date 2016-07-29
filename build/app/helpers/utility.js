"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var UTILITY = {

  cloneState: function cloneState(state) {
    return JSON.parse(JSON.stringify(state));
  }

};
exports.default = UTILITY;