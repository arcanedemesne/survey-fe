import React  from 'react';
import SurveyQuestionComponent from './surveyQuestion.component';

export default class SurveyEditPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            survey: props.survey
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.survey) {
            this.setState({ survey: nextProps.survey });
        }
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
                            <button type="button" className="button" onClick={this.props.saveSurvey}>Save</button>
                        </div>
                    </fieldset>
                </div>
            );
        } else {
            return (<div>loading prompts...</div>);
        }
    }
}
