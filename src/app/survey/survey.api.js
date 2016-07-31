import { GET, POST } from '../helpers/api.utility';
import API_ROUTES from '../../config/apiRoutes.config';
import  * as SurveyStore from './survey.store';
import  Dispatcher from '../appdispatcher';
import  * as ActionTypes from './survey.action.types';

class SurveyApi {
    static viewSurvey(templateName) {
        return new Promise((resolve, reject) => {
            let surveyTemplateState = getSurveyState();
            if(surveyTemplateState.name != templateName) {
                surveyTemplateState = getSurveyTemplateFromServer(templateName);
            }

            return resolve(surveyTemplateState);
        });
    }

    static saveSurvey(survey) {
        return new Promise((resolve, reject) => {

            return sendSurveySaveToServer(survey)
                .then(() => {

                   // const action = ACTIONS.SAVE_SURVEY(survey);
                   // SurveyStore.(action);

                    return resolve();
                })
                .catch((error) => { return reject(error); });
        });

    }
}


function getSurveyState() {
    return  Object.assign({},SurveyStore.getSurvey()) ;
}

function getSurveyTemplateFromServer(templateName) {
    return new Promise((resolve, reject) => {

        return GET(API_ROUTES.surveyTemplate(templateName))
            .then((template) => {

                Dispatcher.dispatch({
                    actionType: ActionTypes.STORE_SURVEY_TEMPLATE,
                    survey: template
                });

                return resolve(Object.assign({},SurveyStore.getSurvey()));
            })
            .catch((error) => { return reject(error); });

    });
}

function sendSurveySaveToServer(survey) {
    survey.ownerId = 'LoremIpsum'; // TODO: this will come from the context passed in when it is converted into a module/component instead of a web app.
    survey.userId = 'LoremIpsum'; // TODO: remove when BE provides this

    let request = {
        questionnaireTemplateId: survey.id,
        ownerId: survey.ownerId,
        userId: survey.userId,
        responses: collectSurveyPromptResponses(survey.prompts)
    };

    return POST(API_ROUTES.surveySave(), request);


    function collectSurveyPromptResponses(prompts) {
        let responses = [];

        prompts.forEach((prompt) => {

            responses = [
                ...responses,
                ...buildResponseFromSelectedOptions(prompt),
                ...collectFollowupPromptResponses(prompt)
            ];

        });
        return responses;
    }

    function buildResponseFromSelectedOptions(prompt) {
        let responses = [];

        prompt.options.forEach((option) => {
            if(!option.isSelected) { return; }

            responses.push({
                promptId: prompt.id,
                optionId: option.id,
                value: option.value
            });
        });

        return responses;
    }

    function collectFollowupPromptResponses(prompt) {
        let followupResponses = [];

        prompt.options.forEach((option) => {
            if(!option.isSelected) { return; }

            followupResponses = [
                ...followupResponses,
                ...collectSurveyPromptResponses(option.followUpPrompts)
            ];
        });

        return followupResponses;
    }
}

export default SurveyApi;
