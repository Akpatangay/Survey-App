app.controller('mainController', ['$scope', '$location', function($scope, $location) {

	var uName = "admin";
	var pwd = "password";

    $scope.formSubmit = function(ev) { 
    	ev.preventDefault();
    	if($scope.username == "" || $scope.username == null || $scope.password == "" || $scope.password == null) {
    		alert("Please enter valid username and password.");
    	} else {
    		$location.path('/admin/allSurveys');
    	}
    };

}]);