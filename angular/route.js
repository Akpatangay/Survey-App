app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'views/mainView.html',
            controller  : 'mainController',
            controllerAs: 'main'
        })
        .when('/survey/allSurveys', {
            templateUrl:  'views/allSurveysView.html',
            controller:   'allSurveyController',
            controllerAs: 'all'
        })
        .when('/admin/allSurveys', {
            templateUrl:  'views/adminAllSurveyView.html',
            controller:   'allSurveyController',
            controllerAs: 'all'
        })
        .when('/survey/:surveyId', {
            templateUrl:  'views/allSurveysView.html',
            controller:   'singleSurveyController',
            controllerAs: 'single'
        })
        .when('/survey/:surveyId/edit', {
            templateUrl:  'views/editSurveyView.html',
            controller:   'editSurveyController',
            controllerAs: 'edit'
        })
        .when('/survey/:surveyId/delete', {
            templateUrl:  'views/editSurveyView.html',
            controller:   'editSurveyController',
            controllerAs: 'edit'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1 style="text-align: center; color: white; font-family: fantasy !important; font-weight: bolder;">404 PAGE NOT FOUND</h1>'
            });
}]);