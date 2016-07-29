"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = require('../helpers/api.utility');

var _apiRoutes = require('../../config/apiRoutes.config');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _survey = require('./survey.store');

var SurveyStore = _interopRequireWildcard(_survey);

var _appdispatcher = require('../appdispatcher');

var _appdispatcher2 = _interopRequireDefault(_appdispatcher);

var _surveyAction = require('./survey.action.types');

var ActionTypes = _interopRequireWildcard(_surveyAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SurveyApi = function () {
    function SurveyApi() {
        _classCallCheck(this, SurveyApi);
    }

    _createClass(SurveyApi, null, [{
        key: 'viewSurvey',
        value: function viewSurvey(templateName) {
            return new Promise(function (resolve, reject) {
                var surveyTemplateState = getSurveyState();
                if (surveyTemplateState.name != templateName) {
                    surveyTemplateState = getSurveyTemplateFromServer(templateName);
                }

                return resolve(surveyTemplateState);
            });
        }
    }, {
        key: 'saveSurvey',
        value: function saveSurvey(survey) {
            return new Promise(function (resolve, reject) {

                return sendSurveySaveToServer(survey).then(function () {

                    // const action = ACTIONS.SAVE_SURVEY(survey);
                    // SurveyStore.(action);

                    return resolve();
                }).catch(function (error) {
                    return reject(error);
                });
            });
        }
    }]);

    return SurveyApi;
}();

function getSurveyState() {
    return Object.assign({}, SurveyStore.getSurvey());
}

function getSurveyTemplateFromServer(templateName) {
    return new Promise(function (resolve, reject) {

        return (0, _api.GET)(_apiRoutes2.default.surveyTemplate(templateName)).then(function (template) {

            _appdispatcher2.default.dispatch({
                actionType: ActionTypes.STORE_SURVEY_TEMPLATE,
                survey: template
            });

            return resolve(Object.assign({}, SurveyStore.getSurvey()));
        }).catch(function (error) {
            return reject(error);
        });
    });
}

function sendSurveySaveToServer(survey) {
    survey.ownerId = 'LoremIpsum'; // TODO: this will come from the context passed in when it is converted into a module/component instead of a web app.
    survey.userId = 'LoremIpsum'; // TODO: remove when BE provides this

    var request = {
        questionnaireTemplateId: survey.id,
        ownerId: survey.ownerId,
        userId: survey.userId,
        responses: collectSurveyPromptResponses(survey.prompts)
    };

    return (0, _api.POST)(_apiRoutes2.default.surveySave(), request);

    function collectSurveyPromptResponses(prompts) {
        var responses = [];

        prompts.forEach(function (prompt) {

            responses = [].concat(_toConsumableArray(responses), _toConsumableArray(buildResponseFromSelectedOptions(prompt)), _toConsumableArray(collectFollowupPromptResponses(prompt)));
        });
        return responses;
    }

    function buildResponseFromSelectedOptions(prompt) {
        var responses = [];

        prompt.options.forEach(function (option) {
            if (!option.isSelected) {
                return;
            }

            responses.push({
                promptId: prompt.id,
                optionId: option.id,
                value: option.value
            });
        });

        return responses;
    }

    function collectFollowupPromptResponses(prompt) {
        var followupResponses = [];

        prompt.options.forEach(function (option) {
            if (!option.isSelected) {
                return;
            }

            followupResponses = [].concat(_toConsumableArray(followupResponses), _toConsumableArray(collectSurveyPromptResponses(option.followUpPrompts)));
        });

        return followupResponses;
    }
}

exports.default = SurveyApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc3VydmV5L3N1cnZleS5hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7SUFBYSxXOztBQUNiOzs7O0FBQ0E7O0lBQWEsVzs7Ozs7Ozs7OztJQUVQLFM7Ozs7Ozs7bUNBQ2dCLFksRUFBYztBQUM1QixtQkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3BDLG9CQUFJLHNCQUFzQixnQkFBMUI7QUFDQSxvQkFBRyxvQkFBb0IsSUFBcEIsSUFBNEIsWUFBL0IsRUFBNkM7QUFDekMsMENBQXNCLDRCQUE0QixZQUE1QixDQUF0QjtBQUNIOztBQUVELHVCQUFPLFFBQVEsbUJBQVIsQ0FBUDtBQUNILGFBUE0sQ0FBUDtBQVFIOzs7bUNBRWlCLE0sRUFBUTtBQUN0QixtQkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCOztBQUVwQyx1QkFBTyx1QkFBdUIsTUFBdkIsRUFDRixJQURFLENBQ0csWUFBTTs7QUFFVDtBQUNBOztBQUVDLDJCQUFPLFNBQVA7QUFDSCxpQkFQRSxFQVFGLEtBUkUsQ0FRSSxVQUFDLEtBQUQsRUFBVztBQUFFLDJCQUFPLE9BQU8sS0FBUCxDQUFQO0FBQXVCLGlCQVJ4QyxDQUFQO0FBU0gsYUFYTSxDQUFQO0FBYUg7Ozs7OztBQUlMLFNBQVMsY0FBVCxHQUEwQjtBQUN0QixXQUFRLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBaUIsWUFBWSxTQUFaLEVBQWpCLENBQVI7QUFDSDs7QUFFRCxTQUFTLDJCQUFULENBQXFDLFlBQXJDLEVBQW1EO0FBQy9DLFdBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjs7QUFFcEMsZUFBTyxjQUFJLG9CQUFXLGNBQVgsQ0FBMEIsWUFBMUIsQ0FBSixFQUNGLElBREUsQ0FDRyxVQUFDLFFBQUQsRUFBYzs7QUFFaEIsb0NBQVcsUUFBWCxDQUFvQjtBQUNoQiw0QkFBWSxZQUFZLHFCQURSO0FBRWhCLHdCQUFRO0FBRlEsYUFBcEI7O0FBS0EsbUJBQU8sUUFBUSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWlCLFlBQVksU0FBWixFQUFqQixDQUFSLENBQVA7QUFDSCxTQVRFLEVBVUYsS0FWRSxDQVVJLFVBQUMsS0FBRCxFQUFXO0FBQUUsbUJBQU8sT0FBTyxLQUFQLENBQVA7QUFBdUIsU0FWeEMsQ0FBUDtBQVlILEtBZE0sQ0FBUDtBQWVIOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsTUFBaEMsRUFBd0M7QUFDcEMsV0FBTyxPQUFQLEdBQWlCLFlBQWpCLENBRG9DLENBQ0w7QUFDL0IsV0FBTyxNQUFQLEdBQWdCLFlBQWhCLENBRm9DLENBRU47O0FBRTlCLFFBQUksVUFBVTtBQUNWLGlDQUF5QixPQUFPLEVBRHRCO0FBRVYsaUJBQVMsT0FBTyxPQUZOO0FBR1YsZ0JBQVEsT0FBTyxNQUhMO0FBSVYsbUJBQVcsNkJBQTZCLE9BQU8sT0FBcEM7QUFKRCxLQUFkOztBQU9BLFdBQU8sZUFBSyxvQkFBVyxVQUFYLEVBQUwsRUFBOEIsT0FBOUIsQ0FBUDs7QUFHQSxhQUFTLDRCQUFULENBQXNDLE9BQXRDLEVBQStDO0FBQzNDLFlBQUksWUFBWSxFQUFoQjs7QUFFQSxnQkFBUSxPQUFSLENBQWdCLFVBQUMsTUFBRCxFQUFZOztBQUV4QixxREFDTyxTQURQLHNCQUVPLGlDQUFpQyxNQUFqQyxDQUZQLHNCQUdPLCtCQUErQixNQUEvQixDQUhQO0FBTUgsU0FSRDtBQVNBLGVBQU8sU0FBUDtBQUNIOztBQUVELGFBQVMsZ0NBQVQsQ0FBMEMsTUFBMUMsRUFBa0Q7QUFDOUMsWUFBSSxZQUFZLEVBQWhCOztBQUVBLGVBQU8sT0FBUCxDQUFlLE9BQWYsQ0FBdUIsVUFBQyxNQUFELEVBQVk7QUFDL0IsZ0JBQUcsQ0FBQyxPQUFPLFVBQVgsRUFBdUI7QUFBRTtBQUFTOztBQUVsQyxzQkFBVSxJQUFWLENBQWU7QUFDWCwwQkFBVSxPQUFPLEVBRE47QUFFWCwwQkFBVSxPQUFPLEVBRk47QUFHWCx1QkFBTyxPQUFPO0FBSEgsYUFBZjtBQUtILFNBUkQ7O0FBVUEsZUFBTyxTQUFQO0FBQ0g7O0FBRUQsYUFBUyw4QkFBVCxDQUF3QyxNQUF4QyxFQUFnRDtBQUM1QyxZQUFJLG9CQUFvQixFQUF4Qjs7QUFFQSxlQUFPLE9BQVAsQ0FBZSxPQUFmLENBQXVCLFVBQUMsTUFBRCxFQUFZO0FBQy9CLGdCQUFHLENBQUMsT0FBTyxVQUFYLEVBQXVCO0FBQUU7QUFBUzs7QUFFbEMsNkRBQ08saUJBRFAsc0JBRU8sNkJBQTZCLE9BQU8sZUFBcEMsQ0FGUDtBQUlILFNBUEQ7O0FBU0EsZUFBTyxpQkFBUDtBQUNIO0FBQ0o7O2tCQUVjLFMiLCJmaWxlIjoic3VydmV5LmFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgR0VULCBQT1NUIH0gZnJvbSAnLi4vaGVscGVycy9hcGkudXRpbGl0eSc7XHJcbmltcG9ydCBBUElfUk9VVEVTIGZyb20gJy4uLy4uL2NvbmZpZy9hcGlSb3V0ZXMuY29uZmlnJztcclxuaW1wb3J0ICAqIGFzIFN1cnZleVN0b3JlIGZyb20gJy4vc3VydmV5LnN0b3JlJztcclxuaW1wb3J0ICBEaXNwYXRjaGVyIGZyb20gJy4uL2FwcGRpc3BhdGNoZXInO1xyXG5pbXBvcnQgICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi9zdXJ2ZXkuYWN0aW9uLnR5cGVzJztcclxuXHJcbmNsYXNzIFN1cnZleUFwaSB7XHJcbiAgICBzdGF0aWMgdmlld1N1cnZleSh0ZW1wbGF0ZU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3VydmV5VGVtcGxhdGVTdGF0ZSA9IGdldFN1cnZleVN0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmKHN1cnZleVRlbXBsYXRlU3RhdGUubmFtZSAhPSB0ZW1wbGF0ZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHN1cnZleVRlbXBsYXRlU3RhdGUgPSBnZXRTdXJ2ZXlUZW1wbGF0ZUZyb21TZXJ2ZXIodGVtcGxhdGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoc3VydmV5VGVtcGxhdGVTdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNhdmVTdXJ2ZXkoc3VydmV5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZW5kU3VydmV5U2F2ZVRvU2VydmVyKHN1cnZleSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBhY3Rpb24gPSBBQ1RJT05TLlNBVkVfU1VSVkVZKHN1cnZleSk7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBTdXJ2ZXlTdG9yZS4oYWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IHJldHVybiByZWplY3QoZXJyb3IpOyB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTdXJ2ZXlTdGF0ZSgpIHtcclxuICAgIHJldHVybiAgT2JqZWN0LmFzc2lnbih7fSxTdXJ2ZXlTdG9yZS5nZXRTdXJ2ZXkoKSkgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdXJ2ZXlUZW1wbGF0ZUZyb21TZXJ2ZXIodGVtcGxhdGVOYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gR0VUKEFQSV9ST1VURVMuc3VydmV5VGVtcGxhdGUodGVtcGxhdGVOYW1lKSlcclxuICAgICAgICAgICAgLnRoZW4oKHRlbXBsYXRlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgRGlzcGF0Y2hlci5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZXMuU1RPUkVfU1VSVkVZX1RFTVBMQVRFLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1cnZleTogdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKE9iamVjdC5hc3NpZ24oe30sU3VydmV5U3RvcmUuZ2V0U3VydmV5KCkpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyByZXR1cm4gcmVqZWN0KGVycm9yKTsgfSk7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRTdXJ2ZXlTYXZlVG9TZXJ2ZXIoc3VydmV5KSB7XHJcbiAgICBzdXJ2ZXkub3duZXJJZCA9ICdMb3JlbUlwc3VtJzsgLy8gVE9ETzogdGhpcyB3aWxsIGNvbWUgZnJvbSB0aGUgY29udGV4dCBwYXNzZWQgaW4gd2hlbiBpdCBpcyBjb252ZXJ0ZWQgaW50byBhIG1vZHVsZS9jb21wb25lbnQgaW5zdGVhZCBvZiBhIHdlYiBhcHAuXHJcbiAgICBzdXJ2ZXkudXNlcklkID0gJ0xvcmVtSXBzdW0nOyAvLyBUT0RPOiByZW1vdmUgd2hlbiBCRSBwcm92aWRlcyB0aGlzXHJcblxyXG4gICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgcXVlc3Rpb25uYWlyZVRlbXBsYXRlSWQ6IHN1cnZleS5pZCxcclxuICAgICAgICBvd25lcklkOiBzdXJ2ZXkub3duZXJJZCxcclxuICAgICAgICB1c2VySWQ6IHN1cnZleS51c2VySWQsXHJcbiAgICAgICAgcmVzcG9uc2VzOiBjb2xsZWN0U3VydmV5UHJvbXB0UmVzcG9uc2VzKHN1cnZleS5wcm9tcHRzKVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUE9TVChBUElfUk9VVEVTLnN1cnZleVNhdmUoKSwgcmVxdWVzdCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbGxlY3RTdXJ2ZXlQcm9tcHRSZXNwb25zZXMocHJvbXB0cykge1xyXG4gICAgICAgIGxldCByZXNwb25zZXMgPSBbXTtcclxuXHJcbiAgICAgICAgcHJvbXB0cy5mb3JFYWNoKChwcm9tcHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnJlc3BvbnNlcyxcclxuICAgICAgICAgICAgICAgIC4uLmJ1aWxkUmVzcG9uc2VGcm9tU2VsZWN0ZWRPcHRpb25zKHByb21wdCksXHJcbiAgICAgICAgICAgICAgICAuLi5jb2xsZWN0Rm9sbG93dXBQcm9tcHRSZXNwb25zZXMocHJvbXB0KVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkUmVzcG9uc2VGcm9tU2VsZWN0ZWRPcHRpb25zKHByb21wdCkge1xyXG4gICAgICAgIGxldCByZXNwb25zZXMgPSBbXTtcclxuXHJcbiAgICAgICAgcHJvbXB0Lm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFvcHRpb24uaXNTZWxlY3RlZCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHByb21wdElkOiBwcm9tcHQuaWQsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25JZDogb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb2xsZWN0Rm9sbG93dXBQcm9tcHRSZXNwb25zZXMocHJvbXB0KSB7XHJcbiAgICAgICAgbGV0IGZvbGxvd3VwUmVzcG9uc2VzID0gW107XHJcblxyXG4gICAgICAgIHByb21wdC5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZighb3B0aW9uLmlzU2VsZWN0ZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICBmb2xsb3d1cFJlc3BvbnNlcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmZvbGxvd3VwUmVzcG9uc2VzLFxyXG4gICAgICAgICAgICAgICAgLi4uY29sbGVjdFN1cnZleVByb21wdFJlc3BvbnNlcyhvcHRpb24uZm9sbG93VXBQcm9tcHRzKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9sbG93dXBSZXNwb25zZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1cnZleUFwaTtcclxuIl19