(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../../app/survey/survey.api', './surveyAnswers.component', '../../app/survey/survey.store'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../../app/survey/survey.api'), require('./surveyAnswers.component'), require('../../app/survey/survey.store'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.survey, global.surveyAnswers, global.survey);
    global.surveyDetailPage = mod.exports;
  }
})(this, function (exports, _react, _survey, _surveyAnswers, _survey3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _survey2 = _interopRequireDefault(_survey);

  var _surveyAnswers2 = _interopRequireDefault(_surveyAnswers);

  var SurveyStore = _interopRequireWildcard(_survey3);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

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

  var SurveyDetailPage = function (_React$Component) {
    _inherits(SurveyDetailPage, _React$Component);

    function SurveyDetailPage() {
      _classCallCheck(this, SurveyDetailPage);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyDetailPage).call(this));

      _this.state = {
        prompts: [],
        errors: []
      };

      return _this;
    }

    _createClass(SurveyDetailPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        //Load Initial Data via AJAX
        _survey2.default.viewSurvey('Preliminary Questions').then(function (survey) {
          console.log(survey);
          _this2.setState(survey);
        });
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        //Invoked once
        SurveyStore.addChangeListener(this.onChange);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        //Clean up when this component is unmounted
        //When fetching data asynchronously, use componentWillUnmount
        // to cancel any outstanding requests before the component is unmounted.
        SurveyStore.removeChangeListener(this.onChange);
      }
    }, {
      key: 'onChange',
      value: function onChange() {
        this.setState(SurveyStore.getSurvey());
      }
    }, {
      key: 'render',
      value: function render() {
        var page = this.state;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'legend',
              null,
              page.name
            ),
            _react2.default.createElement(
              'p',
              null,
              page.description
            ),
            _react2.default.createElement(_surveyAnswers2.default, { prompts: page.prompts })
          )
        );
      }
    }]);

    return SurveyDetailPage;
  }(_react2.default.Component);

  exports.default = SurveyDetailPage;
});