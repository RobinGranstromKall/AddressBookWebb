angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
        templateUrl: "app/app.template.html",
        controller: "appController"
        })
        .when("/contacts", {
            templateUrl: "app/contact/contact-list.template.html",
            controller: "contactListController"
        })
        .when("/contact/:contactId", {
            templateUrl: "app/contact/contact-detail.template.html",
            controller: "contactDetailController"
        })
        .when("/contact", {
        templateUrl: "app/contact/contact-create.template.html",
        controller: "contactCreateController"
        })
        .when("/login", {
            templateUrl: "app/login/login.template.html",
            controller: "loginController"
        })
        .when("/categories", {
            templateUrl: "app/category/category-list.template.html",
            controller: "categoryListController"
        })
        .when("/category/:categoryId", {
            templateUrl: "app/category/category-detail.template.html",
            controller: "categoryDetailController"
        })
        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);