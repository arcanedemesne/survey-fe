"use strict";

import  * as ActionTypes from './survey.action.types';
import React from 'react';
import  Dispatcher from '../appdispatcher';
import SurveyApi  from './survey.api';
import { browserHistory } from 'react-router';


var SurveyActions = {

    saveSurvey: function(survey) {
        SurveyApi
            .saveSurvey(survey)
            .then(() => {
                browserHistory.push('/surveyview');
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