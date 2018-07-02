/**
 * 
 */myModule.controller("BlogController",function($scope,$http,$rootScope,$location)
{

	$scope.blog={'blogId':0,'blogName':'','blogContent':'','createDate':'','loginname':'','likes':0,'dislikes':0,'status':''};

	$scope.blogData;
	
	$scope.addBlog=function()
	{
		alert("adding blog ctrl");
		$http.post('http://localhost:8085/project2Middleware/addBlog',$scope.blog)
		.then(function(response)
		{
			$location.path('/UserHome');
		});
	};
	
	function showBlog()
	{
		alert("show blog ctrl");
		$http.get('http://localhost:8085/project2Middleware/listBlogs')
		.then(function(response){
			$scope.blogData=response.data;
			console.log($scope.blogData);
		});
	};
	
	$scope.approve=function(blogId)
	{
		alert("approving blog ctrl");
		$http.get('http://localhost:8085/project2Middleware/approveBlog/'+blogId)
		.then(function(response){
			console.log('Approving the Blog');
		});
		
	}
	
	$scope.reject=function(blogId)
	{
		alert("regecting blog ctrl");
		$http.get('http://localhost:8085/project2Middleware/rejectBlog/'+blogId)
		.then(function(response){
			console.log('Rejecting the Blog');
		});
	}
	
	$scope.incLike=function(blogId)
	{
		alert("incrementing likes ctrl");
		$http.get('http://localhost:8085/project2Middleware/incrementLikes/'+blogId)
		.then(function(response){
			console.log('Incrementing the Likes in Blog');
		});
	}
	
	$scope.incDisLike=function(blogId)
	{
		alert("decrementing likes ctrl");
		$http.get('http://localhost:8085/project2Middleware/incrementDisLikes/'+blogId)
		.then(function(response){
			console.log('Decrementing the Likes in Blog');
		});
	}
	
	$rootScope.comment=function(blogId)
	{
		alert("blog comment ctrl");
		$http.get('http://localhost:8085/project2Middleware/getBlog/'+blogId)
		.then(function(response)
		{
			$rootScope.blogInfo=response.data;
			$location.path('/blogComment');	
		});
		
	}
	
	showBlog();
});
