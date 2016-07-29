"use strict";

var _appdispatcher = require('../appdispatcher');

var _appdispatcher2 = _interopRequireDefault(_appdispatcher);

var _surveyAction = require('./survey.action.types');

var ActionTypes = _interopRequireWildcard(_surveyAction);

var _events = require('events');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANGE_EVENT = 'change';

var survey = {};

var SurveyStore = Object.assign({}, _events.EventEmitter.prototype, {
    addChangeListener: function addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function emitChange() {
        this.emit(CHANGE_EVENT);
    },
    getSurvey: function getSurvey() {
        return survey;
    }
});

_appdispatcher2.default.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            survey = action.initialData.survey;
            SurveyStore.emitChange();
            break;
        case ActionTypes.SURVEY_SAVE:
            Object.assign(survey, action.survey);
            SurveyStore.emitChange();
            break;
        case ActionTypes.STORE_SURVEY_TEMPLATE:
            Object.assign(survey, action.survey);
            SurveyStore.emitChange();

            break;
        default:
        // no op
    }
});

module.exports = SurveyStore;