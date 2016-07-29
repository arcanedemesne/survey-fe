'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_ROUTE = 'http://symphonyapi01.azurewebsites.net/';

var ROUTES = {
  SURVEY_TEMPLATE: 'api/questionnaire-templates/{:templateName}',
  SURVEY_SAVE: 'api/questionnaires'
};

var API_ROUTES = function () {
  function API_ROUTES() {
    _classCallCheck(this, API_ROUTES);
  }

  _createClass(API_ROUTES, null, [{
    key: 'surveyTemplate',
    value: function surveyTemplate(templateName) {
      return constructRoute(ROUTES.SURVEY_TEMPLATE, { param: 'templateName', value: templateName });
    }
  }, {
    key: 'surveySave',
    value: function surveySave() {
      return constructRoute(ROUTES.SURVEY_SAVE);
    }
  }]);

  return API_ROUTES;
}();

exports.default = API_ROUTES;


function constructRoute(route) {
  var propMappings = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  var populatedRoute = route;
  var mappings = Array.isArray(propMappings) ? propMappings : [propMappings];

  mappings.forEach(function (mapping) {
    populatedRoute = populatedRoute.replace('{:' + mapping.param + '}', mapping.value);
  });

  return API_ROUTE + populatedRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvYXBpUm91dGVzLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTSxZQUFZLHlDQUFsQjs7QUFFQSxJQUFNLFNBQVM7QUFDYixtQkFBaUIsNkNBREo7QUFFYixlQUFjO0FBRkQsQ0FBZjs7SUFLcUIsVTs7Ozs7OzttQ0FFRyxZLEVBQWU7QUFDbkMsYUFBTyxlQUFlLE9BQU8sZUFBdEIsRUFBdUMsRUFBRSxPQUFPLGNBQVQsRUFBeUIsT0FBTyxZQUFoQyxFQUF2QyxDQUFQO0FBQ0Q7OztpQ0FFb0I7QUFDbkIsYUFBTyxlQUFlLE9BQU8sV0FBdEIsQ0FBUDtBQUNEOzs7Ozs7a0JBUmtCLFU7OztBQVdyQixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBa0Q7QUFBQSxNQUFuQixZQUFtQix5REFBSixFQUFJOztBQUNoRCxNQUFJLGlCQUFpQixLQUFyQjtBQUNBLE1BQUksV0FBVyxNQUFNLE9BQU4sQ0FBYyxZQUFkLElBQThCLFlBQTlCLEdBQTZDLENBQUUsWUFBRixDQUE1RDs7QUFFQSxXQUFTLE9BQVQsQ0FBaUIsVUFBQyxPQUFELEVBQWE7QUFDNUIscUJBQWlCLGVBQWUsT0FBZixDQUF1QixPQUFPLFFBQVEsS0FBZixHQUF1QixHQUE5QyxFQUFtRCxRQUFRLEtBQTNELENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLFlBQVksY0FBbkI7QUFDRCIsImZpbGUiOiJhcGlSb3V0ZXMuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX1JPVVRFID0gJ2h0dHA6Ly9zeW1waG9ueWFwaTAxLmF6dXJld2Vic2l0ZXMubmV0Lyc7XHJcblxyXG5jb25zdCBST1VURVMgPSB7XHJcbiAgU1VSVkVZX1RFTVBMQVRFOiAnYXBpL3F1ZXN0aW9ubmFpcmUtdGVtcGxhdGVzL3s6dGVtcGxhdGVOYW1lfScsXHJcbiAgU1VSVkVZX1NBVkU6ICAnYXBpL3F1ZXN0aW9ubmFpcmVzJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJX1JPVVRFUyB7XHJcblxyXG4gIHN0YXRpYyBzdXJ2ZXlUZW1wbGF0ZSh0ZW1wbGF0ZU5hbWUpICB7XHJcbiAgICByZXR1cm4gY29uc3RydWN0Um91dGUoUk9VVEVTLlNVUlZFWV9URU1QTEFURSwgeyBwYXJhbTogJ3RlbXBsYXRlTmFtZScsIHZhbHVlOiB0ZW1wbGF0ZU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3VydmV5U2F2ZSgpICB7XHJcbiAgICByZXR1cm4gY29uc3RydWN0Um91dGUoUk9VVEVTLlNVUlZFWV9TQVZFKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnN0cnVjdFJvdXRlKHJvdXRlLCBwcm9wTWFwcGluZ3MgPSBbXSkge1xyXG4gIGxldCBwb3B1bGF0ZWRSb3V0ZSA9IHJvdXRlO1xyXG4gIGxldCBtYXBwaW5ncyA9IEFycmF5LmlzQXJyYXkocHJvcE1hcHBpbmdzKSA/IHByb3BNYXBwaW5ncyA6IFsgcHJvcE1hcHBpbmdzIF07XHJcblxyXG4gIG1hcHBpbmdzLmZvckVhY2goKG1hcHBpbmcpID0+IHtcclxuICAgIHBvcHVsYXRlZFJvdXRlID0gcG9wdWxhdGVkUm91dGUucmVwbGFjZSgnezonICsgbWFwcGluZy5wYXJhbSArICd9JywgbWFwcGluZy52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBBUElfUk9VVEUgKyBwb3B1bGF0ZWRSb3V0ZTtcclxufSJdfQ==