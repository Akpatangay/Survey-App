app.controller('mainController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {

	var uName = "admin";
	var pwd = "password";
    $scope.formSubmit = function(ev) { 
    	ev.preventDefault();
    	if($scope.username == "" || $scope.username == null || $scope.username != uName || $scope.password == "" || $scope.password == null || $scope.password != pwd ) {
    		alert("Please enter valid username or password.");
    	} else {
            $rootScope.loggedIn = true;
    		$location.path('/admin/allSurveys');
    	}
    };

}]);