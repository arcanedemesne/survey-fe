import React from 'react';
import '../../assets/styles/app.css';
import SurveyApi from '../../app/survey/survey.api';
import SurveyDetailPage from './surveyDetail.page';
import SurveyEditPage from './surveyEdit.page';

const SurveyMode = {
    Edit: 'edit',
    View: 'view'
};

class SurveyMainView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            apiEndpoint: props.apiEndpoint,
            mode: props.mode,
            templateName: props.templateName,
            survey: {}
        };

        this.saveSurvey = this.saveSurvey.bind(this);
    }

    componentWillMount() {
        SurveyApi.viewSurvey(this.state.templateName, this.state.apiEndpoint).then((survey) => {
            this.setState({ survey });
        });
    }

    saveSurvey() {
        let { survey } = this.state;
        console.log(survey);
        if (!validateSurvey(survey)) {
            this.setState({ survey: survey });
            return;
        }

        SurveyApi.saveSurvey(survey).then((response) => {
            this.setState({ mode: SurveyMode.View });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { mode, survey } = this.state;
        if (survey) {
            return (
                <div>
                    { mode == SurveyMode.Edit && <SurveyEditPage survey={survey} saveSurvey={this.saveSurvey} /> }
                    { mode == SurveyMode.View && <SurveyDetailPage survey={survey} /> }
                </div>
            );
        } else {
            return (
                <div>
                    <h3>External Survey Module</h3>
                    <span className="error">Invalid Template Name</span>
                </div>
            );
        }
    }
}

export default SurveyMainView;