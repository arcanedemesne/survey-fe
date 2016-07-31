import  * as ActionTypes from './survey.action.types';
import React from 'react';
import  Dispatcher from '../appdispatcher';
import SurveyApi  from './survey.api';


var SurveyActions = {

    saveSurvey: function(survey) {
        SurveyApi
            .saveSurvey(survey)
            .then(() => {
                alert('/surveyview');
            });

        Dispatcher.dispatch({
            actionType: ActionTypes.SURVEY_SAVE,
            survey: survey
        });
    },

    storeSurveyTemplate: function(surveyTemplate) {
         SurveyApi.storeSurveyTemplate(surveyTemplate);

        Dispatcher.dispatch({
            actionType: ActionTypes.STORE_SURVEY_TEMPLATE,
            survey: surveyTemplate
        });
    }


};

module.exports = SurveyActions;