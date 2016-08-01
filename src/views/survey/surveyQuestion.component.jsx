import React  from 'react';
import TextSurveyField from './fields/text.surveyField';
import RadiosSurveyField from './fields/radios.surveyField';
import SelectSurveyField from './fields/select.surveyField';

class SurveyQuestionComponent extends React.Component {
  constructor(props) {
    super(props);

      console.log('prompts', props.prompts);
  }

  render() {
    this.prompts = this.props.prompts;
    this.keyIncriment = this.props.keyIncriment || 0;

    this.renderTextField = (prompt) => {
      return (
        <TextSurveyField
          name={ prompt.name + prompt.id }
          labelText={ prompt.text }
          options={ prompt.options }
          isRequired={ prompt.isRequired }
          onChange={ (optionId, customValue) => {
            let option = prompt.options.find((o) => { return o.id == optionId });
            option.isSelected = true;
            option.value = customValue;
            this.forceUpdate();
          }}
          defaultValue={ prompt.value }
        />
      );
    };
    this.renderSelectField = (prompt) => {
      return(
        <SelectSurveyField
          name={ prompt.name + prompt.id }
          labelText={ prompt.text }
          options={ prompt.options }
          isRequired={ prompt.isRequired }
          onChange={ (optionId) => {
            let option = prompt.options.find((o) => { return o.id == optionId });
            option.isSelected = true;
            this.forceUpdate();
          }}
          defaultValue={ prompt.value }
      />);
    };
    this.renderRadiosField = (prompt) => {
      return (
        <RadiosSurveyField
          name={ prompt.name + prompt.id }
          labelText={ prompt.text }
          options={ prompt.options }
          isRequired={ prompt.isRequired }
          onChange={ (optionId) => {
            prompt.options.forEach((option) => { option.isSelected = false; });
            let option = prompt.options.find((o) => { return o.id == optionId });
            option.isSelected = true;
            this.forceUpdate();
          }}
          defaultValue={ prompt.value }
        />
      );
    };
    this.renderFollowups = (prompt) => {
      const followUps = this.getFollowUpPrompts(prompt);
      return (
        <div className="survey-question-followups">
          <SurveyQuestionComponent prompts={ followUps } />
        </div>
      )
    };

    return <div key={ 'survey-question-component' + this.keyIncriment }>

      { this.prompts.map((prompt) => {
        prompt.errors = prompt.errors || [];

        let field;
        switch (prompt.displayHint) {
          case 'select':
            field = this.renderSelectField(prompt);
            break;
          case 'radios':
            field = this.renderRadiosField(prompt);
            break;
          default:
            field = this.renderTextField(prompt);
            break;
        }

        return (
          <div key={ 'prompt-field-' + prompt.id }>
            { field }
            { prompt.errors.map((error) => {
              return <div className="error">{ error }</div>
            })}
            { this.renderFollowups(prompt) }
          </div>);
      })}
    </div>
  }

  getFollowUpPrompts(prompt) {
    let followups = [];

    prompt.options.forEach((option) => {
      if(!option.isSelected) { return; }

      followups = [
        ...followups,
        ...option.followUpPrompts
      ];
    });

    return followups;
  }
}
export default SurveyQuestionComponent;