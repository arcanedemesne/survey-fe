"use strict";

var _surveyAction = require('./survey.action.types');

var ActionTypes = _interopRequireWildcard(_surveyAction);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appdispatcher = require('../appdispatcher');

var _appdispatcher2 = _interopRequireDefault(_appdispatcher);

var _survey = require('./survey.api');

var _survey2 = _interopRequireDefault(_survey);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SurveyActions = {

    saveSurvey: function saveSurvey(survey) {
        _survey2.default.saveSurvey(survey).then(function () {
            _reactRouter.browserHistory.push('/surveyview');
        });

        _appdispatcher2.default.dispatch({
            actionType: ActionTypes.SURVEY_SAVE,
            survey: survey
        });
    },

    storeSurveyTemplate: function storeSurveyTemplate(surveyTemplate) {
        _survey2.default.storeSurveyTemplate(surveyTemplate);

        _appdispatcher2.default.dispatch({
            actionType: ActionTypes.STORE_SURVEY_TEMPLATE,
            survey: surveyTemplate
        });
    }

};

module.exports = SurveyActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc3VydmV5L3N1cnZleS5hY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztJQUFhLFc7O0FBQ2I7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQUksZ0JBQWdCOztBQUVoQixnQkFBWSxvQkFBUyxNQUFULEVBQWlCO0FBQ3pCLHlCQUNLLFVBREwsQ0FDZ0IsTUFEaEIsRUFFSyxJQUZMLENBRVUsWUFBTTtBQUNSLHdDQUFlLElBQWYsQ0FBb0IsYUFBcEI7QUFDSCxTQUpMOztBQU1BLGdDQUFXLFFBQVgsQ0FBb0I7QUFDaEIsd0JBQVksWUFBWSxXQURSO0FBRWhCLG9CQUFRO0FBRlEsU0FBcEI7QUFJSCxLQWJlOztBQWVoQix5QkFBcUIsNkJBQVMsY0FBVCxFQUF5QjtBQUN6Qyx5QkFBVSxtQkFBVixDQUE4QixjQUE5Qjs7QUFFRCxnQ0FBVyxRQUFYLENBQW9CO0FBQ2hCLHdCQUFZLFlBQVkscUJBRFI7QUFFaEIsb0JBQVE7QUFGUSxTQUFwQjtBQUlIOztBQXRCZSxDQUFwQjs7QUEyQkEsT0FBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6InN1cnZleS5hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi9zdXJ2ZXkuYWN0aW9uLnR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICBEaXNwYXRjaGVyIGZyb20gJy4uL2FwcGRpc3BhdGNoZXInO1xyXG5pbXBvcnQgU3VydmV5QXBpICBmcm9tICcuL3N1cnZleS5hcGknO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5cclxudmFyIFN1cnZleUFjdGlvbnMgPSB7XHJcblxyXG4gICAgc2F2ZVN1cnZleTogZnVuY3Rpb24oc3VydmV5KSB7XHJcbiAgICAgICAgU3VydmV5QXBpXHJcbiAgICAgICAgICAgIC5zYXZlU3VydmV5KHN1cnZleSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnL3N1cnZleXZpZXcnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIERpc3BhdGNoZXIuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBY3Rpb25UeXBlcy5TVVJWRVlfU0FWRSxcclxuICAgICAgICAgICAgc3VydmV5OiBzdXJ2ZXlcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RvcmVTdXJ2ZXlUZW1wbGF0ZTogZnVuY3Rpb24oc3VydmV5VGVtcGxhdGUpIHtcclxuICAgICAgICAgU3VydmV5QXBpLnN0b3JlU3VydmV5VGVtcGxhdGUoc3VydmV5VGVtcGxhdGUpO1xyXG5cclxuICAgICAgICBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZXMuU1RPUkVfU1VSVkVZX1RFTVBMQVRFLFxyXG4gICAgICAgICAgICBzdXJ2ZXk6IHN1cnZleVRlbXBsYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3VydmV5QWN0aW9uczsiXX0=