var myapp=angular.module('myModule',[]);
myapp.controller('myctrl',function($scope){
	$scope.msg="angular....";
	var myData={ name:"Durjoy",age:35}
	$scope.myData=myData;
	$scope.msg1="Hi Bangladesh";
	var employees=[{
		name:'Sharifur',
		salary:25000,
		designation:'Programmer'
	},
	{
		name:'Rashed',salary:22000,designation:'Assistant Programmer'
	},{name:'arman',salary:25000,designation:'ceo'}];
	$scope.employees=employees;
	/* to open a new object */
	var countries=[
	{
		name:"Bangladesh",
		cities:[{name:"Dhaka"},{name:"khulna"},{name:"Chandpur"}]
	},
	{
		name:"India",
		cities:[{name:"Dilli"},{name:"Panjab"},{name:"Kolkata"}]
	}]
 $scope.countries=countries;
 var image="Bangladesh.jpg";
 $scope.image=image;
});