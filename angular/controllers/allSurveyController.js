app.controller('allSurveyController', ['dataService', function(dataService) {
    var main = this;
    this.entireData = [];

    this.fetchAllSurveys = function() {
        dataService.getSurveys()
            .then(function success(response) {
                console.log(response);
                main.entireData = response.data.data;
            }, function error(response) {
                alert("some error occured, check the console.");
                console.log(response);
            });
    }();

    this.delete = function(surveyId, index) {
        if (confirm("Are you sure you want to delete?")) {
            dataService.deleteSurvey(surveyId)
                .then(function success(response) {
                    alert("Survey deleted successfully!");
                    main.entireData.splice(index, 1);
                    console.log(response);
                }, function error(response) {
                    alert("some error occured, check the console.")
                    console.log(response);
                });
        }

    };
}]);