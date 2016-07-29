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
  TextSurveyField: {
    displayName: 'TextSurveyField'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/fields/text.surveyField.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/fields/text.surveyField.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var TextSurveyField = _wrapComponent('TextSurveyField')(function (_Component) {
  _inherits(TextSurveyField, _Component);

  function TextSurveyField(props) {
    _classCallCheck(this, TextSurveyField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextSurveyField).call(this, props));
  }

  _createClass(TextSurveyField, [{
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
        this.options.map(function (option) {
          return _react3.default.createElement('input', { type: 'text',
            key: 'surveytextfield' + option.id,
            name: _this2.name,
            onChange: function onChange(event) {
              var inputValue = event.target.value;
              _this2.onChange(option.id, inputValue);
            }
          });
        })
      );
    }
  }]);

  return TextSurveyField;
}(_react2.Component));

exports.default = TextSurveyField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3cy9zdXJ2ZXkvZmllbGRzL3RleHQuc3VydmV5RmllbGQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSwyQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEZBQVEsS0FBUjtBQUFpQjs7Ozs2QkFFM0I7QUFBQTs7QUFDUCxXQUFLLElBQUwsR0FBWSxLQUFLLEtBQUwsQ0FBVyxJQUF2QjtBQUNBLFdBQUssU0FBTCxHQUFpQixLQUFLLEtBQUwsQ0FBVyxTQUE1QjtBQUNBLFdBQUssT0FBTCxHQUFlLEtBQUssS0FBTCxDQUFXLE9BQTFCO0FBQ0EsV0FBSyxZQUFMLEdBQW9CLEtBQUssS0FBTCxDQUFXLFlBQS9CO0FBQ0EsV0FBSyxRQUFMLEdBQWdCLEtBQUssS0FBTCxDQUFXLFFBQTNCOztBQUVBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVMsZUFBSztBQUFkLFNBREY7QUFFSSxhQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLFVBQUMsTUFBRCxFQUFZO0FBQzdCLGlCQUNFLHlDQUFPLE1BQUssTUFBWjtBQUNFLGlCQUFNLG9CQUFvQixPQUFPLEVBRG5DO0FBRUUsa0JBQU8sT0FBSyxJQUZkO0FBR0Usc0JBQVcsa0JBQUMsS0FBRCxFQUFXO0FBQ3BCLGtCQUFNLGFBQWEsTUFBTSxNQUFOLENBQWEsS0FBaEM7QUFDQSxxQkFBSyxRQUFMLENBQWMsT0FBTyxFQUFyQixFQUF5QixVQUF6QjtBQUNEO0FBTkgsWUFERjtBQVNELFNBVkM7QUFGSixPQURGO0FBZ0JEOzs7Ozs7a0JBRVksZSIsImZpbGUiOiJ0ZXh0LnN1cnZleUZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFRleHRTdXJ2ZXlGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHsgc3VwZXIocHJvcHMpOyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcclxuICAgIHRoaXMubGFiZWxUZXh0ID0gdGhpcy5wcm9wcy5sYWJlbFRleHQ7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XHJcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMucHJvcHMub25DaGFuZ2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWw+eyB0aGlzLmxhYmVsVGV4dCB9PC9sYWJlbD5cclxuICAgICAgICB7IHRoaXMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBrZXk9eyAnc3VydmV5dGV4dGZpZWxkJyArIG9wdGlvbi5pZCB9XHJcbiAgICAgICAgICAgICAgbmFtZT17IHRoaXMubmFtZSB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKG9wdGlvbi5pZCwgaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgIH0pfVxyXG4gICAgIDwvZGl2PlxyXG4gICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUZXh0U3VydmV5RmllbGQ7Il19