angular.module("category").factory("categoryService", function () {
    var categories = [
        { id: "1", name: "Vänner"},
        { id: "2", name: "Tikare"},
        { id: "2", name: "Gamers"}
    ];

    return {
        getCategories: function () { return categories},
        getCategoryByIndex: function (index) { console.log(categories[index]);return categories[index]},
        getCategoryById: function (id) {
            var c = null;
            angular.forEach(categories, function (category) {
                if (category.id == id){
                    c = category;
                }
            });
            return c;
        }
    };
});