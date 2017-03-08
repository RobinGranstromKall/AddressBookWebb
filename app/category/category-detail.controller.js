angular.module("category").controller("categoryDetailController", ["$scope", "$routeParams", "categoryService", "contactService",
    function ($scope, $routeParams, categoryService, contactService) {
        $scope.contactCategory = contactService.getContacsByCategoryId($routeParams.categoryId)
        $scope.categories = categoryService.getCategories();
        $scope.categoryId = $routeParams.categoryId;
}]);