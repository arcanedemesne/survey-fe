import React  from 'react';
import SurveyAnswersComponent from './surveyAnswers.component';


class SurveyDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      survey: props.survey
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.survey) {
      this.setState({ survey: nextProps.survey });
    }
  }

  render() {
    let { survey } = this.state;
    if (survey.prompts) {
      return (
          <div>
            <fieldset>
              <legend>{ survey.name }</legend>
              <p>{ survey.description }</p>

              <SurveyAnswersComponent prompts={ survey.prompts }/>

            </fieldset>
          </div>
      );
    } else {
      return (<div className="error">No prompts found.</div>);
    }
  }
}
export default SurveyDetailPage;