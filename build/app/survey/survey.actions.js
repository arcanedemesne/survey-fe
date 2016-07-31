(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'react', './survey.api'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('react'), require('./survey.api'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.react, global.survey);
        global.surveyActions = mod.exports;
    }
})(this, function (module, _react, _survey) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _survey2 = _interopRequireDefault(_survey);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    //import  * as ActionTypes from './survey.action.types';
    var SurveyActions = {

        saveSurvey: function saveSurvey(survey) {
            _survey2.default.saveSurvey(survey).then(function () {
                alert('/surveyview');
            });

            /*Dispatcher.dispatch({
                actionType: ActionTypes.SURVEY_SAVE,
                survey: survey
            });*/
        },

        storeSurveyTemplate: function storeSurveyTemplate(surveyTemplate) {
            _survey2.default.storeSurveyTemplate(surveyTemplate);

            /*Dispatcher.dispatch({
                actionType: ActionTypes.STORE_SURVEY_TEMPLATE,
                survey: surveyTemplate
            });*/
        }

    };
    //import  Dispatcher from '../appdispatcher';


    module.exports = SurveyActions;
});