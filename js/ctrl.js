
//controls the view, name & callback function


angular.module('app').controller('controller', function($scope){
	$scope.fun = "fun!";
	$scope.counter = 0;
	$scope.first = "Conor"
	$scope.last = "Larkin"
	$scope.admin = false;
	$scope.log = function(){
		console.log(++$scope.counter);
		
	}
	$scope.private = function(){
		$scope.admin = !$scope.admin;
	}
	
})