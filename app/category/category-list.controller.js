angular.module("category").controller("categoryListController", ["$scope", "$location", "categoryService",
    function ($scope, $location, categoryService) {
        $scope.categories = categoryService.getCategories();
        $scope.contactsInCategory = function (index) {
            var category = categoryService.getCategoryByIndex(index);
            $location.path("category/" + category.id);
        }
    }]);