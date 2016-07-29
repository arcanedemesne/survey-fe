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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SurveyAnswersComponent: {
    displayName: 'SurveyAnswersComponent'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/surveyAnswers.component.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/surveyAnswers.component.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SurveyAnswersComponent = _wrapComponent('SurveyAnswersComponent')(function (_Component) {
  _inherits(SurveyAnswersComponent, _Component);

  function SurveyAnswersComponent(props) {
    _classCallCheck(this, SurveyAnswersComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyAnswersComponent).call(this, props));
  }

  _createClass(SurveyAnswersComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.prompts = this.props.prompts;
      this.keyIncriment = this.props.keyIncriment || 0;

      return _react3.default.createElement(
        'div',
        { key: 'survey-question-component' + this.keyIncriment },
        this.prompts.map(function (prompt) {
          return _react3.default.createElement(
            'div',
            { key: 'prompt-field-' + prompt.id },
            _react3.default.createElement(
              'label',
              null,
              prompt.text
            ),
            prompt.options.filter(function (option) {
              return option.isSelected;
            }).map(function (option) {
              return _react3.default.createElement(
                'div',
                { key: 'answer' + option.id },
                option.value || option.text
              );
            }),
            _this2.getFollowUpPrompts(prompt).map(function (followUpPrompts, i) {
              return _react3.default.createElement(
                'div',
                { key: 'followups' + i, className: 'survey-answers-followups' },
                _react3.default.createElement(SurveyAnswersComponent, { prompts: followUpPrompts, keyIncriment: i + 1 })
              );
            })
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

        followups.push(option.followUpPrompts);
      });

      return followups;
    }
  }]);

  return SurveyAnswersComponent;
}(_react2.Component));

exports.default = SurveyAnswersComponent;