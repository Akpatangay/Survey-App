app.controller('adminSingleSurveyController', ['dataService', '$routeParams', '$location', function(dataService, $routeParams, $location) {

    var main = this;
    this.surveyId = $routeParams.surveyId;
    this.IsVisible = false;
    this.ShowHide = function() { debugger;
        //If DIV is visible it will be hidden and vice versa.
        main.IsVisible = main.IsVisible ? false : true;
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

    this.adminCreateQuestion = function() {

        data = { question: main.question };

        dataService.createQuestion(data)

            .then(function success(response) {

                alert("Question created successfully!");
                console.log(response);

            }, function error(response) {

                alert("some error occured, check the console.");
                console.log(response);

            });
    };

    this.adminEditQuestions = function(questionId) {

        data = { originalQuestion: Question };

        if (confirm("Are you sure you want to make changes?")) {


            dataService.editQuestion(questionId, data)

                .then(function success(response) {

                    alert("Question edited successfully!");
                    console.log(response);

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

                }, function error(response) {

                    alert("some error occured, check the console.")
                    console.log(response);
                });
        }
    };

    //Option section
    this.adminCretOption = function(questionId) {

        dataService.createOption(questionId, data)

            .then(function success(response) {

                alert("Option created successfully!");
                console.log(response);

            }, function error(response) {

                alert("some error occured, check the console.");
                console.log(response);
            });
    };

    this.adminDelOption = function(questionId, index) {

        if (confirm("Are you sure you want to delete?")) {

            dataService.deleteOption(questionId)

                .then(function success(response) {

                    alert("Option deleted successfully!");

                    main.entireData.splice(index, 1);
                    console.log(response);

                }, function error(response) {

                    alert("some error occured, check the console.")
                    console.log(response);
                });
        }
    };


    //answer section
    this.adminDelAnswer = function(questionId, index) {

        if (confirm("Are you sure you want to delete?")) {

            dataService.deleteAnswer(questionId)

                .then(function success(response) {

                    alert("Answer deleted successfully!");
                    console.log(response);

                }, function error(response) {

                    alert("some error occured, check the console.");
                    console.log(response);

                });
        }
    };

}]);