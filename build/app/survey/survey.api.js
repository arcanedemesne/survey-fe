"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = require('../helpers/api.utility');

var _apiRoutes = require('../../config/apiRoutes.config');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _survey = require('./survey.store');

var SurveyStore = _interopRequireWildcard(_survey);

var _appdispatcher = require('../appdispatcher');

var _appdispatcher2 = _interopRequireDefault(_appdispatcher);

var _surveyAction = require('./survey.action.types');

var ActionTypes = _interopRequireWildcard(_surveyAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SurveyApi = function () {
    function SurveyApi() {
        _classCallCheck(this, SurveyApi);
    }

    _createClass(SurveyApi, null, [{
        key: 'viewSurvey',
        value: function viewSurvey(templateName) {
            return new Promise(function (resolve, reject) {
                var surveyTemplateState = getSurveyState();
                if (surveyTemplateState.name != templateName) {
                    surveyTemplateState = getSurveyTemplateFromServer(templateName);
                }

                return resolve(surveyTemplateState);
            });
        }
    }, {
        key: 'saveSurvey',
        value: function saveSurvey(survey) {
            return new Promise(function (resolve, reject) {

                return sendSurveySaveToServer(survey).then(function () {

                    // const action = ACTIONS.SAVE_SURVEY(survey);
                    // SurveyStore.(action);

                    return resolve();
                }).catch(function (error) {
                    return reject(error);
                });
            });
        }
    }]);

    return SurveyApi;
}();

function getSurveyState() {
    return Object.assign({}, SurveyStore.getSurvey());
}

function getSurveyTemplateFromServer(templateName) {
    return new Promise(function (resolve, reject) {

        return (0, _api.GET)(_apiRoutes2.default.surveyTemplate(templateName)).then(function (template) {

            _appdispatcher2.default.dispatch({
                actionType: ActionTypes.STORE_SURVEY_TEMPLATE,
                survey: template
            });

            return resolve(Object.assign({}, SurveyStore.getSurvey()));
        }).catch(function (error) {
            return reject(error);
        });
    });
}

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