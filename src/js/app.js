const app = angular.module('myApp', []);

app.controller('MainController', ['$scope', ($scope) => {
    $scope.message = 'We are set to build our inverted index project';
}]);
