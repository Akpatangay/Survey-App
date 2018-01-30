app.controller('createQuestionController', ['dataService', '$routeParams', '$location', function(dataService, $routeParams, $location) {
	var main = this;
	this.surveyId = $routeParams.surveyId;

	 this.cretQuestion = function() {

	 	data = { question : main.question };

	 	dataService.createQuestion(surveyId, data)
	 	.then(function success(response) {

	 		alert("Question created successfully!");
	 		console.log(response);

	 		$location.path('/admin/main.surveyId');

	 	}, function error(response) {
	 		
	 		alert("Some error has occured, please check the console.");
	 		console.log(response);
	 	})
	 };
}]);

