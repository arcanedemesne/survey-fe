import { GET, POST } from '../helpers/api.utility';
import API_ROUTES from '../../config/apiRoutes.config';

class SurveyApi {
    static viewSurvey(templateName) {
        return new Promise((resolve, reject) => {
            return GET(API_ROUTES.surveyTemplate(templateName))
                .then((template) => {
                    return resolve(Object.assign({}, template));
                })
                .catch((error) => { return reject(error); });

        });
    }

    static saveSurvey(survey) {
        return new Promise((resolve, reject) => {
            return sendSurveySaveToServer(survey)
                .then(() => {
                    return resolve();
                })
                .catch((error) => { return reject(error); });
        });

    }
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
