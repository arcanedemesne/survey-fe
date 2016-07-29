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

require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

require('../../../node_modules/toastr/build/toastr.min.css');

require('../../assets/styles/app.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SurveyMainView: {
        displayName: 'SurveyMainView'
    }
};

var _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/views/survey/survey.mainview.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/views/survey/survey.mainview.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CWebstormProjectsSurveyFeNode_modulesReactTransformHmrLibIndexJs2(_CWebstormProjectsSurveyFeNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var SurveyMode = {
    Edit: 'Edit',
    View: 'View'
};

var SurveyMainView = _wrapComponent('SurveyMainView')(function (_React$Component) {
    _inherits(SurveyMainView, _React$Component);

    function SurveyMainView(props) {
        _classCallCheck(this, SurveyMainView);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyMainView).call(this, props));

        _this.state = {
            mode: SurveyMode.Edit,
            templateName: props.templateName
        };
        return _this;
    }

    _createClass(SurveyMainView, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                null,
                'External Survey Module'
            );
        }
    }]);

    return SurveyMainView;
}(_react3.default.Component));

exports.default = SurveyMainView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3cy9zdXJ2ZXkvc3VydmV5Lm1haW52aWV3LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxhQUFhO0FBQ2YsVUFBTSxNQURTO0FBRWYsVUFBTTtBQUZTLENBQW5COzs7OztBQU9JLDRCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzR0FDVCxLQURTOztBQUdmLGNBQUssS0FBTCxHQUFhO0FBQ1Qsa0JBQU0sV0FBVyxJQURSO0FBRVQsMEJBQWMsTUFBTTtBQUZYLFNBQWI7QUFIZTtBQU9sQjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdIOzs7O0VBZndCLGdCQUFNLFM7O2tCQWtCcEIsYyIsImZpbGUiOiJzdXJ2ZXkubWFpbnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy90b2FzdHIvYnVpbGQvdG9hc3RyLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG5jb25zdCBTdXJ2ZXlNb2RlID0ge1xyXG4gICAgRWRpdDogJ0VkaXQnLFxyXG4gICAgVmlldzogJ1ZpZXcnXHJcbn07XHJcblxyXG5jbGFzcyBTdXJ2ZXlNYWluVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vZGU6IFN1cnZleU1vZGUuRWRpdCxcclxuICAgICAgICAgICAgdGVtcGxhdGVOYW1lOiBwcm9wcy50ZW1wbGF0ZU5hbWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PkV4dGVybmFsIFN1cnZleSBNb2R1bGU8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdXJ2ZXlNYWluVmlldzsiXX0=