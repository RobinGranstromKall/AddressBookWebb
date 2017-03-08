angular.module("contact").controller("contactListController", ["$scope", "$location", "contactService", function ($scope, $location, contactService) {
    contactService.getContacts().then(function (response) {
        $scope.contacts = response.data;
    });
    $scope.goToContact = function (id) {
        $location.path("contact/" + id);
    }
}]);