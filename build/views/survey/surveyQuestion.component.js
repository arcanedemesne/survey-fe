(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './fields/text.surveyField', './fields/radios.surveyField', './fields/select.surveyField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./fields/text.surveyField'), require('./fields/radios.surveyField'), require('./fields/select.surveyField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.text, global.radios, global.select);
    global.surveyQuestionComponent = mod.exports;
  }
})(this, function (exports, _react, _text, _radios, _select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _text2 = _interopRequireDefault(_text);

  var _radios2 = _interopRequireDefault(_radios);

  var _select2 = _interopRequireDefault(_select);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
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

  var SurveyQuestionComponent = function (_React$Component) {
    _inherits(SurveyQuestionComponent, _React$Component);

    function SurveyQuestionComponent(props) {
      _classCallCheck(this, SurveyQuestionComponent);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyQuestionComponent).call(this, props));
    }

    _createClass(SurveyQuestionComponent, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        this.prompts = this.props.prompts;

        this.renderTextField = function (prompt) {
          return _react2.default.createElement(_text2.default, {
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
          return _react2.default.createElement(_select2.default, {
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
          return _react2.default.createElement(_radios2.default, {
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
          return _react2.default.createElement(
            'div',
            { className: 'survey-question-followups' },
            _react2.default.createElement(SurveyQuestionComponent, { prompts: followUps })
          );
        };
        var count = 0;
        return _react2.default.createElement(
          'div',
          null,
          this.prompts.map(function (prompt) {
            prompt.errors = prompt.errors || [];
            count++;
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

            return _react2.default.createElement(
              'div',
              { key: 'field' + count },
              field,
              prompt.errors.map(function (error) {
                return _react2.default.createElement(
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
  }(_react2.default.Component);

  exports.default = SurveyQuestionComponent;
});