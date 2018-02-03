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

        myData = { selectedOptionNumber : OptNumber };

        dataService.createAnswer(questionId, myData)

            .then(function success(response) {

                console.log(response);

            }, function error(response) {

            	alert("An error occured, check the console.");
                console.log(response);
            });
    };

    this.nextQuestion = function(questionId, fromSkipQuestion) {
        main.questionNum++;
        main.OptNumber = main.OptNumber + 1;

        if(fromSkipQuestion) {
            main.OptNumber = 0;            
        }

        if(main.questionNum === main.maxQuestions) {

            main.showThankU = true;
              

        } else {

            main.userAnswer(questionId, main.OptNumber);
            main.OptNumber = null;
            return main.questionNum;
        }
    };
    this.showNext = function() {
        main.next = true;
    }

    this.skipQuestion = function(questionId) {
        main.nextQuestion(questionId, true);
    };
    
    this.endSurvey = function() {

        if(confirm("Are you sure you want to end the survey?")) {
            return main.showThankU = true;   
        }    
    };
}]);