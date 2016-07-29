"use strict";

import Dispatcher from '../appdispatcher';
import  * as ActionTypes from './survey.action.types';
import { EventEmitter } from 'events';

var CHANGE_EVENT = 'change';

var survey = {};

var SurveyStore =  Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    getSurvey : function(){
        return survey;
    }
});

Dispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            survey = action.initialData.survey;
            SurveyStore.emitChange();
            break;
        case ActionTypes.SURVEY_SAVE:
            Object.assign(survey,action.survey);
            SurveyStore.emitChange();
            break;
        case ActionTypes.STORE_SURVEY_TEMPLATE:
            Object.assign(survey,action.survey);
            SurveyStore.emitChange();

            break;
        default:
        // no op
    }
});

module.exports = SurveyStore;