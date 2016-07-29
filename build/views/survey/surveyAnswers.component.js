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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SurveyAnswersComponent: {
    displayName: 'SurveyAnswersComponent'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/surveyAnswers.component.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/surveyAnswers.component.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SurveyAnswersComponent = _wrapComponent('SurveyAnswersComponent')(function (_Component) {
  _inherits(SurveyAnswersComponent, _Component);

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

      return _react3.default.createElement(
        'div',
        { key: 'survey-question-component' + this.keyIncriment },
        this.prompts.map(function (prompt) {
          return _react3.default.createElement(
            'div',
            { key: 'prompt-field-' + prompt.id },
            _react3.default.createElement(
              'label',
              null,
              prompt.text
            ),
            prompt.options.filter(function (option) {
              return option.isSelected;
            }).map(function (option) {
              return _react3.default.createElement(
                'div',
                { key: 'answer' + option.id },
                option.value || option.text
              );
            }),
            _this2.getFollowUpPrompts(prompt).map(function (followUpPrompts, i) {
              return _react3.default.createElement(
                'div',
                { key: 'followups' + i, className: 'survey-answers-followups' },
                _react3.default.createElement(SurveyAnswersComponent, { prompts: followUpPrompts, keyIncriment: i + 1 })
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
}(_react2.Component));

exports.default = SurveyAnswersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3cy9zdXJ2ZXkvc3VydmV5QW5zd2Vycy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUUsa0NBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHFHQUNYLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxXQUFLLE9BQUwsR0FBZSxLQUFLLEtBQUwsQ0FBVyxPQUExQjtBQUNBLFdBQUssWUFBTCxHQUFvQixLQUFLLEtBQUwsQ0FBVyxZQUFYLElBQTJCLENBQS9DOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssS0FBTSw4QkFBOEIsS0FBSyxZQUE5QztBQUNFLGFBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsVUFBQyxNQUFELEVBQVk7QUFDN0IsaUJBQ0U7QUFBQTtBQUFBLGNBQUssS0FBTSxrQkFBa0IsT0FBTyxFQUFwQztBQUNFO0FBQUE7QUFBQTtBQUFTLHFCQUFPO0FBQWhCLGFBREY7QUFFSSxtQkFBTyxPQUFQLENBQ0csTUFESCxDQUNVLFVBQUMsTUFBRCxFQUFZO0FBQUUscUJBQU8sT0FBTyxVQUFkO0FBQTJCLGFBRG5ELEVBRUcsR0FGSCxDQUVPLFVBQUMsTUFBRCxFQUFZO0FBQ2YscUJBQU87QUFBQTtBQUFBLGtCQUFLLEtBQU0sV0FBVyxPQUFPLEVBQTdCO0FBQW9DLHVCQUFPLEtBQVAsSUFBZ0IsT0FBTztBQUEzRCxlQUFQO0FBQ0QsYUFKSCxDQUZKO0FBUUksbUJBQUssa0JBQUwsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEMsQ0FBb0MsVUFBQyxlQUFELEVBQWtCLENBQWxCLEVBQXdCO0FBQzVELHFCQUNFO0FBQUE7QUFBQSxrQkFBSyxLQUFNLGNBQWMsQ0FBekIsRUFBNkIsV0FBVSwwQkFBdkM7QUFDRSw4Q0FBQyxzQkFBRCxJQUF3QixTQUFVLGVBQWxDLEVBQW9ELGNBQWUsSUFBSSxDQUF2RTtBQURGLGVBREY7QUFJRCxhQUxDO0FBUkosV0FERjtBQWdCRCxTQWpCQztBQURGLE9BREY7QUFzQkQ7Ozt1Q0FFa0IsTSxFQUFRO0FBQ3pCLFVBQUksWUFBWSxFQUFoQjs7QUFFQSxhQUFPLE9BQVAsQ0FBZSxPQUFmLENBQXVCLFVBQUMsTUFBRCxFQUFZO0FBQ2pDLFlBQUcsQ0FBQyxPQUFPLFVBQVgsRUFBdUI7QUFBRTtBQUFTOztBQUVsQyxrQkFBVSxJQUFWLENBQWUsT0FBTyxlQUF0QjtBQUNELE9BSkQ7O0FBTUEsYUFBTyxTQUFQO0FBQ0Q7Ozs7OztrQkFFWSxzQiIsImZpbGUiOiJzdXJ2ZXlBbnN3ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIFN1cnZleUFuc3dlcnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnByb21wdHMgPSB0aGlzLnByb3BzLnByb21wdHM7XHJcbiAgICB0aGlzLmtleUluY3JpbWVudCA9IHRoaXMucHJvcHMua2V5SW5jcmltZW50IHx8IDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9eyAnc3VydmV5LXF1ZXN0aW9uLWNvbXBvbmVudCcgKyB0aGlzLmtleUluY3JpbWVudCB9PlxyXG4gICAgICB7IHRoaXMucHJvbXB0cy5tYXAoKHByb21wdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17ICdwcm9tcHQtZmllbGQtJyArIHByb21wdC5pZCB9PlxyXG4gICAgICAgICAgICA8bGFiZWw+eyBwcm9tcHQudGV4dCB9PC9sYWJlbD5cclxuICAgICAgICAgICAgeyBwcm9tcHQub3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiB7IHJldHVybiBvcHRpb24uaXNTZWxlY3RlZDsgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9eyAnYW5zd2VyJyArIG9wdGlvbi5pZCB9Pnsgb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi50ZXh0IH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyB0aGlzLmdldEZvbGxvd1VwUHJvbXB0cyhwcm9tcHQpLm1hcCgoZm9sbG93VXBQcm9tcHRzLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsgJ2ZvbGxvd3VwcycgKyBpIH0gY2xhc3NOYW1lPVwic3VydmV5LWFuc3dlcnMtZm9sbG93dXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdXJ2ZXlBbnN3ZXJzQ29tcG9uZW50IHByb21wdHM9eyBmb2xsb3dVcFByb21wdHMgfSBrZXlJbmNyaW1lbnQ9eyBpICsgMSB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldEZvbGxvd1VwUHJvbXB0cyhwcm9tcHQpIHtcclxuICAgIGxldCBmb2xsb3d1cHMgPSBbXTtcclxuXHJcbiAgICBwcm9tcHQub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgaWYoIW9wdGlvbi5pc1NlbGVjdGVkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgZm9sbG93dXBzLnB1c2gob3B0aW9uLmZvbGxvd1VwUHJvbXB0cyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9sbG93dXBzO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdXJ2ZXlBbnN3ZXJzQ29tcG9uZW50OyJdfQ==