import React, { Component } from 'react';

class SelectSurveyField extends Component {
  constructor(props) { super(props); }

  render() {
    this.name = this.props.name;
    this.labelText = this.props.labelText;
    this.options = this.props.options;
    this.defaultValue = this.props.defaultValue;
    this.onChange = this.props.onChange;

    return (
      <div>
        <label>{ this.labelText }</label>
        <select
          name={ this.name }
          onChange={ (event) => {
            const optionId = event.target.value;
            this.onChange(optionId);
          }}>
          <option value="">Select Choice</option>
          { this.options.map((option) => {
            return <option key={ 'selectoption'+ option.id } value={ option.id }>{ option.displayName }</option>
          })}
        </select>
      </div>
    );
  }
}
export default SelectSurveyField;