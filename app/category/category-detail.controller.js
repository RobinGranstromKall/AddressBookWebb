angular.module("category").controller("categoryDetailController", ["$scope", "$routeParams", "categoryService", "contactService",
    function ($scope, $routeParams, categoryService, contactService) {
        $scope.contactCategory = contactService.getContacsByCategoryId($routeParams.categoryId)
        categoryService.getCategories().then(function (response) {
            $scope.categories = response.data
        })
        $scope.categoryId = $routeParams.categoryId;
}]);