"use strict";

var _surveyAction = require('./survey.action.types');

var ActionTypes = _interopRequireWildcard(_surveyAction);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appdispatcher = require('../appdispatcher');

var _appdispatcher2 = _interopRequireDefault(_appdispatcher);

var _survey = require('./survey.api');

var _survey2 = _interopRequireDefault(_survey);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SurveyActions = {

    saveSurvey: function saveSurvey(survey) {
        _survey2.default.saveSurvey(survey).then(function () {
            _reactRouter.browserHistory.push('/surveyview');
        });

        _appdispatcher2.default.dispatch({
            actionType: ActionTypes.SURVEY_SAVE,
            survey: survey
        });
    },

    storeSurveyTemplate: function storeSurveyTemplate(surveyTemplate) {
        _survey2.default.storeSurveyTemplate(surveyTemplate);

        _appdispatcher2.default.dispatch({
            actionType: ActionTypes.STORE_SURVEY_TEMPLATE,
            survey: surveyTemplate
        });
    }

};

module.exports = SurveyActions;