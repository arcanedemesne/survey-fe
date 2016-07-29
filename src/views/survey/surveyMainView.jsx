import React from 'react';

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