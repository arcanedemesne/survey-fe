"use strict";

import React, { Component, PropTypes } from 'react';
import SurveyApi from '../../app/survey/survey.api';
import SurveyAnswersComponent from './surveyAnswers.component';
import  * as SurveyStore from '../../app/survey/survey.store';


class SurveyDetailPage extends Component {
  constructor() {
    super();

    this.state = {
      prompts: [],
      errors: []
    };

  }
  componentDidMount() {
    //Load Initial Data via AJAX
    SurveyApi.viewSurvey('Preliminary Questions').then((survey) => {
      console.log(survey);
      this.setState(survey);
    });
  }

  componentWillMount() {
    //Invoked once
    SurveyStore.addChangeListener(this.onChange);
  }


  componentWillUnmount() {
    //Clean up when this component is unmounted
    //When fetching data asynchronously, use componentWillUnmount
    // to cancel any outstanding requests before the component is unmounted.
    SurveyStore.removeChangeListener(this.onChange);

  }

  onChange() {
    this.setState(SurveyStore.getSurvey());
  }

  render() {
    let page = this.state;

    return (
        <div>
          <fieldset>
            <legend>{ page.name }</legend>
            <p>{ page.description }</p>

            <SurveyAnswersComponent prompts={ page.prompts } />

          </fieldset>
        </div>
    );
  }
}
export default SurveyDetailPage;