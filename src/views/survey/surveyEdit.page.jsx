import React  from 'react';
import * as  SurveyActions from '../../app/survey/survey.actions';
import SurveyQuestionComponent from './surveyQuestion.component';
import  * as SurveyStore from '../../app/survey/survey.store';
import SurveyApi  from '../../app/survey/survey.api';

export default class SurveyEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {prompts: props.prompts};
    }

    componentDidMount() {
        //Load Initial Data via AJAX
        SurveyApi.viewSurvey('Preliminary Questions').then((survey) => {
            console.log(survey);
            this.setState(survey);
        });
    }

    componentWillMount() {
        //Invoked once
        SurveyStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        //Clean up when this component is unmounted
        //When fetching data asynchronously, use componentWillUnmount
        // to cancel any outstanding requests before the component is unmounted.
        SurveyStore.removeChangeListener(this.onChange);

    }

    onChange() {
        this.setState(SurveyStore.getSurvey());
    }

    render() {
        let page = this.state;

        return (
            <div>
                <fieldset>
                    <legend>{ page.name }</legend>
                    <p>{ page.description }</p>

                    <SurveyQuestionComponent prompts={ page.prompts }/>

                    <div>
                        <button type="button" className="button" onClick={ this.save.bind(this) }>Save</button>
                    </div>
                </fieldset>
            </div>
        );
    }

    save() {
        let survey = this.state;
        if (!validateSurvey(survey)) {
            this.setState(survey);
            return;
        }

        SurveyActions.saveSurvey(survey);
    }
}

//set default props
SurveyEditPage.defaultProps = {
    prompts: []
};

function validateSurvey(survey) {

    return validatePrompts(survey.prompts);

    function validatePrompts(prompts) {
        let isValidPrompts = true;

        prompts.forEach((prompt) => {
            prompt.errors = [];
            if (!prompt.isRequired) {
                return;
            }

            let hasSelectedOption = false;
            prompt.options.forEach((option) => {
                if (option.isSelected == true) {
                    hasSelectedOption = true;
                    validatePrompts(option.followUpPrompts);
                }
            });
            if (hasSelectedOption) {
                return;
            }

            prompt.errors = ['This question is required and must be answered.'];
            isValidPrompts = false;
        });

        return isValidPrompts;
    }
}
