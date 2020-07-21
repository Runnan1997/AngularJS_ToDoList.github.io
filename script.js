var myApp = angular.module("myList",[]);
myApp.controller("myListController", function($scope){
    $scope.items = ["Study for CEG", "Prep for Interview", "Yoga Time"];
    $scope.newItem = "";
    $scope.pushItem = function(){
        if($scope.newItem != ""){
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }
    }
    $scope.popItem = function(index){
        $scope.items.splice(index, 1);
    }
});