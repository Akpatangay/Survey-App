app.controller('adminSingleSurveyController', ['dataService', '$route', '$routeParams', '$location', function(dataService, $route, $routeParams, $location) {

    var main = this;
    this.surveyId = $routeParams.surveyId;
    this.IsVisible = [];
    this.ShowHide = function(index) {
        //If DIV is visible it will be hidden and vice versa.
        main.IsVisible[index] = main.IsVisible[index] ? false : true;
    };
    

    //loading survey
    this.fetchSingleSurvey = function() {

        dataService.getSingleSurvey(main.surveyId)

            .then(function success(response) {

                main.data = response.data.data;
                console.log(response);

            }, function error(response) {

                alert("An error occured, check the console.");
                console.log(response);

            });

    }();

    this.deleteSurvey = function(surveyId) {

        if (confirm("Are you sure you want to delete?")) {

            dataService.deleteSurvey(main.surveyId)

                .then(function success(response) {

                    alert("Survey deleted successfully!");
                    console.log(response);
                    $location.path('/admin/allSurveys')

                }, function error(response) {

                    alert("some error occured, check the console.")
                    console.log(response);
                });
        }

    };

    //questions section
    this.fetchQuestions = function() {

        dataService.getQuestions(main.surveyId)

            .then(function success(response) {

                main.question = response.data.data;

                console.log(response);

            }, function error(response) {

                alert("some error occured, check the console.");
                console.log(response);
            });
    }();

    this.adminEditQuestions = function(questionId) {

        data = { questionText: main.questionText };

        if (confirm("Are you sure you want to make changes?")) {


            dataService.editQuestion(questionId, data)

                .then(function success(response) {

                    alert("Question edited successfully!");
                    console.log(response);
                    $route.reload();

                }, function error(response) {

                    alert("some error occured, check the console.");
                    console.log(response);
                })
        }
    };

    this.adminDelQuestion = function(questionId) {

        if (confirm("Are you sure you want to delete?")) {

            dataService.deleteQuestion(questionId)

                .then(function success(response) {

                    alert("Question deleted successfully!");
                    console.log(response);
                    $route.reload();

                }, function error(response) {

                    alert("some error occured, check the console.")
                    console.log(response);
                });
        }
    };

    //Option section
    this.adminCretOption = function(questionId, data) {

        data = {optionText: data}

        dataService.createOption(questionId, data)

            .then(function success(response) {

                alert("Option created successfully!");

                console.log(response);
                $route.reload();

            }, function error(response) {

                alert("some error occured, check the console.");
                console.log(response);
            });
    };

    this.adminDelOption = function(questionId, index) {

        if (confirm("Are you sure you want to delete?")) {

            dataService.deleteOption(questionId)

                .then(function success(response) {

                    alert("Options deleted successfully!");

                    console.log(response);
                    $route.reload();

                }, function error(response) {

                    alert("some error occured, check the console.")
                    console.log(response);
                });
        }
    };


    //answer section
    this.adminDelAnswers = function(questionId, index) {

        if (confirm("Are you sure you want to delete?")) {

            dataService.deleteAnswer(questionId)

                .then(function success(response) {

                    alert("Answer deleted successfully!");
                    console.log(response);
                    $route.reload();

                }, function error(response) {

                    alert("some error occured, check the console.");
                    console.log(response);

                });
        }
    };

}]);