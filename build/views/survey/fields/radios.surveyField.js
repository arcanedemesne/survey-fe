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

var _reactRadioGroup = require('react-radio-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  RadiosSurveyField: {
    displayName: 'RadiosSurveyField'
  }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/views/survey/fields/radios.surveyField.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/views/survey/fields/radios.surveyField.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var RadiosSurveyField = _wrapComponent('RadiosSurveyField')(function (_Component) {
  _inherits(RadiosSurveyField, _Component);

  function RadiosSurveyField(props) {
    _classCallCheck(this, RadiosSurveyField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RadiosSurveyField).call(this, props));
  }

  _createClass(RadiosSurveyField, [{
    key: 'render',
    value: function render() {
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
          _reactRadioGroup.RadioGroup,
          {
            name: this.name + '',
            selectedValue: this.defaultValue,
            onChange: this.onChange },
          this.options.map(function (option) {
            return _react3.default.createElement(
              'span',
              { key: 'radiooption' + option.id },
              _react3.default.createElement(_reactRadioGroup.Radio, { value: option.id }),
              ' ',
              option.displayName
            );
          })
        )
      );
    }
  }]);

  return RadiosSurveyField;
}(_react2.Component));

exports.default = RadiosSurveyField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3cy9zdXJ2ZXkvZmllbGRzL3JhZGlvcy5zdXJ2ZXlGaWVsZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLDZCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnR0FBUSxLQUFSO0FBQWlCOzs7OzZCQUUzQjtBQUNQLFdBQUssSUFBTCxHQUFZLEtBQUssS0FBTCxDQUFXLElBQXZCO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLEtBQUssS0FBTCxDQUFXLFNBQTVCO0FBQ0EsV0FBSyxPQUFMLEdBQWUsS0FBSyxLQUFMLENBQVcsT0FBMUI7QUFDQSxXQUFLLFlBQUwsR0FBb0IsS0FBSyxLQUFMLENBQVcsWUFBL0I7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxLQUFMLENBQVcsUUFBM0I7O0FBRUEsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBUyxlQUFLO0FBQWQsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLGtCQUFPLEtBQUssSUFBTCxHQUFZLEVBRHJCO0FBRUUsMkJBQWdCLEtBQUssWUFGdkI7QUFHRSxzQkFBVyxLQUFLLFFBSGxCO0FBSUksZUFBSyxPQUFMLENBQWEsR0FBYixDQUFpQixVQUFDLE1BQUQsRUFBWTtBQUM3QixtQkFDRTtBQUFBO0FBQUEsZ0JBQU0sS0FBTSxnQkFBZ0IsT0FBTyxFQUFuQztBQUF3QyxzRUFBTyxPQUFRLE9BQU8sRUFBdEIsR0FBeEM7QUFBQTtBQUF3RSxxQkFBTztBQUEvRSxhQURGO0FBR0QsV0FKQztBQUpKO0FBRkYsT0FERjtBQWVEOzs7Ozs7a0JBRVksaUIiLCJmaWxlIjoicmFkaW9zLnN1cnZleUZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmFkaW9Hcm91cCwgUmFkaW8gfSBmcm9tICdyZWFjdC1yYWRpby1ncm91cCc7XHJcblxyXG5jbGFzcyBSYWRpb3NTdXJ2ZXlGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHsgc3VwZXIocHJvcHMpOyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcclxuICAgIHRoaXMubGFiZWxUZXh0ID0gdGhpcy5wcm9wcy5sYWJlbFRleHQ7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XHJcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMucHJvcHMub25DaGFuZ2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWw+eyB0aGlzLmxhYmVsVGV4dCB9PC9sYWJlbD5cclxuICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgbmFtZT17IHRoaXMubmFtZSArICcnIH1cclxuICAgICAgICAgIHNlbGVjdGVkVmFsdWU9eyB0aGlzLmRlZmF1bHRWYWx1ZSB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfT5cclxuICAgICAgICAgIHsgdGhpcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXsgJ3JhZGlvb3B0aW9uJyArIG9wdGlvbi5pZCB9PjxSYWRpbyB2YWx1ZT17IG9wdGlvbi5pZCB9IC8+IHsgb3B0aW9uLmRpc3BsYXlOYW1lIH08L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9zU3VydmV5RmllbGQ7Il19