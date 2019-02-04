app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
            templateUrl: "view/home.html"
        })
        .when("/product", {
            templateUrl: "view/products.html"
        })
        .otherwise({
            template: "<h1>Sorry, Don't Found Any File</h1>",
            redirectTo: "/"
        });
});