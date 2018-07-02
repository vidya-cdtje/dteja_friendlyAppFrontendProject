/**
 * route!
 */
var myModule=angular.module("MyModule", ['ngRoute']);
myModule.config(function($routeProvider)
{
	alert('this is route conofig');
	$routeProvider.when("/",{templateUrl:"/index.html"})
				  .when("/login",{templateUrl:"f_user/Login.html"})
				  .when("/register",{templateUrl:"f_user/Register.html"})
				  .when("/profilePic",{templateUrl:"f_user/ProfilePictureUpload.html"})

				  .when("/home",{templateUrl:"f_headerpages/Home.html"})
				  .when("/aboutus",{templateUrl:"f_headerpages/AboutUs.html"})
				  .when("/contactus",{templateUrl:"f_headerpages/ContactUs.html"})
				  
				  .when("/addBlog",{templateUrl:"c_blog/AddBlog.html"})
				  .when("/showBlog",{templateUrl:"c_blog/ShowBlog.html"})
				  .when("/adminBlog",{templateUrl:"c_blog/AdminBlog.html"})
				  
	});