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

var _survey = require('../../app/survey/survey.actions');

var SurveyActions = _interopRequireWildcard(_survey);

var _surveyQuestion = require('./surveyQuestion.component');

var _surveyQuestion2 = _interopRequireDefault(_surveyQuestion);

var _survey2 = require('../../app/survey/survey.store');

var SurveyStore = _interopRequireWildcard(_survey2);

var _survey3 = require('../../app/survey/survey.api');

var _survey4 = _interopRequireDefault(_survey3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SurveyEditPage: {
    displayName: 'SurveyEditPage'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/surveyEdit.page.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/surveyEdit.page.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SurveyEditPage = _wrapComponent('SurveyEditPage')(function (_Component) {
  _inherits(SurveyEditPage, _Component);

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
          _react3.default.createElement(_surveyQuestion2.default, { prompts: page.prompts }),
          _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
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
}(_react2.Component));

exports.default = SurveyEditPage;
//set default props

SurveyEditPage.propTypes = { prompts: _react3.default.PropTypes.array };
SurveyEditPage.defaultProps = { prompts: []

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3cy9zdXJ2ZXkvc3VydmV5RWRpdC5wYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0lBQWEsYTs7QUFDYjs7OztBQUNBOztJQUFhLFc7O0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSwwQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0dBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBQyxTQUFRLE1BQU0sT0FBZixFQUFiO0FBRmlCO0FBR2xCOzs7O3dDQUVtQjtBQUFBOztBQUNsQjtBQUNBLHVCQUFVLFVBQVYsQ0FBcUIsdUJBQXJCLEVBQThDLElBQTlDLENBQW1ELFVBQUMsTUFBRCxFQUFZO0FBQzdELGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsZUFBSyxRQUFMLENBQWMsTUFBZDtBQUNELE9BSEQ7QUFJRDs7O3lDQUVvQjtBQUNuQjtBQUNBLGtCQUFZLGlCQUFaLENBQThCLEtBQUssUUFBbkM7QUFDSDs7OzJDQUV3QjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxrQkFBWSxvQkFBWixDQUFpQyxLQUFLLFFBQXRDO0FBRUQ7OzsrQkFFVTtBQUNULFdBQUssUUFBTCxDQUFjLFlBQVksU0FBWixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUksT0FBTyxLQUFLLEtBQWhCOztBQUVBLGFBQ0k7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVUsaUJBQUs7QUFBZixXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssaUJBQUs7QUFBVixXQUZGO0FBSUUsb0VBQXlCLFNBQVUsS0FBSyxPQUF4QyxHQUpGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLFFBQWhDLEVBQXlDLFNBQVUsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLElBQWYsQ0FBbkQ7QUFBQTtBQUFBO0FBREY7QUFORjtBQURGLE9BREo7QUFjRDs7OzJCQUVNO0FBQ0wsVUFBSSxTQUFTLEtBQUssS0FBbEI7QUFDQSxVQUFHLENBQUMsZUFBZSxNQUFmLENBQUosRUFBNEI7QUFDMUIsYUFBSyxRQUFMLENBQWMsTUFBZDtBQUNBO0FBQ0Q7O0FBRUQsb0JBQWMsVUFBZCxDQUF5QixNQUF6QjtBQUNEOzs7Ozs7O0FBRUg7O0FBQ0EsZUFBZSxTQUFmLEdBQTJCLEVBQUUsU0FBUyxnQkFBTSxTQUFOLENBQWdCLEtBQTNCLEVBQTNCO0FBQ0EsZUFBZSxZQUFmLEdBQThCLEVBQUUsU0FBUzs7QUFBWCxDQUE5Qjs7QUFJQSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0M7O0FBRTlCLFNBQU8sZ0JBQWdCLE9BQU8sT0FBdkIsQ0FBUDs7QUFFQSxXQUFTLGVBQVQsQ0FBeUIsT0FBekIsRUFBa0M7QUFDaEMsUUFBSSxpQkFBaUIsSUFBckI7O0FBRUEsWUFBUSxPQUFSLENBQWdCLFVBQUMsTUFBRCxFQUFZO0FBQzFCLGFBQU8sTUFBUCxHQUFnQixFQUFoQjtBQUNBLFVBQUcsQ0FBQyxPQUFPLFVBQVgsRUFBdUI7QUFBRTtBQUFTOztBQUVsQyxVQUFJLG9CQUFvQixLQUF4QjtBQUNBLGFBQU8sT0FBUCxDQUFlLE9BQWYsQ0FBdUIsVUFBQyxNQUFELEVBQVk7QUFDakMsWUFBRyxPQUFPLFVBQVAsSUFBcUIsSUFBeEIsRUFBOEI7QUFDNUIsOEJBQW9CLElBQXBCO0FBQ0EsMEJBQWdCLE9BQU8sZUFBdkI7QUFDRDtBQUNGLE9BTEQ7QUFNQSxVQUFHLGlCQUFILEVBQXNCO0FBQUU7QUFBUzs7QUFFakMsYUFBTyxNQUFQLEdBQWdCLENBQUUsaURBQUYsQ0FBaEI7QUFDQSx1QkFBaUIsS0FBakI7QUFDRCxLQWZEOztBQWlCQSxXQUFPLGNBQVA7QUFDRDtBQUNGIiwiZmlsZSI6InN1cnZleUVkaXQucGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgIFN1cnZleUFjdGlvbnMgZnJvbSAnLi4vLi4vYXBwL3N1cnZleS9zdXJ2ZXkuYWN0aW9ucyc7XHJcbmltcG9ydCBTdXJ2ZXlRdWVzdGlvbkNvbXBvbmVudCBmcm9tICcuL3N1cnZleVF1ZXN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCAgKiBhcyBTdXJ2ZXlTdG9yZSBmcm9tICcuLi8uLi9hcHAvc3VydmV5L3N1cnZleS5zdG9yZSc7XHJcbmltcG9ydCBTdXJ2ZXlBcGkgIGZyb20gJy4uLy4uL2FwcC9zdXJ2ZXkvc3VydmV5LmFwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXJ2ZXlFZGl0UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7cHJvbXB0czpwcm9wcy5wcm9tcHRzfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy9Mb2FkIEluaXRpYWwgRGF0YSB2aWEgQUpBWFxyXG4gICAgU3VydmV5QXBpLnZpZXdTdXJ2ZXkoJ1ByZWxpbWluYXJ5IFF1ZXN0aW9ucycpLnRoZW4oKHN1cnZleSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhzdXJ2ZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHN1cnZleSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIC8vSW52b2tlZCBvbmNlXHJcbiAgICBTdXJ2ZXlTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlKTtcclxufVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIC8vQ2xlYW4gdXAgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcclxuICAgIC8vV2hlbiBmZXRjaGluZyBkYXRhIGFzeW5jaHJvbm91c2x5LCB1c2UgY29tcG9uZW50V2lsbFVubW91bnRcclxuICAgIC8vIHRvIGNhbmNlbCBhbnkgb3V0c3RhbmRpbmcgcmVxdWVzdHMgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG4gICAgU3VydmV5U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5vbkNoYW5nZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFN1cnZleVN0b3JlLmdldFN1cnZleSgpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBwYWdlID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxsZWdlbmQ+eyBwYWdlLm5hbWUgfTwvbGVnZW5kPlxyXG4gICAgICAgICAgICA8cD57IHBhZ2UuZGVzY3JpcHRpb24gfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxTdXJ2ZXlRdWVzdGlvbkNvbXBvbmVudCBwcm9tcHRzPXsgcGFnZS5wcm9tcHRzIH0gLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17IHRoaXMuc2F2ZS5iaW5kKHRoaXMpIH0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGxldCBzdXJ2ZXkgPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYoIXZhbGlkYXRlU3VydmV5KHN1cnZleSkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShzdXJ2ZXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5QWN0aW9ucy5zYXZlU3VydmV5KHN1cnZleSk7XHJcbiAgfVxyXG59XHJcbi8vc2V0IGRlZmF1bHQgcHJvcHNcclxuU3VydmV5RWRpdFBhZ2UucHJvcFR5cGVzID0geyBwcm9tcHRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkgfTtcclxuU3VydmV5RWRpdFBhZ2UuZGVmYXVsdFByb3BzID0geyBwcm9tcHRzOiBbXVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlU3VydmV5KHN1cnZleSkge1xyXG5cclxuICByZXR1cm4gdmFsaWRhdGVQcm9tcHRzKHN1cnZleS5wcm9tcHRzKTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVQcm9tcHRzKHByb21wdHMpIHtcclxuICAgIGxldCBpc1ZhbGlkUHJvbXB0cyA9IHRydWU7XHJcblxyXG4gICAgcHJvbXB0cy5mb3JFYWNoKChwcm9tcHQpID0+IHtcclxuICAgICAgcHJvbXB0LmVycm9ycyA9IFtdO1xyXG4gICAgICBpZighcHJvbXB0LmlzUmVxdWlyZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICBsZXQgaGFzU2VsZWN0ZWRPcHRpb24gPSBmYWxzZTtcclxuICAgICAgcHJvbXB0Lm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYob3B0aW9uLmlzU2VsZWN0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaGFzU2VsZWN0ZWRPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgdmFsaWRhdGVQcm9tcHRzKG9wdGlvbi5mb2xsb3dVcFByb21wdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmKGhhc1NlbGVjdGVkT3B0aW9uKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgcHJvbXB0LmVycm9ycyA9IFsgJ1RoaXMgcXVlc3Rpb24gaXMgcmVxdWlyZWQgYW5kIG11c3QgYmUgYW5zd2VyZWQuJyBdO1xyXG4gICAgICBpc1ZhbGlkUHJvbXB0cyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWRQcm9tcHRzO1xyXG4gIH1cclxufVxyXG4iXX0=