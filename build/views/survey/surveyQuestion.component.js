"use strict";

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

var _text = require('./fields/text.surveyField');

var _text2 = _interopRequireDefault(_text);

var _radios = require('./fields/radios.surveyField');

var _radios2 = _interopRequireDefault(_radios);

var _select = require('./fields/select.surveyField');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SurveyQuestionComponent: {
    displayName: 'SurveyQuestionComponent'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/surveyQuestion.component.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/surveyQuestion.component.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SurveyQuestionComponent = _wrapComponent('SurveyQuestionComponent')(function (_Component) {
  _inherits(SurveyQuestionComponent, _Component);

  function SurveyQuestionComponent(props) {
    _classCallCheck(this, SurveyQuestionComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyQuestionComponent).call(this, props));
  }

  _createClass(SurveyQuestionComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.prompts = this.props.prompts;
      this.keyIncriment = this.props.keyIncriment || 0;

      this.renderTextField = function (prompt) {
        return _react3.default.createElement(_text2.default, {
          name: prompt.name + prompt.id,
          labelText: prompt.text,
          options: prompt.options,
          isRequired: prompt.isRequired,
          onChange: function onChange(optionId, customValue) {
            var option = prompt.options.find(function (o) {
              return o.id == optionId;
            });
            option.isSelected = true;
            option.value = customValue;
            _this2.forceUpdate();
          },
          defaultValue: prompt.value
        });
      };
      this.renderSelectField = function (prompt) {
        return _react3.default.createElement(_select2.default, {
          name: prompt.name + prompt.id,
          labelText: prompt.text,
          options: prompt.options,
          isRequired: prompt.isRequired,
          onChange: function onChange(optionId) {
            var option = prompt.options.find(function (o) {
              return o.id == optionId;
            });
            option.isSelected = true;
            _this2.forceUpdate();
          },
          defaultValue: prompt.value
        });
      };
      this.renderRadiosField = function (prompt) {
        return _react3.default.createElement(_radios2.default, {
          name: prompt.name + prompt.id,
          labelText: prompt.text,
          options: prompt.options,
          isRequired: prompt.isRequired,
          onChange: function onChange(optionId) {
            prompt.options.forEach(function (option) {
              option.isSelected = false;
            });
            var option = prompt.options.find(function (o) {
              return o.id == optionId;
            });
            option.isSelected = true;
            _this2.forceUpdate();
          },
          defaultValue: prompt.value
        });
      };
      this.renderFollowups = function (prompt) {
        var followUps = _this2.getFollowUpPrompts(prompt);
        return _react3.default.createElement(
          'div',
          { className: 'survey-question-followups' },
          _react3.default.createElement(SurveyQuestionComponent, { prompts: followUps })
        );
      };

      return _react3.default.createElement(
        'div',
        { key: 'survey-question-component' + this.keyIncriment },
        this.prompts.map(function (prompt) {
          prompt.errors = prompt.errors || [];

          var field = void 0;
          switch (prompt.displayHint) {
            case 'select':
              field = _this2.renderSelectField(prompt);
              break;
            case 'radios':
              field = _this2.renderRadiosField(prompt);
              break;
            default:
              field = _this2.renderTextField(prompt);
              break;
          }

          return _react3.default.createElement(
            'div',
            { key: 'prompt-field-' + prompt.id },
            field,
            prompt.errors.map(function (error) {
              return _react3.default.createElement(
                'div',
                { className: 'error' },
                error
              );
            }),
            _this2.renderFollowups(prompt)
          );
        })
      );
    }
  }, {
    key: 'getFollowUpPrompts',
    value: function getFollowUpPrompts(prompt) {
      var followups = [];

      prompt.options.forEach(function (option) {
        if (!option.isSelected) {
          return;
        }

        followups = [].concat(_toConsumableArray(followups), _toConsumableArray(option.followUpPrompts));
      });

      return followups;
    }
  }]);

  return SurveyQuestionComponent;
}(_react2.Component));

exports.default = SurveyQuestionComponent;