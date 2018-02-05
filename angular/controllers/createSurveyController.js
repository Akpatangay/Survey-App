app.controller('createSurveyController', ['dataService', '$location', function(dataService, $location) {
    var main = this;
    this.createSurveys = function() {
        data = {
            surveyTitle: main.surveyTitle,
            surveySubtitle: main.surveySubtitle,
            instructions: main.instructions
        };
        dataService.createSurvey(data)
            .then(function success(response) {
                alert("Survey created successfully");
                console.log(response.data.data.surveyId);
                $location.path('/admin/allSurveys');
            }, function error(response) {
                alert("There was an error, check the console.");
                console.log(response);
            });
    };

}]);