import React  from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

class RadiosSurveyField extends React.Component {
  constructor(props) { super(props); }

  render() {
    this.name = this.props.name;
    this.labelText = this.props.labelText;
    this.options = this.props.options;
    this.defaultValue = this.props.defaultValue;
    this.onChange = this.props.onChange;

    return (
      //TODO: figure out why react-radio-group isn't working in Symphony
      <div>
        <label>{ this.labelText }</label>
          {<RadioGroup
          name={ this.name + '' }
          selectedValue={ this.defaultValue }
          onChange={ this.onChange }>
          { this.options.map((option) => {
            return (
              <span key={ 'radiooption' + option.id }><Radio value={ option.id } /> { option.displayName }</span>
            );
          })}
        </RadioGroup>}
      </div>
    );
  }
}
export default RadiosSurveyField;