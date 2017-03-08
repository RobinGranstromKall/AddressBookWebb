angular.module("contact").controller("contactDetailController", ["$scope", "$routeParams", "contactService", function ($scope, $routeParams, contactService) {
    $scope.contact = contactService.getContactById($routeParams.contactId);

}]);