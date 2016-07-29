import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/toastr/build/toastr.min.css';
import '../../assets/styles/app.css';

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
            <div>External Survey Module</div>
        );
    }
}

export default SurveyMainView;