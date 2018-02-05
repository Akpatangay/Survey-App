app.controller('singleSurveyController', ['dataService', '$routeParams', function(dataService, $routeParams) {
    var main = this;
    this.surveyId = $routeParams.surveyId;
    this.maxQuestions = 0;
    this.questionNum = 0; //initializing questNum to zero to increment when the next/skip button is clicked
    this.showThankU = false; //to hide the thank you message when 
    this.next = false;

    //to fetch a single survey when the page loads
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

    //to fetch all questions when the page loads
    this.fetchQuestions = function() {
        dataService.getQuestions(main.surveyId)
            .then(function success(response) {
                main.question = response.data.data;
                main.maxQuestions = main.question.length;
                console.log(response);
            }, function error(response) {
                alert("An error occured, check the console.");
                console.log(response);
            });
    }();

    //to store the answers chosen by user
    this.userAnswer = function(questionId, OptNumber) {
        myData = { selectedOptionNumber: OptNumber };
        dataService.createAnswer(questionId, myData)
            .then(function success(response) {
                console.log(response);
            }, function error(response) {
                alert("An error occured, check the console.");
                console.log(response);
            });
    };//end of userAnswer function

    //to diplay single question on clicking next button
    this.nextQuestion = function(questionId, fromSkipQuestion) {
        //to display next question on clicking next
        main.questionNum++;
        //incrementing to take the actual option number and not the index of the option
        main.OptNumber = main.OptNumber + 1;
        //to change the option value to zero when a question is skipped
        if (fromSkipQuestion) {
            main.OptNumber = 0;
        }
        //to show thank you message after taking the last question of the survey
        if (main.questionNum === main.maxQuestions) {
            main.showThankU = true;
        }
        main.userAnswer(questionId, main.OptNumber);
        //option number is made null for each question as it is getting incremented above
        main.OptNumber = null;
        //next is assigned false for every question
        main.next = false;
        return main.questionNum;
    };

    //to show the next button when an option is selected
    this.showNext = function() {
        main.next = true;
    };

    //function invoked on clicking skip option
    this.skipQuestion = function(questionId) {
        main.nextQuestion(questionId, true);
    };
    
    //function to show thank you if the user wishes to end the survey in between
    this.endSurvey = function() {
        if (confirm("Are you sure you want to end the survey?")) {
            return main.showThankU = true;
        }
    };
}]);