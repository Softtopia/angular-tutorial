'use strict';
var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.comments = [];
    $scope.comment = "";

    $scope.addComment = function() {
        $scope.comments.push({ text: $scope.comment, likes : 0 });
        $scope.comment = "";
    };
    $scope.like = function(item) {
        item.likes ++;
    }

    $scope.removeComment = function(item) {
        var index = $scope.comments.indexOf(item);
        $scope.comments.splice(index);
    }
}]);
