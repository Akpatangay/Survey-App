app.controller('editQuestionController', ['dataService', '$routeParams', '$location', function(dataService, $routeParams, $location) {

    var main = this;
    this.surveyId = $routeParams.surveyId;
    this.questionId = $routeParams.questionId;
    this.fetchQuestions = function() {
        dataService.getQuestions(main.surveyId)
            .then(function success(response) {
                main.question = response.data.data;
                for (var i in main.question) {
                    if (main.question[i].questionId == main.questionId) {
                        main.questionText = main.question[i].questionText;
                    }
                }
                console.log(response);
            }, function error(response) {
                alert("An error occured, check the console.");
                console.log(response);
            });
    }();

    this.adminEditQuestions = function(questionId, questionText) {
        data = { questionText: questionText };
        if (confirm("Are you sure you want to make changes?")) {
            dataService.editQuestion(questionId, data)
                .then(function success(response) {
                    alert("Question edited successfully!");
                    console.log(response);
                    $location.path('/admin/' + main.surveyId);
                }, function error(response) {
                    alert("some error occured, check the console.");
                    console.log(response);
                })
        }
    };
}]);