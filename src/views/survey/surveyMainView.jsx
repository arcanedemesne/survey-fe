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
                <span className="error">I can do all the things!</span>
            </div>
        );
    }
}

export default SurveyMainView;