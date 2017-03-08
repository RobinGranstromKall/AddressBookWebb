angular.module("contact").controller("contactCreateController", ["$scope", "$routeParams", "$location", "contactService", "categoryService",
    function ($scope, $routeParams, $location, contactService, categoryService) {
        categoryService.getCategories().then(function (response) {
            $scope.contact = {};
            $scope.categories = response.data;
            $scope.contact.category = $scope.categories[0]

            $scope.createContact = function () {
                var newContact = {
                    firstname:  $scope.contact.firstname,
                    lastname:   $scope.contact.lastname,
                    email:      $scope.contact.email,
                    phone:      $scope.contact.phone,
                    categoryid: $scope.contact.category.id
                };
                $scope.saving = true;
                categoryService.createContact(newContact).then(function () {
                    $scope.saving = false;
                    $location.path("/contacts/");
                })

            };

        });

}]);