(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../../app/survey/survey.actions', './surveyQuestion.component'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../../app/survey/survey.actions'), require('./surveyQuestion.component'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.survey, global.surveyQuestion);
        global.surveyEditPage = mod.exports;
    }
})(this, function (exports, _react, _survey, _surveyQuestion) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var SurveyActions = _interopRequireWildcard(_survey);

    var _surveyQuestion2 = _interopRequireDefault(_surveyQuestion);

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

    var SurveyEditPage = function (_React$Component) {
        _inherits(SurveyEditPage, _React$Component);

        function SurveyEditPage(props) {
            _classCallCheck(this, SurveyEditPage);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyEditPage).call(this, props));

            _this.state = {
                survey: props.survey
            };
            return _this;
        }

        _createClass(SurveyEditPage, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.survey) {
                    this.setState({ survey: nextProps.survey });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var survey = this.state.survey;

                if (survey.prompts) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'fieldset',
                            null,
                            _react2.default.createElement(
                                'legend',
                                null,
                                survey.name
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                survey.description
                            ),
                            _react2.default.createElement(_surveyQuestion2.default, { prompts: survey.prompts }),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'button', onClick: this.save.bind(this) },
                                    'Save'
                                )
                            )
                        )
                    );
                } else {
                    return _react2.default.createElement(
                        'div',
                        { className: 'error' },
                        'No prompts found.'
                    );
                }
            }
        }, {
            key: 'save',
            value: function save() {
                var survey = this.state;
                if (!validateSurvey(survey)) {
                    this.setState({ survey: survey });
                    return;
                }

                SurveyActions.saveSurvey(survey);
            }
        }]);

        return SurveyEditPage;
    }(_react2.default.Component);

    exports.default = SurveyEditPage;


    //set default props
    SurveyEditPage.defaultProps = {
        survey: {}
    };

    function validateSurvey(survey) {

        return validatePrompts(survey.prompts);

        function validatePrompts(prompts) {
            var isValidPrompts = true;

            prompts.forEach(function (prompt) {
                prompt.errors = [];
                if (!prompt.isRequired) {
                    return;
                }

                var hasSelectedOption = false;
                prompt.options.forEach(function (option) {
                    if (option.isSelected == true) {
                        hasSelectedOption = true;
                        validatePrompts(option.followUpPrompts);
                    }
                });
                if (hasSelectedOption) {
                    return;
                }

                prompt.errors = ['This question is required and must be answered.'];
                isValidPrompts = false;
            });

            return isValidPrompts;
        }
    }
});