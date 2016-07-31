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
    global.apiRoutesConfig = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var API_ROUTE = 'http://symphonyapi01.azurewebsites.net/';

  var ROUTES = {
    SURVEY_TEMPLATE: 'api/questionnaire-templates/{:templateName}',
    SURVEY_SAVE: 'api/questionnaires'
  };

  var API_ROUTES = function () {
    function API_ROUTES() {
      _classCallCheck(this, API_ROUTES);
    }

    _createClass(API_ROUTES, null, [{
      key: 'surveyTemplate',
      value: function surveyTemplate(templateName) {
        return constructRoute(ROUTES.SURVEY_TEMPLATE, { param: 'templateName', value: templateName });
      }
    }, {
      key: 'surveySave',
      value: function surveySave() {
        return constructRoute(ROUTES.SURVEY_SAVE);
      }
    }]);

    return API_ROUTES;
  }();

  exports.default = API_ROUTES;


  function constructRoute(route) {
    var propMappings = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    var populatedRoute = route;
    var mappings = Array.isArray(propMappings) ? propMappings : [propMappings];

    mappings.forEach(function (mapping) {
      populatedRoute = populatedRoute.replace('{:' + mapping.param + '}', mapping.value);
    });

    return API_ROUTE + populatedRoute;
  }
});