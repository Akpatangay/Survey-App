app.controller('singleSurveyController', ['dataService', '$routeParams', function(dataService, $routeParams) {
    var main = this;
    this.surveyId = $routeParams.surveyId;
    this.maxQuestions = 0;
    this.questionNum = 0;
    this.showThankU = false;
    this.next = false;

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

    this.fetchQuestions = function() {

        dataService.getQuestions(main.surveyId)

            .then(function success(response) {

                main.question = response.data.data;
                main.maxQuestions = main.question.length;
                main.OptNumber = null;
                console.log(response);

            }, function error(response) {

                alert("An error occured, check the console.");
                console.log(response);

            });
    }();

    this.userAnswer = function(questionId, OptNumber) {

        myData = { answer: OptNumber };

        dataService.createAnswer(questionId, myData)

            .then(function success(response) {

                console.log(response);

            }, function error(response) {

            	alert("An error occured, check the console.");
                console.log(response);
            });
    };

    this.nextQuestion = function() {

        main.questionNum++;
        main.OptNumber++;

        if(main.questionNum < main.maxQuestions) {

            main.userAnswer(questionId , main.OptNumber);
            return main.questionNum;  

        } else {

            main.showThankU = true;
        }

    };

    this.skipQuestion = function() {

        main.OptNumber = -1;
        main.nextQuestion();
    };
    
    this.endSurvey = function() {

        if(confirm("Are you sure you want to end the survey?")) {
            return main.showThankU = true;   
        }    
    };
}]);