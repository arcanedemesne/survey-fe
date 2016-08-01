(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../helpers/api.utility', '../../config/apiRoutes.config'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../helpers/api.utility'), require('../../config/apiRoutes.config'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.api, global.apiRoutes);
        global.surveyApi = mod.exports;
    }
})(this, function (exports, _api, _apiRoutes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

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

    var SurveyApi = function () {
        function SurveyApi() {
            _classCallCheck(this, SurveyApi);
        }

        _createClass(SurveyApi, null, [{
            key: 'viewSurvey',
            value: function viewSurvey(templateName) {
                return new Promise(function (resolve, reject) {
                    return (0, _api.GET)(_apiRoutes2.default.surveyTemplate(templateName)).then(function (template) {
                        return resolve(Object.assign({}, template));
                    }).catch(function (error) {
                        return reject(error);
                    });
                });
            }
        }, {
            key: 'saveSurvey',
            value: function saveSurvey(survey) {
                return new Promise(function (resolve, reject) {
                    return sendSurveySaveToServer(survey).then(function () {
                        return resolve();
                    }).catch(function (error) {
                        return reject(error);
                    });
                });
            }
        }]);

        return SurveyApi;
    }();

    function sendSurveySaveToServer(survey) {
        survey.ownerId = 'LoremIpsum'; // TODO: this will come from the context passed in when it is converted into a module/component instead of a web app.
        survey.userId = 'LoremIpsum'; // TODO: remove when BE provides this

        var request = {
            questionnaireTemplateId: survey.id,
            ownerId: survey.ownerId,
            userId: survey.userId,
            responses: collectSurveyPromptResponses(survey.prompts)
        };

        return (0, _api.POST)(_apiRoutes2.default.surveySave(), request);

        function collectSurveyPromptResponses(prompts) {
            var responses = [];

            prompts.forEach(function (prompt) {

                responses = [].concat(_toConsumableArray(responses), _toConsumableArray(buildResponseFromSelectedOptions(prompt)), _toConsumableArray(collectFollowupPromptResponses(prompt)));
            });
            return responses;
        }

        function buildResponseFromSelectedOptions(prompt) {
            var responses = [];

            prompt.options.forEach(function (option) {
                if (!option.isSelected) {
                    return;
                }

                responses.push({
                    promptId: prompt.id,
                    optionId: option.id,
                    value: option.value
                });
            });

            return responses;
        }

        function collectFollowupPromptResponses(prompt) {
            var followupResponses = [];

            prompt.options.forEach(function (option) {
                if (!option.isSelected) {
                    return;
                }

                followupResponses = [].concat(_toConsumableArray(followupResponses), _toConsumableArray(collectSurveyPromptResponses(option.followUpPrompts)));
            });

            return followupResponses;
        }
    }

    exports.default = SurveyApi;
});