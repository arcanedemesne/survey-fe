(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../../app/survey/survey.api', './surveyDetail.page', './surveyEdit.page', '../../assets/styles/app.css'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../../app/survey/survey.api'), require('./surveyDetail.page'), require('./surveyEdit.page'), require('../../assets/styles/app.css'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.survey, global.surveyDetail, global.surveyEdit, global.app);
        global.surveyMainView = mod.exports;
    }
})(this, function (exports, _react, _survey, _surveyDetail, _surveyEdit) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _survey2 = _interopRequireDefault(_survey);

    var _surveyDetail2 = _interopRequireDefault(_surveyDetail);

    var _surveyEdit2 = _interopRequireDefault(_surveyEdit);

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

    var SurveyMode = {
        Edit: 'edit',
        View: 'view'
    };

    var SurveyMainView = function (_React$Component) {
        _inherits(SurveyMainView, _React$Component);

        function SurveyMainView(props) {
            _classCallCheck(this, SurveyMainView);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyMainView).call(this, props));

            _this.state = {
                apiEndpoint: props.apiEndpoint,
                mode: props.mode,
                templateName: props.templateName,
                survey: {}
            };

            _this.saveSurvey = _this.saveSurvey.bind(_this);
            return _this;
        }

        _createClass(SurveyMainView, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                var _this2 = this;

                _survey2.default.viewSurvey(this.state.templateName, this.state.apiEndpoint).then(function (survey) {
                    _this2.setState({ survey: survey });
                });
            }
        }, {
            key: 'saveSurvey',
            value: function saveSurvey() {
                var _this3 = this;

                var survey = this.state.survey;

                console.log(survey);
                if (!validateSurvey(survey)) {
                    this.setState({ survey: survey });
                    return;
                }

                _survey2.default.saveSurvey(survey).then(function (response) {
                    _this3.setState({ mode: SurveyMode.View });
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _state = this.state;
                var mode = _state.mode;
                var survey = _state.survey;

                if (survey) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        mode == SurveyMode.Edit && _react2.default.createElement(_surveyEdit2.default, { survey: survey, saveSurvey: this.saveSurvey }),
                        mode == SurveyMode.View && _react2.default.createElement(_surveyDetail2.default, { survey: survey })
                    );
                } else {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h3',
                            null,
                            'External Survey Module'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'error' },
                            'Invalid Template Name'
                        )
                    );
                }
            }
        }]);

        return SurveyMainView;
    }(_react2.default.Component);

    exports.default = SurveyMainView;
});