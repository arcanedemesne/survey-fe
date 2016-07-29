'use strict';

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
  SelectSurveyField: {
    displayName: 'SelectSurveyField'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/fields/select.surveyField.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/fields/select.surveyField.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SelectSurveyField = _wrapComponent('SelectSurveyField')(function (_Component) {
  _inherits(SelectSurveyField, _Component);

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

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'label',
          null,
          this.labelText
        ),
        _react3.default.createElement(
          'select',
          {
            name: this.name,
            onChange: function onChange(event) {
              var optionId = event.target.value;
              _this2.onChange(optionId);
            } },
          _react3.default.createElement(
            'option',
            { value: '' },
            'Select Choice'
          ),
          this.options.map(function (option) {
            return _react3.default.createElement(
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
}(_react2.Component));

exports.default = SelectSurveyField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3cy9zdXJ2ZXkvZmllbGRzL3NlbGVjdC5zdXJ2ZXlGaWVsZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLDZCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnR0FBUSxLQUFSO0FBQWlCOzs7OzZCQUUzQjtBQUFBOztBQUNQLFdBQUssSUFBTCxHQUFZLEtBQUssS0FBTCxDQUFXLElBQXZCO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLEtBQUssS0FBTCxDQUFXLFNBQTVCO0FBQ0EsV0FBSyxPQUFMLEdBQWUsS0FBSyxLQUFMLENBQVcsT0FBMUI7QUFDQSxXQUFLLFlBQUwsR0FBb0IsS0FBSyxLQUFMLENBQVcsWUFBL0I7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxLQUFMLENBQVcsUUFBM0I7O0FBRUEsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBUyxlQUFLO0FBQWQsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLGtCQUFPLEtBQUssSUFEZDtBQUVFLHNCQUFXLGtCQUFDLEtBQUQsRUFBVztBQUNwQixrQkFBTSxXQUFXLE1BQU0sTUFBTixDQUFhLEtBQTlCO0FBQ0EscUJBQUssUUFBTCxDQUFjLFFBQWQ7QUFDRCxhQUxIO0FBTUU7QUFBQTtBQUFBLGNBQVEsT0FBTSxFQUFkO0FBQUE7QUFBQSxXQU5GO0FBT0ksZUFBSyxPQUFMLENBQWEsR0FBYixDQUFpQixVQUFDLE1BQUQsRUFBWTtBQUM3QixtQkFBTztBQUFBO0FBQUEsZ0JBQVEsS0FBTSxpQkFBZ0IsT0FBTyxFQUFyQyxFQUEwQyxPQUFRLE9BQU8sRUFBekQ7QUFBZ0UscUJBQU87QUFBdkUsYUFBUDtBQUNELFdBRkM7QUFQSjtBQUZGLE9BREY7QUFnQkQ7Ozs7OztrQkFFWSxpQiIsImZpbGUiOiJzZWxlY3Quc3VydmV5RmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU2VsZWN0U3VydmV5RmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7IHN1cGVyKHByb3BzKTsgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XHJcbiAgICB0aGlzLmxhYmVsVGV4dCA9IHRoaXMucHJvcHMubGFiZWxUZXh0O1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zO1xyXG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLnByb3BzLm9uQ2hhbmdlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsPnsgdGhpcy5sYWJlbFRleHQgfTwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgbmFtZT17IHRoaXMubmFtZSB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25JZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShvcHRpb25JZCk7XHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgQ2hvaWNlPC9vcHRpb24+XHJcbiAgICAgICAgICB7IHRoaXMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9eyAnc2VsZWN0b3B0aW9uJysgb3B0aW9uLmlkIH0gdmFsdWU9eyBvcHRpb24uaWQgfT57IG9wdGlvbi5kaXNwbGF5TmFtZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RTdXJ2ZXlGaWVsZDsiXX0=