angular.module("contact").controller("contactDetailController", ["$scope", "$routeParams", "contactService", "categoryService", function ($scope, $routeParams, contactService, categoryService) {
    contactService.getContactById($routeParams.contactId).then(function (response) {
        $scope.contact = response.data;
    }, function (errorResponse) {
        alert("ERRORRRR")
    });

    $scope.categories = categoryService.getCategories();

}]);