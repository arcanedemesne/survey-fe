'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('C:\\WebstormProjects\\survey-fe\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\WebstormProjects\\survey-fe\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\WebstormProjects\\survey-fe\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRadioGroup = require('react-radio-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  RadiosSurveyField: {
    displayName: 'RadiosSurveyField'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/fields/radios.surveyField.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/fields/radios.surveyField.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var RadiosSurveyField = _wrapComponent('RadiosSurveyField')(function (_Component) {
  _inherits(RadiosSurveyField, _Component);

  function RadiosSurveyField(props) {
    _classCallCheck(this, RadiosSurveyField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RadiosSurveyField).call(this, props));
  }

  _createClass(RadiosSurveyField, [{
    key: 'render',
    value: function render() {
      this.name = this.props.name;
      this.labelText = this.props.labelText;
      this.options = this.props.options;
      this.defaultValue = this.props.defaultValue;
      this.onChange = this.props.onChange;

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'label',
          null,
          this.labelText
        ),
        _react3.default.createElement(
          _reactRadioGroup.RadioGroup,
          {
            name: this.name + '',
            selectedValue: this.defaultValue,
            onChange: this.onChange },
          this.options.map(function (option) {
            return _react3.default.createElement(
              'span',
              { key: 'radiooption' + option.id },
              _react3.default.createElement(_reactRadioGroup.Radio, { value: option.id }),
              ' ',
              option.displayName
            );
          })
        )
      );
    }
  }]);

  return RadiosSurveyField;
}(_react2.Component));

exports.default = RadiosSurveyField;