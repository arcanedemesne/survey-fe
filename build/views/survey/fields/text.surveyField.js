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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TextSurveyField: {
    displayName: 'TextSurveyField'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/fields/text.surveyField.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/fields/text.surveyField.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var TextSurveyField = _wrapComponent('TextSurveyField')(function (_Component) {
  _inherits(TextSurveyField, _Component);

  function TextSurveyField(props) {
    _classCallCheck(this, TextSurveyField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextSurveyField).call(this, props));
  }

  _createClass(TextSurveyField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
        this.options.map(function (option) {
          return _react3.default.createElement('input', { type: 'text',
            key: 'surveytextfield' + option.id,
            name: _this2.name,
            onChange: function onChange(event) {
              var inputValue = event.target.value;
              _this2.onChange(option.id, inputValue);
            }
          });
        })
      );
    }
  }]);

  return TextSurveyField;
}(_react2.Component));

exports.default = TextSurveyField;