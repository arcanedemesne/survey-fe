import React from 'react';
import '../../assets/styles/app.css';
import SurveyApi from '../../app/survey/survey.api';
import SurveyDetailPage from './surveyDetail.page';
import SurveyEditPage from './surveyEdit.page.page';

const SurveyMode = {
    Edit: 'edit',
    View: 'view'
};

class SurveyMainView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: props.mode || SurveyMode.Edit,
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
                    { mode == SurveyMode.Edit && <SurveyEditPage survey={survey} /> }
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