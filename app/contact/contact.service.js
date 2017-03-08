angular.module("contact").factory("contactService",["$http", function ($http) {
    var contacts = [];

    return {
        getContacts: function () {
            return $http.get("http://api-adressboken.azurewebsites.net/contact");
        },
        getContactById: function (id) {
            
            return $http.get("http://api-adressboken.azurewebsites.net/contact/" + id);
        },
        getContacsByCategoryId: function (id) {
            var c = [];
            angular.forEach(contacts, function (contact) {
                if (contact.categoryId == id){
                    c.push(contact);
                }
            });
            return c;
        }
    };
}]);