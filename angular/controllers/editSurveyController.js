app.controller('editSurveyController', ['dataService', 'routeParams', function(dataService, routeParams) {
    var main = this;

    this.surveyId = $routeParams.surveyId;

    this.fetchSurveyData = function() {

        dataService.getSingleSurvey(main.surveyId)

            .then(function success(response) {

                main.surveyTitle = response.data.data.surveyTitle;
                main.surveySubtitle = response.data.data.surveySubtitle;
                main.instructions = response.data.data.instructions;
            });
    }();

    this.editSurveys = function() {

        if (confirm("Are you sure you want to make changes?")) {

            var myData = {

                surveyTitle: main.surveyTitle,
                surveySubtitle: main.surveySubtitle,
                instructions: main.instructions

            }

            dataService.editSurvey(main.surveyId, myData)
                .then(function success(response) {

                    alert("Survey is successfully updated!");
                    console.log(response);

                    $location.path();
                }, function error(response) {

                    alert("An error has occured, check the console.");
                    console.log(response);
                });
        }
    }();
}]);