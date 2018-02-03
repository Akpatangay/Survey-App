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
        .when('/admin/createSurvey', {
            templateUrl:  'views/createSurveyView.html',
            controller:   'createSurveyController',
            controllerAs: 'create'
        })
        .when('/survey/:surveyId', {
            templateUrl:  'views/singleSurveyView.html',
            controller:   'singleSurveyController',
            controllerAs: 'single'
        })
        .when('/admin/:surveyId/edit', {
            templateUrl:  'views/editSurveyView.html',
            controller:   'editSurveyController',
            controllerAs: 'edit'
        })
        .when('/admin/:surveyId/delete', {
            templateUrl:  'views/editSurveyView.html',
            controller:   'allSurveyController',
            controllerAs: 'all'
        })
        .when('/admin/:surveyId/question/create', {
            templateUrl:  'views/createQuestionView.html',
            controller:   'createQuestionController',
            controllerAs: 'query'
        })
        .when('/admin/:surveyId/question/:questionId/edit', {
            templateUrl:  'views/editQuestionView.html',
            controller:   'editQuestionController',
            controllerAs: 'editQ'
        })
        .when('/admin/:surveyId', {
            templateUrl:  'views/adminSingleSurveyView.html',
            controller:   'adminSingleSurveyController',
            controllerAs: 'admin'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1 style="text-align: center; color: brown; background-color: white; font-family: fantasy !important; font-weight: bolder;">404 PAGE NOT FOUND</h1>'
            });
}]);