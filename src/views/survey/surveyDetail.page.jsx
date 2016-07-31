import React  from 'react';
import SurveyAnswersComponent from './surveyAnswers.component';


class SurveyDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      survey: [],
      errors: []
    };

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.survey) {
      this.setState({ survey: nextProps.survey });
    }
  }

  render() {
    let { survey } = this.state;

    console.log('survey-detail', survey);
    return (
        <div>
          <fieldset>
            <legend>{ survey.name }</legend>
            <p>{ survey.description }</p>

            <SurveyAnswersComponent prompts={ survey.prompts } />

          </fieldset>
        </div>
    );
  }
}
export default SurveyDetailPage;