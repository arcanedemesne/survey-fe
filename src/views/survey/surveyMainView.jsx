import React from 'react';
import '../../assets/styles/app.css';
import SurveyDetailPage from './surveyDetail.page';
import SurveyApi from '../../app/survey/survey.api';

const SurveyMode = {
    Edit: 'Edit',
    View: 'View'
};

class SurveyMainView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: SurveyMode.Edit,
            templateName: props.templateName,
            survey: {}
        };
    }

    componentWillMount() {
        const templateName = 'Preliminary Questions';
        console.log(templateName);
        SurveyApi.viewSurvey(templateName).then((survey) => {
            console.log('survey-main', survey);
            this.setState({ survey });
        });
    }

    render() {
        const { survey } = this.state;
        if (survey) {
            return (
                <div>
                    <h3>External Survey Module</h3>
                    <SurveyDetailPage {...survey} />
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