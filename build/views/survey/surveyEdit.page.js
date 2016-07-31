(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../../app/survey/survey.actions', './surveyQuestion.component', '../../app/survey/survey.store', '../../app/survey/survey.api'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../../app/survey/survey.actions'), require('./surveyQuestion.component'), require('../../app/survey/survey.store'), require('../../app/survey/survey.api'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.survey, global.surveyQuestion, global.survey, global.survey);
        global.surveyEditPage = mod.exports;
    }
})(this, function (exports, _react, _survey, _surveyQuestion, _survey2, _survey3) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var SurveyActions = _interopRequireWildcard(_survey);

    var _surveyQuestion2 = _interopRequireDefault(_surveyQuestion);

    var SurveyStore = _interopRequireWildcard(_survey2);

    var _survey4 = _interopRequireDefault(_survey3);

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

            _this.state = { prompts: props.prompts };
            return _this;
        }

        _createClass(SurveyEditPage, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                //Load Initial Data via AJAX
                _survey4.default.viewSurvey('Preliminary Questions').then(function (survey) {
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
                        _react2.default.createElement(_surveyQuestion2.default, { prompts: page.prompts }),
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
            }
        }, {
            key: 'save',
            value: function save() {
                var survey = this.state;
                if (!validateSurvey(survey)) {
                    this.setState(survey);
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
        prompts: []
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