(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-radio-group'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-radio-group'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactRadioGroup);
    global.radiosSurveyField = mod.exports;
  }
})(this, function (exports, _react, _reactRadioGroup) {
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

  var RadiosSurveyField = function (_React$Component) {
    _inherits(RadiosSurveyField, _React$Component);

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

        return (
          //TODO: figure out why react-radio-group isn't working in Symphony
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: this.name },
              this.labelText
            ),
            _react2.default.createElement(
              _reactRadioGroup.RadioGroup,
              {
                name: this.name,
                selectedValue: this.defaultValue,
                onChange: this.onChange },
              this.options.map(function (option) {
                return _react2.default.createElement(
                  'span',
                  { key: 'radiooption' + option.id },
                  _react2.default.createElement(_reactRadioGroup.Radio, { value: option.id }),
                  ' ',
                  option.displayName
                );
              })
            )
          )
        );
      }
    }]);

    return RadiosSurveyField;
  }(_react2.default.Component);

  exports.default = RadiosSurveyField;
});