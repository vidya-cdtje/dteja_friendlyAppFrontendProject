app.controller("ChatCtrl",['$scope','$rootScope','Service', function($scope,$rootScope, Service)
		{
	console.log('Starting Chat Controller');
	
	$scope.messages=[];
	$scope.message="";
	$scope.max=140;
	
	$scope.addMessage=function()
	{
		console.log('Adding Message Method');
		Service.send($rootScope.currentUser.loginname+":"+$scope.message);
		$scope.message="";
	}
	
	Service.receive().then(null,null,function(message){
		console.log('Receive Method');
		$scope.messages.push(message);
	});
}]);