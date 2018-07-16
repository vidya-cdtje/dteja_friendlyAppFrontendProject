/**
 * friend controller js
 */
myModule.controller("FriendController", function($scope, $http, $rootScope, $location, $cookieStore)
		{
			$scope.user={'loginname':'','passwoprd':'','username':'','emailid':'','mobile':'', 'role':'', 'status':''};
			$scope.friend={'friendId':'','loginname':'', 'friendloginname':'', 'status':'' };
			$scope.showFriendList;
			$scope.showSuggestedFriends;
			$scope.showPendingFriendRequests;
			
			$scope.unFriend=function(friend){
				$http.get('http://localhost:8085/project2Middleware/deleteFriendRequest/'+friend.friendId)
				.then(function(response){
					console.log("friend/friend request deleted");
				});

			};
			
			$scope.acceptFriend=function(friend){
				$http.get('http://localhost:8085/project2Middleware/acceptFriendRequest/'+friend.friendId)
				.then(function(response){
					console.log("friend request accepted");
				});

			};
			
			$scope.sendFriendRequest=function(friend){
				$scope.friend.loginname=$rootScope.currentUser.loginname;
				$scope.friend.friendloginname=friend.loginname;
				console.log('send friend request');
				console.log($scope.friend.loginname +' to');
				console.log($scope.friend.friendloginname);
				$scope.friend.status='NA';
				$http.post('http://localhost:8085/project2Middleware/sendFriendRequest/',$scope.friend)
				.then(function(response){
					console.log("friend request sent");
				});

			};
			
			function showFriendList()
				{console.log($rootScope.currentUser);
				$http.get('http://localhost:8085/project2Middleware/showFriendList/'+$rootScope.currentUser.loginname)
				.then(function(response)
						{
						$scope.showFriendList=response.data;
						console.log('friendlist',response.data);
						});
				};
			function showSuggestedFriends()
			{
			$http.get('http://localhost:8085/project2Middleware/showSuggestedFriends/'+$rootScope.currentUser.loginname)
			.then(function(response)
					{
					$scope.showSuggestedFriends=response.data;
					});
			
			};
			function showPendingFriendRequests()
			{
			$http.get('http://localhost:8085/project2Middleware/showPendingFriendRequests/'+$rootScope.currentUser.loginname)
			.then(function(response)
					{
					$scope.showPendingFriendRequests=response.data;
					});
			};
			
			showFriendList();
			showSuggestedFriends();
			showPendingFriendRequests();
		});
