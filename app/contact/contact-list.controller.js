angular.module("contact").controller("contactListController", ["$scope", "$location", "contactService", "categoryService",
    function ($scope, $location, contactService, categoryService) {
        var categories;
        categoryService.getCategories().then(function (response) {
            categories = response.data;
            contactService.getContacts().then(function (response) {
                var contacts = response.data;
                angular.forEach(contacts, function (contact) {
                    angular.forEach(categories, function (category) {
                        if (contact.categoryid == category.id) {
                            contact.categoryName = category.name;
                        }
                    })
                });
                $scope.contacts = contacts;
            });
        });

        $scope.goToContact = function (id) {
            $location.path("contact/" + id);
        };
        // $scope.categoryName = function (id) {
        //     categoryService.getCategoryById(id).name;
        // }
    }]);