(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.surveyAnswersComponent = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var SurveyAnswersComponent = function (_React$Component) {
    _inherits(SurveyAnswersComponent, _React$Component);

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

        return _react2.default.createElement(
          'div',
          { key: 'survey-question-component' + this.keyIncriment },
          this.prompts.map(function (prompt) {
            return _react2.default.createElement(
              'div',
              { key: 'prompt-field-' + prompt.id },
              _react2.default.createElement(
                'label',
                null,
                prompt.text
              ),
              prompt.options.filter(function (option) {
                return option.isSelected;
              }).map(function (option) {
                return _react2.default.createElement(
                  'div',
                  { key: 'answer' + option.id },
                  option.value || option.text
                );
              }),
              _this2.getFollowUpPrompts(prompt).map(function (followUpPrompts, i) {
                return _react2.default.createElement(
                  'div',
                  { key: 'followups' + i, className: 'survey-answers-followups' },
                  _react2.default.createElement(SurveyAnswersComponent, { prompts: followUpPrompts, keyIncriment: i + 1 })
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
  }(_react2.default.Component);

  exports.default = SurveyAnswersComponent;
});