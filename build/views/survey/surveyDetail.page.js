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

var _survey = require('../../app/survey/survey.api');

var _survey2 = _interopRequireDefault(_survey);

var _surveyAnswers = require('./surveyAnswers.component');

var _surveyAnswers2 = _interopRequireDefault(_surveyAnswers);

var _survey3 = require('../../app/survey/survey.store');

var SurveyStore = _interopRequireWildcard(_survey3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SurveyDetailPage: {
    displayName: 'SurveyDetailPage'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/surveyDetail.page.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/surveyDetail.page.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SurveyDetailPage = _wrapComponent('SurveyDetailPage')(function (_Component) {
  _inherits(SurveyDetailPage, _Component);

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

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'fieldset',
          null,
          _react3.default.createElement(
            'legend',
            null,
            page.name
          ),
          _react3.default.createElement(
            'p',
            null,
            page.description
          ),
          _react3.default.createElement(_surveyAnswers2.default, { prompts: page.prompts })
        )
      );
    }
  }]);

  return SurveyDetailPage;
}(_react2.Component));

exports.default = SurveyDetailPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3cy9zdXJ2ZXkvc3VydmV5RGV0YWlsLnBhZ2UuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWEsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWCw4QkFBYztBQUFBOztBQUFBOztBQUdaLFVBQUssS0FBTCxHQUFhO0FBQ1gsZUFBUyxFQURFO0FBRVgsY0FBUTtBQUZHLEtBQWI7O0FBSFk7QUFRYjs7Ozt3Q0FDbUI7QUFBQTs7QUFDbEI7QUFDQSx1QkFBVSxVQUFWLENBQXFCLHVCQUFyQixFQUE4QyxJQUE5QyxDQUFtRCxVQUFDLE1BQUQsRUFBWTtBQUM3RCxnQkFBUSxHQUFSLENBQVksTUFBWjtBQUNBLGVBQUssUUFBTCxDQUFjLE1BQWQ7QUFDRCxPQUhEO0FBSUQ7Ozt5Q0FFb0I7QUFDbkI7QUFDQSxrQkFBWSxpQkFBWixDQUE4QixLQUFLLFFBQW5DO0FBQ0Q7OzsyQ0FHc0I7QUFDckI7QUFDQTtBQUNBO0FBQ0Esa0JBQVksb0JBQVosQ0FBaUMsS0FBSyxRQUF0QztBQUVEOzs7K0JBRVU7QUFDVCxXQUFLLFFBQUwsQ0FBYyxZQUFZLFNBQVosRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJLE9BQU8sS0FBSyxLQUFoQjs7QUFFQSxhQUNJO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFVLGlCQUFLO0FBQWYsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLLGlCQUFLO0FBQVYsV0FGRjtBQUlFLG1FQUF3QixTQUFVLEtBQUssT0FBdkM7QUFKRjtBQURGLE9BREo7QUFXRDs7Ozs7O2tCQUVZLGdCIiwiZmlsZSI6InN1cnZleURldGFpbC5wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdXJ2ZXlBcGkgZnJvbSAnLi4vLi4vYXBwL3N1cnZleS9zdXJ2ZXkuYXBpJztcclxuaW1wb3J0IFN1cnZleUFuc3dlcnNDb21wb25lbnQgZnJvbSAnLi9zdXJ2ZXlBbnN3ZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCAgKiBhcyBTdXJ2ZXlTdG9yZSBmcm9tICcuLi8uLi9hcHAvc3VydmV5L3N1cnZleS5zdG9yZSc7XHJcblxyXG5cclxuY2xhc3MgU3VydmV5RGV0YWlsUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHByb21wdHM6IFtdLFxyXG4gICAgICBlcnJvcnM6IFtdXHJcbiAgICB9O1xyXG5cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvL0xvYWQgSW5pdGlhbCBEYXRhIHZpYSBBSkFYXHJcbiAgICBTdXJ2ZXlBcGkudmlld1N1cnZleSgnUHJlbGltaW5hcnkgUXVlc3Rpb25zJykudGhlbigoc3VydmV5KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN1cnZleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3VydmV5KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgLy9JbnZva2VkIG9uY2VcclxuICAgIFN1cnZleVN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMub25DaGFuZ2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy9DbGVhbiB1cCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHVubW91bnRlZFxyXG4gICAgLy9XaGVuIGZldGNoaW5nIGRhdGEgYXN5bmNocm9ub3VzbHksIHVzZSBjb21wb25lbnRXaWxsVW5tb3VudFxyXG4gICAgLy8gdG8gY2FuY2VsIGFueSBvdXRzdGFuZGluZyByZXF1ZXN0cyBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcbiAgICBTdXJ2ZXlTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoU3VydmV5U3RvcmUuZ2V0U3VydmV5KCkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHBhZ2UgPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGxlZ2VuZD57IHBhZ2UubmFtZSB9PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgIDxwPnsgcGFnZS5kZXNjcmlwdGlvbiB9PC9wPlxyXG5cclxuICAgICAgICAgICAgPFN1cnZleUFuc3dlcnNDb21wb25lbnQgcHJvbXB0cz17IHBhZ2UucHJvbXB0cyB9IC8+XHJcblxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN1cnZleURldGFpbFBhZ2U7Il19