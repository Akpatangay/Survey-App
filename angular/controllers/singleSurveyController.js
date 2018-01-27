app.controller('singleSurveyController', ['dataService', 'routeParams', function(dataService, routeParams) {
	var main = this;
	this.surveyId = $routeParams.surveyId;

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
}]);