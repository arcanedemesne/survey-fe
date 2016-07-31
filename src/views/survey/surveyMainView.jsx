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
            <div>
                <h3>External Survey Module</h3>
                I can do all the things!
            </div>
        );
    }
}

export default SurveyMainView;