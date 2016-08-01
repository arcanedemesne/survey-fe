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
        SurveyApi.viewSurvey(this.state.templateName).then((survey) => {
            this.setState({ survey });
        });
    }

    render() {
        const { mode, survey } = this.state;
        if (survey) {
            return (
                <div>
                    <h3>External Survey Module</h3>
                    { mode == SurveyMode.Edit && <SurveyDetailPage survey={survey} /> }
                    { mode == SurveyMode.View && 'View' }
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