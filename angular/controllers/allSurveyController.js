app.controller('allSurveyController', ['dataService', function(dataService) {
	var main = this;
	this.entireData = [];

	this.fetchAllSurveys = function() {

		dataService.getSurveys()
			.then(function success(response){

			   console.log(response);
				main.entireData = response.data.data;
				
		},  function error(response) {

				alert("some error occured, check the console.");
				console.log(response);
		});
	}();
}]);