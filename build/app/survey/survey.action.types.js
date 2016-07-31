(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.surveyActionTypes = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SURVEY_SAVE = exports.SURVEY_SAVE = 'SURVEY_SAVE_CHANGES';
  var STORE_SURVEY_TEMPLATE = exports.STORE_SURVEY_TEMPLATE = 'STORE_SURVEY_TEMPLATE';
  var INITIALIZE = exports.INITIALIZE = 'INITIALIZE';
});