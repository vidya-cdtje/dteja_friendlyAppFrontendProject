/**
 * user controller
 */

myModule.controller("UserController",function($http,$scope, $rootScope, $location)
		{
		alert("User login ctrl");
		$scope.user={'loginname':'', 'password':'', 'username':'','emailid':'', 'mobile':'', 'role':'','address':''}
		$scope.checklogin=function(){
			console.log('checklogin function');
			console.log($scope.user);
			$http.post('http://localhost:8085/project2Middleware/checkLogin',$scope.user)
			.then(function(response){
				$scope.user=response.data;
				$rootScope.currentUser=response.data;
				console.log('user is correct');
				$location.path("/UserHome")
			});
		}
		
		$scope.register=function()
		{
			alert("User register ctrl")
			console.log('register function');
			console.log($scope.user);
			$scope.user.role='ROLE_USER';
			$http.post('http://localhost:8085/project2Middleware/registerUser',$scope.user)
			.then(function(response){
				console.log('user registered');
				$rootScope.currentUser=$scope.user;
				$location.path("/UserHome");
			})
		}
		});