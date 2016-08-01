const ROUTES = {
  SURVEY_TEMPLATE: 'api/questionnaire-templates/{:templateName}',
  SURVEY_SAVE:  'api/questionnaires'
};

export default class API_ROUTES {

  static surveyTemplate(templateName)  {
    return constructRoute(ROUTES.SURVEY_TEMPLATE, { param: 'templateName', value: templateName });
  }

  static surveySave()  {
    return constructRoute(ROUTES.SURVEY_SAVE);
  }
}

function constructRoute(route, propMappings = []) {
  let populatedRoute = route;
  let mappings = Array.isArray(propMappings) ? propMappings : [ propMappings ];

  mappings.forEach((mapping) => {
    populatedRoute = populatedRoute.replace('{:' + mapping.param + '}', mapping.value);
  });

  return populatedRoute;
}