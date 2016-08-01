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
    global.selectSurveyField = mod.exports;
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

  var SelectSurveyField = function (_React$Component) {
    _inherits(SelectSurveyField, _React$Component);

    function SelectSurveyField(props) {
      _classCallCheck(this, SelectSurveyField);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectSurveyField).call(this, props));
    }

    _createClass(SelectSurveyField, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        this.name = this.props.name;
        this.labelText = this.props.labelText;
        this.options = this.props.options;
        this.defaultValue = this.props.defaultValue;
        this.onChange = this.props.onChange;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: this.name },
            this.labelText
          ),
          _react2.default.createElement(
            'select',
            {
              name: this.name,
              onChange: function onChange(event) {
                var optionId = event.target.value;
                _this2.onChange(optionId);
              } },
            _react2.default.createElement(
              'option',
              { value: '' },
              'Select Choice'
            ),
            this.options.map(function (option) {
              return _react2.default.createElement(
                'option',
                { key: 'selectoption' + option.id, value: option.id },
                option.displayName
              );
            })
          )
        );
      }
    }]);

    return SelectSurveyField;
  }(_react2.default.Component);

  exports.default = SelectSurveyField;
});