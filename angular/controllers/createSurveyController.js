app.controller('createSurveyController', ['dataService', function(dataService) {
    var main = this;


    this.createSurveys = function() {
        myData = {
            surveyTitle: main.surveyTitle,
            surveySubtitle: main.surveySubtitle,
            instructions: main.instructions
        };

        dataService.createSurvey(myData)
            .then(function success(response) {

                alert("Survey created successfully");
                console.log(response);

                $location.path();
            }, function error(response) {

                alert("There was an error, check the console.");
                console.log(response);
            });
    }();

}]);