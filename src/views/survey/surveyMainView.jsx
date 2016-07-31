import React from 'react';
import '../../assets/styles/app.css';
import SurveyDetailPage from './surveyDetail.page';

const SurveyMode = {
    Edit: 'Edit',
    View: 'View'
};

class SurveyMainView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: SurveyMode.Edit,
            templateName: props.templateName
        };
    }

    render() {
        return (
            <div>
                <h3>External Survey Module</h3>
                <SurveyDetailPage />
            </div>
        );
    }
}

export default SurveyMainView;