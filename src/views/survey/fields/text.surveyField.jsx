import React  from 'react';

class TextSurveyField extends React.Component {
  constructor(props) { super(props); }

  render() {
    this.name = this.props.name;
    this.labelText = this.props.labelText;
    this.options = this.props.options;
    this.defaultValue = this.props.defaultValue;
    this.onChange = this.props.onChange;

    return (
      <div>
        <label htmlFor={this.name}>{ this.labelText }</label>
        { this.options.map((option) => {
          return (
            <input type="text"
              key={ 'surveytextfield' + option.id }
              name={ this.name }
              onChange={ (event) => {
                const inputValue = event.target.value;
                this.onChange(option.id, inputValue);
              }}
            />);
        })}
     </div>
   );
  }
}
export default TextSurveyField;