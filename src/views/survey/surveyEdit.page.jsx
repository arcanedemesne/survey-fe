import React  from 'react';
import SurveyApi from '../../app/survey/survey.api';
import SurveyQuestionComponent from './surveyQuestion.component';

export default class SurveyEditPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            survey: props.survey
        };

        this.saveSurvey = saveSurvey.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.survey) {
            this.setState({ survey: nextProps.survey });
        }
    }

    saveSurvey() {
        let { survey } = this.state;
        if (!validateSurvey(survey)) {
            this.setState({ survey: survey });
            return;
        }

        SurveyApi.saveSurvey(survey).then((response) => {
            this.props.surveyComplete();
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        let { survey } = this.state;
        if (survey.prompts) {
            return (
                <div>
                    <fieldset>
                        <legend>{ survey.name }</legend>
                        <p>{ survey.description }</p>

                        <SurveyQuestionComponent prompts={ survey.prompts }/>

                        <div>
                            <button type="button" className="button" onClick={this.saveSurvey}>Save</button>
                        </div>
                    </fieldset>
                </div>
            );
        } else {
            return (<div className="error">No prompts found.</div>);
        }
    }
}

//set default props
SurveyEditPage.defaultProps = {
    survey: {}
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
