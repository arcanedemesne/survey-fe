"use strict";

var _appdispatcher = require('../appdispatcher');

var _appdispatcher2 = _interopRequireDefault(_appdispatcher);

var _surveyAction = require('./survey.action.types');

var ActionTypes = _interopRequireWildcard(_surveyAction);

var _events = require('events');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANGE_EVENT = 'change';

var survey = {};

var SurveyStore = Object.assign({}, _events.EventEmitter.prototype, {
    addChangeListener: function addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function emitChange() {
        this.emit(CHANGE_EVENT);
    },
    getSurvey: function getSurvey() {
        return survey;
    }
});

_appdispatcher2.default.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            survey = action.initialData.survey;
            SurveyStore.emitChange();
            break;
        case ActionTypes.SURVEY_SAVE:
            Object.assign(survey, action.survey);
            SurveyStore.emitChange();
            break;
        case ActionTypes.STORE_SURVEY_TEMPLATE:
            Object.assign(survey, action.survey);
            SurveyStore.emitChange();

            break;
        default:
        // no op
    }
});

module.exports = SurveyStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc3VydmV5L3N1cnZleS5zdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7OztBQUNBOztJQUFhLFc7O0FBQ2I7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFuQjs7QUFFQSxJQUFJLFNBQVMsRUFBYjs7QUFFQSxJQUFJLGNBQWUsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixxQkFBYSxTQUEvQixFQUEwQztBQUN6RCx1QkFBbUIsMkJBQVMsUUFBVCxFQUFtQjtBQUNsQyxhQUFLLEVBQUwsQ0FBUSxZQUFSLEVBQXNCLFFBQXRCO0FBQ0gsS0FId0Q7QUFJekQsMEJBQXNCLDhCQUFTLFFBQVQsRUFBbUI7QUFDckMsYUFBSyxjQUFMLENBQW9CLFlBQXBCLEVBQWtDLFFBQWxDO0FBQ0gsS0FOd0Q7QUFPekQsZ0JBQVksc0JBQVc7QUFDbkIsYUFBSyxJQUFMLENBQVUsWUFBVjtBQUNILEtBVHdEO0FBVXpELGVBQVkscUJBQVU7QUFDbEIsZUFBTyxNQUFQO0FBQ0g7QUFad0QsQ0FBMUMsQ0FBbkI7O0FBZUEsd0JBQVcsUUFBWCxDQUFvQixVQUFTLE1BQVQsRUFBaUI7QUFDakMsWUFBTyxPQUFPLFVBQWQ7QUFDSSxhQUFLLFlBQVksVUFBakI7QUFDSSxxQkFBUyxPQUFPLFdBQVAsQ0FBbUIsTUFBNUI7QUFDQSx3QkFBWSxVQUFaO0FBQ0E7QUFDSixhQUFLLFlBQVksV0FBakI7QUFDSSxtQkFBTyxNQUFQLENBQWMsTUFBZCxFQUFxQixPQUFPLE1BQTVCO0FBQ0Esd0JBQVksVUFBWjtBQUNBO0FBQ0osYUFBSyxZQUFZLHFCQUFqQjtBQUNJLG1CQUFPLE1BQVAsQ0FBYyxNQUFkLEVBQXFCLE9BQU8sTUFBNUI7QUFDQSx3QkFBWSxVQUFaOztBQUVBO0FBQ0o7QUFDQTtBQWZKO0FBaUJILENBbEJEOztBQW9CQSxPQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoic3VydmV5LnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgRGlzcGF0Y2hlciBmcm9tICcuLi9hcHBkaXNwYXRjaGVyJztcclxuaW1wb3J0ICAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4vc3VydmV5LmFjdGlvbi50eXBlcyc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XHJcblxyXG52YXIgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XHJcblxyXG52YXIgc3VydmV5ID0ge307XHJcblxyXG52YXIgU3VydmV5U3RvcmUgPSAgT2JqZWN0LmFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xyXG4gICAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xyXG4gICAgfSxcclxuICAgIGdldFN1cnZleSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHN1cnZleTtcclxuICAgIH1cclxufSk7XHJcblxyXG5EaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgc3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5JTklUSUFMSVpFOlxyXG4gICAgICAgICAgICBzdXJ2ZXkgPSBhY3Rpb24uaW5pdGlhbERhdGEuc3VydmV5O1xyXG4gICAgICAgICAgICBTdXJ2ZXlTdG9yZS5lbWl0Q2hhbmdlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuU1VSVkVZX1NBVkU6XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3VydmV5LGFjdGlvbi5zdXJ2ZXkpO1xyXG4gICAgICAgICAgICBTdXJ2ZXlTdG9yZS5lbWl0Q2hhbmdlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuU1RPUkVfU1VSVkVZX1RFTVBMQVRFOlxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN1cnZleSxhY3Rpb24uc3VydmV5KTtcclxuICAgICAgICAgICAgU3VydmV5U3RvcmUuZW1pdENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBubyBvcFxyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3VydmV5U3RvcmU7Il19