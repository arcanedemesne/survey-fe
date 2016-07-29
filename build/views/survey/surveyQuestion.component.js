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

var _text = require('./fields/text.surveyField');

var _text2 = _interopRequireDefault(_text);

var _radios = require('./fields/radios.surveyField');

var _radios2 = _interopRequireDefault(_radios);

var _select = require('./fields/select.surveyField');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SurveyQuestionComponent: {
    displayName: 'SurveyQuestionComponent'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/surveyQuestion.component.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/surveyQuestion.component.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SurveyQuestionComponent = _wrapComponent('SurveyQuestionComponent')(function (_Component) {
  _inherits(SurveyQuestionComponent, _Component);

  function SurveyQuestionComponent(props) {
    _classCallCheck(this, SurveyQuestionComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyQuestionComponent).call(this, props));
  }

  _createClass(SurveyQuestionComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.prompts = this.props.prompts;
      this.keyIncriment = this.props.keyIncriment || 0;

      this.renderTextField = function (prompt) {
        return _react3.default.createElement(_text2.default, {
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
        return _react3.default.createElement(_select2.default, {
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
        return _react3.default.createElement(_radios2.default, {
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
        return _react3.default.createElement(
          'div',
          { className: 'survey-question-followups' },
          _react3.default.createElement(SurveyQuestionComponent, { prompts: followUps })
        );
      };

      return _react3.default.createElement(
        'div',
        { key: 'survey-question-component' + this.keyIncriment },
        this.prompts.map(function (prompt) {
          prompt.errors = prompt.errors || [];

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

          return _react3.default.createElement(
            'div',
            { key: 'prompt-field-' + prompt.id },
            field,
            prompt.errors.map(function (error) {
              return _react3.default.createElement(
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
}(_react2.Component));

exports.default = SurveyQuestionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3cy9zdXJ2ZXkvc3VydmV5UXVlc3Rpb24uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UsbUNBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHNHQUNYLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxXQUFLLE9BQUwsR0FBZSxLQUFLLEtBQUwsQ0FBVyxPQUExQjtBQUNBLFdBQUssWUFBTCxHQUFvQixLQUFLLEtBQUwsQ0FBVyxZQUFYLElBQTJCLENBQS9DOztBQUVBLFdBQUssZUFBTCxHQUF1QixVQUFDLE1BQUQsRUFBWTtBQUNqQyxlQUNFO0FBQ0UsZ0JBQU8sT0FBTyxJQUFQLEdBQWMsT0FBTyxFQUQ5QjtBQUVFLHFCQUFZLE9BQU8sSUFGckI7QUFHRSxtQkFBVSxPQUFPLE9BSG5CO0FBSUUsc0JBQWEsT0FBTyxVQUp0QjtBQUtFLG9CQUFXLGtCQUFDLFFBQUQsRUFBVyxXQUFYLEVBQTJCO0FBQ3BDLGdCQUFJLFNBQVMsT0FBTyxPQUFQLENBQWUsSUFBZixDQUFvQixVQUFDLENBQUQsRUFBTztBQUFFLHFCQUFPLEVBQUUsRUFBRixJQUFRLFFBQWY7QUFBeUIsYUFBdEQsQ0FBYjtBQUNBLG1CQUFPLFVBQVAsR0FBb0IsSUFBcEI7QUFDQSxtQkFBTyxLQUFQLEdBQWUsV0FBZjtBQUNBLG1CQUFLLFdBQUw7QUFDRCxXQVZIO0FBV0Usd0JBQWUsT0FBTztBQVh4QixVQURGO0FBZUQsT0FoQkQ7QUFpQkEsV0FBSyxpQkFBTCxHQUF5QixVQUFDLE1BQUQsRUFBWTtBQUNuQyxlQUNFO0FBQ0UsZ0JBQU8sT0FBTyxJQUFQLEdBQWMsT0FBTyxFQUQ5QjtBQUVFLHFCQUFZLE9BQU8sSUFGckI7QUFHRSxtQkFBVSxPQUFPLE9BSG5CO0FBSUUsc0JBQWEsT0FBTyxVQUp0QjtBQUtFLG9CQUFXLGtCQUFDLFFBQUQsRUFBYztBQUN2QixnQkFBSSxTQUFTLE9BQU8sT0FBUCxDQUFlLElBQWYsQ0FBb0IsVUFBQyxDQUFELEVBQU87QUFBRSxxQkFBTyxFQUFFLEVBQUYsSUFBUSxRQUFmO0FBQXlCLGFBQXRELENBQWI7QUFDQSxtQkFBTyxVQUFQLEdBQW9CLElBQXBCO0FBQ0EsbUJBQUssV0FBTDtBQUNELFdBVEg7QUFVRSx3QkFBZSxPQUFPO0FBVnhCLFVBREY7QUFhRCxPQWREO0FBZUEsV0FBSyxpQkFBTCxHQUF5QixVQUFDLE1BQUQsRUFBWTtBQUNuQyxlQUNFO0FBQ0UsZ0JBQU8sT0FBTyxJQUFQLEdBQWMsT0FBTyxFQUQ5QjtBQUVFLHFCQUFZLE9BQU8sSUFGckI7QUFHRSxtQkFBVSxPQUFPLE9BSG5CO0FBSUUsc0JBQWEsT0FBTyxVQUp0QjtBQUtFLG9CQUFXLGtCQUFDLFFBQUQsRUFBYztBQUN2QixtQkFBTyxPQUFQLENBQWUsT0FBZixDQUF1QixVQUFDLE1BQUQsRUFBWTtBQUFFLHFCQUFPLFVBQVAsR0FBb0IsS0FBcEI7QUFBNEIsYUFBakU7QUFDQSxnQkFBSSxTQUFTLE9BQU8sT0FBUCxDQUFlLElBQWYsQ0FBb0IsVUFBQyxDQUFELEVBQU87QUFBRSxxQkFBTyxFQUFFLEVBQUYsSUFBUSxRQUFmO0FBQXlCLGFBQXRELENBQWI7QUFDQSxtQkFBTyxVQUFQLEdBQW9CLElBQXBCO0FBQ0EsbUJBQUssV0FBTDtBQUNELFdBVkg7QUFXRSx3QkFBZSxPQUFPO0FBWHhCLFVBREY7QUFlRCxPQWhCRDtBQWlCQSxXQUFLLGVBQUwsR0FBdUIsVUFBQyxNQUFELEVBQVk7QUFDakMsWUFBTSxZQUFZLE9BQUssa0JBQUwsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFDQSxlQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsMkJBQWY7QUFDRSx3Q0FBQyx1QkFBRCxJQUF5QixTQUFVLFNBQW5DO0FBREYsU0FERjtBQUtELE9BUEQ7O0FBU0EsYUFBTztBQUFBO0FBQUEsVUFBSyxLQUFNLDhCQUE4QixLQUFLLFlBQTlDO0FBRUgsYUFBSyxPQUFMLENBQWEsR0FBYixDQUFpQixVQUFDLE1BQUQsRUFBWTtBQUM3QixpQkFBTyxNQUFQLEdBQWdCLE9BQU8sTUFBUCxJQUFpQixFQUFqQzs7QUFFQSxjQUFJLGNBQUo7QUFDQSxrQkFBUSxPQUFPLFdBQWY7QUFDRSxpQkFBSyxRQUFMO0FBQ0Usc0JBQVEsT0FBSyxpQkFBTCxDQUF1QixNQUF2QixDQUFSO0FBQ0E7QUFDRixpQkFBSyxRQUFMO0FBQ0Usc0JBQVEsT0FBSyxpQkFBTCxDQUF1QixNQUF2QixDQUFSO0FBQ0E7QUFDRjtBQUNFLHNCQUFRLE9BQUssZUFBTCxDQUFxQixNQUFyQixDQUFSO0FBQ0E7QUFUSjs7QUFZQSxpQkFDRTtBQUFBO0FBQUEsY0FBSyxLQUFNLGtCQUFrQixPQUFPLEVBQXBDO0FBQ0ksaUJBREo7QUFFSSxtQkFBTyxNQUFQLENBQWMsR0FBZCxDQUFrQixVQUFDLEtBQUQsRUFBVztBQUM3QixxQkFBTztBQUFBO0FBQUEsa0JBQUssV0FBVSxPQUFmO0FBQXlCO0FBQXpCLGVBQVA7QUFDRCxhQUZDLENBRko7QUFLSSxtQkFBSyxlQUFMLENBQXFCLE1BQXJCO0FBTEosV0FERjtBQVFELFNBeEJDO0FBRkcsT0FBUDtBQTRCRDs7O3VDQUVrQixNLEVBQVE7QUFDekIsVUFBSSxZQUFZLEVBQWhCOztBQUVBLGFBQU8sT0FBUCxDQUFlLE9BQWYsQ0FBdUIsVUFBQyxNQUFELEVBQVk7QUFDakMsWUFBRyxDQUFDLE9BQU8sVUFBWCxFQUF1QjtBQUFFO0FBQVM7O0FBRWxDLGlEQUNLLFNBREwsc0JBRUssT0FBTyxlQUZaO0FBSUQsT0FQRDs7QUFTQSxhQUFPLFNBQVA7QUFDRDs7Ozs7O2tCQUVZLHVCIiwiZmlsZSI6InN1cnZleVF1ZXN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGV4dFN1cnZleUZpZWxkIGZyb20gJy4vZmllbGRzL3RleHQuc3VydmV5RmllbGQnO1xyXG5pbXBvcnQgUmFkaW9zU3VydmV5RmllbGQgZnJvbSAnLi9maWVsZHMvcmFkaW9zLnN1cnZleUZpZWxkJztcclxuaW1wb3J0IFNlbGVjdFN1cnZleUZpZWxkIGZyb20gJy4vZmllbGRzL3NlbGVjdC5zdXJ2ZXlGaWVsZCc7XHJcblxyXG5jbGFzcyBTdXJ2ZXlRdWVzdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMucHJvbXB0cyA9IHRoaXMucHJvcHMucHJvbXB0cztcclxuICAgIHRoaXMua2V5SW5jcmltZW50ID0gdGhpcy5wcm9wcy5rZXlJbmNyaW1lbnQgfHwgMDtcclxuXHJcbiAgICB0aGlzLnJlbmRlclRleHRGaWVsZCA9IChwcm9tcHQpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8VGV4dFN1cnZleUZpZWxkXHJcbiAgICAgICAgICBuYW1lPXsgcHJvbXB0Lm5hbWUgKyBwcm9tcHQuaWQgfVxyXG4gICAgICAgICAgbGFiZWxUZXh0PXsgcHJvbXB0LnRleHQgfVxyXG4gICAgICAgICAgb3B0aW9ucz17IHByb21wdC5vcHRpb25zIH1cclxuICAgICAgICAgIGlzUmVxdWlyZWQ9eyBwcm9tcHQuaXNSZXF1aXJlZCB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17IChvcHRpb25JZCwgY3VzdG9tVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHByb21wdC5vcHRpb25zLmZpbmQoKG8pID0+IHsgcmV0dXJuIG8uaWQgPT0gb3B0aW9uSWQgfSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gY3VzdG9tVmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9eyBwcm9tcHQudmFsdWUgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZW5kZXJTZWxlY3RGaWVsZCA9IChwcm9tcHQpID0+IHtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxTZWxlY3RTdXJ2ZXlGaWVsZFxyXG4gICAgICAgICAgbmFtZT17IHByb21wdC5uYW1lICsgcHJvbXB0LmlkIH1cclxuICAgICAgICAgIGxhYmVsVGV4dD17IHByb21wdC50ZXh0IH1cclxuICAgICAgICAgIG9wdGlvbnM9eyBwcm9tcHQub3B0aW9ucyB9XHJcbiAgICAgICAgICBpc1JlcXVpcmVkPXsgcHJvbXB0LmlzUmVxdWlyZWQgfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyAob3B0aW9uSWQpID0+IHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHByb21wdC5vcHRpb25zLmZpbmQoKG8pID0+IHsgcmV0dXJuIG8uaWQgPT0gb3B0aW9uSWQgfSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IHByb21wdC52YWx1ZSB9XHJcbiAgICAgIC8+KTtcclxuICAgIH07XHJcbiAgICB0aGlzLnJlbmRlclJhZGlvc0ZpZWxkID0gKHByb21wdCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSYWRpb3NTdXJ2ZXlGaWVsZFxyXG4gICAgICAgICAgbmFtZT17IHByb21wdC5uYW1lICsgcHJvbXB0LmlkIH1cclxuICAgICAgICAgIGxhYmVsVGV4dD17IHByb21wdC50ZXh0IH1cclxuICAgICAgICAgIG9wdGlvbnM9eyBwcm9tcHQub3B0aW9ucyB9XHJcbiAgICAgICAgICBpc1JlcXVpcmVkPXsgcHJvbXB0LmlzUmVxdWlyZWQgfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyAob3B0aW9uSWQpID0+IHtcclxuICAgICAgICAgICAgcHJvbXB0Lm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7IG9wdGlvbi5pc1NlbGVjdGVkID0gZmFsc2U7IH0pO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gcHJvbXB0Lm9wdGlvbnMuZmluZCgobykgPT4geyByZXR1cm4gby5pZCA9PSBvcHRpb25JZCB9KTtcclxuICAgICAgICAgICAgb3B0aW9uLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsgcHJvbXB0LnZhbHVlIH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIHRoaXMucmVuZGVyRm9sbG93dXBzID0gKHByb21wdCkgPT4ge1xyXG4gICAgICBjb25zdCBmb2xsb3dVcHMgPSB0aGlzLmdldEZvbGxvd1VwUHJvbXB0cyhwcm9tcHQpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VydmV5LXF1ZXN0aW9uLWZvbGxvd3Vwc1wiPlxyXG4gICAgICAgICAgPFN1cnZleVF1ZXN0aW9uQ29tcG9uZW50IHByb21wdHM9eyBmb2xsb3dVcHMgfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGtleT17ICdzdXJ2ZXktcXVlc3Rpb24tY29tcG9uZW50JyArIHRoaXMua2V5SW5jcmltZW50IH0+XHJcblxyXG4gICAgICB7IHRoaXMucHJvbXB0cy5tYXAoKHByb21wdCkgPT4ge1xyXG4gICAgICAgIHByb21wdC5lcnJvcnMgPSBwcm9tcHQuZXJyb3JzIHx8IFtdO1xyXG5cclxuICAgICAgICBsZXQgZmllbGQ7XHJcbiAgICAgICAgc3dpdGNoIChwcm9tcHQuZGlzcGxheUhpbnQpIHtcclxuICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgICAgIGZpZWxkID0gdGhpcy5yZW5kZXJTZWxlY3RGaWVsZChwcm9tcHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3JhZGlvcyc6XHJcbiAgICAgICAgICAgIGZpZWxkID0gdGhpcy5yZW5kZXJSYWRpb3NGaWVsZChwcm9tcHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGZpZWxkID0gdGhpcy5yZW5kZXJUZXh0RmllbGQocHJvbXB0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9eyAncHJvbXB0LWZpZWxkLScgKyBwcm9tcHQuaWQgfT5cclxuICAgICAgICAgICAgeyBmaWVsZCB9XHJcbiAgICAgICAgICAgIHsgcHJvbXB0LmVycm9ycy5tYXAoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57IGVycm9yIH08L2Rpdj5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJGb2xsb3d1cHMocHJvbXB0KSB9XHJcbiAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbiAgZ2V0Rm9sbG93VXBQcm9tcHRzKHByb21wdCkge1xyXG4gICAgbGV0IGZvbGxvd3VwcyA9IFtdO1xyXG5cclxuICAgIHByb21wdC5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBpZighb3B0aW9uLmlzU2VsZWN0ZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICBmb2xsb3d1cHMgPSBbXHJcbiAgICAgICAgLi4uZm9sbG93dXBzLFxyXG4gICAgICAgIC4uLm9wdGlvbi5mb2xsb3dVcFByb21wdHNcclxuICAgICAgXTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb2xsb3d1cHM7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN1cnZleVF1ZXN0aW9uQ29tcG9uZW50OyJdfQ==