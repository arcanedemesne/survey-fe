import React  from 'react';


class SurveyAnswersComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.prompts = this.props.prompts;
    this.keyIncriment = this.props.keyIncriment || 0;

    return (
      <div key={ 'survey-question-component' + this.keyIncriment }>
      { this.prompts.map((prompt) => {
        return (
          <div key={ 'prompt-field-' + prompt.id }>
            <label>{ prompt.text }</label>
            { prompt.options
                .filter((option) => { return option.isSelected; })
                .map((option) => {
                  return <div key={ 'answer' + option.id }>{ option.value || option.text }</div>
                })
            }
            { this.getFollowUpPrompts(prompt).map((followUpPrompts, i) => {
              return (
                <div key={ 'followups' + i } className="survey-answers-followups">
                  <SurveyAnswersComponent prompts={ followUpPrompts } keyIncriment={ i + 1 } />
                </div>)
            })}
          </div>);
      })}
      </div>
    );
  }

  getFollowUpPrompts(prompt) {
    let followups = [];

    prompt.options.forEach((option) => {
      if(!option.isSelected) { return; }

      followups.push(option.followUpPrompts);
    });

    return followups;
  }
}
export default SurveyAnswersComponent;