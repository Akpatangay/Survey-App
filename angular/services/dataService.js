app.service('dataService', function($http) { 

    var main = this;
    this.url = "https://projectsapi.edwisor.com/api/surveys/";

    //surveys section

    this.getSurveys = function() {
        return $http({
            method: "GET",
            url: main.url
        })
    }

    this.createSurvey = function(data) {
    	return $http({
    		method: "POST",
    		url   : main.url + 'create',
            data  : data
    	})
    }
    this.getSingleSurvey = function(surveyId) {
    	return $http({
    		method: "GET",
    		url   : main.url + surveyId,

    	})
    }
    this.editSurvey = function(surveyId, data) {
    	return $http({
    		method: "PUT",
    		url   : main.url + surveyId + '/edit',
            data  : data
    	})
    }
    this.deleteSurvey = function(surveyId) {
        return $http({
            method: "POST",
            url: main.url + surveyId + '/delete'
        })
    }

    //questions section

    this.createQuestion = function(surveyId, data) {
        return $http({
            method: "POST",
            url   : main.url + surveyId + '/question/create',
            data  : data
        })
    }
    this.getQuestions = function(surveyId) {
        return $http({
            method: "GET",
            url: main.url + surveyId + '/questions/all'
        })
    }
    this.editQuestion = function(questionId, data) {
        return $http({
            method: "PUT",
            url   : main.url + 'questions/' + questionId + '/edit',
            data  : data

        })
    }
    this.deleteQuestion = function(questionId) {
        return $http({
            method: "POST",
            url: main.url + 'questions/' + questionId + '/delete'
        })
    }

    //options section

    this.createOption = function(data) {
        return $http({
            method: "POST",
            url   : main.url + 'questions/' + questionId + '/options/create',
            data  : data
    
        })
    }
    this.deleteOption = function(questionId) {
        return $http({
            method: "POST",
            url: main.url + 'questions/' + questionId + '/options/delete'
        })
    }

    //answers section 

    this.createAnswer = function(OptId, myData) {
        return $http({
            method: "POST",
            url   : main.url + 'questions/' + questionId + '/answer/create',
            myData  : myData

        })
    }
    this.deleteAnswer = function(questionId) {
        return $http({
            method: "POST",
            url: main.url + 'questions/' + questionId + '/answers/delete'
        })
    }

});