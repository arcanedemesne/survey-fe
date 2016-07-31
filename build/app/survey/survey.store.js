(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'events'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('events'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.events);
        global.surveyStore = mod.exports;
    }
})(this, function (module, _events) {
    'use strict';

    var CHANGE_EVENT = 'change'; //import Dispatcher from '../appdispatcher';
    //import  * as ActionTypes from './survey.action.types';


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

    /*Dispatcher.register(function(action) {
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
    });*/

    module.exports = SurveyStore;
});