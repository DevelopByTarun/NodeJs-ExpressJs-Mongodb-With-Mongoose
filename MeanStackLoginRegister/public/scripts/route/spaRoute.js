app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
            templateUrl: "view/home.html"
        })
        .when("/login", {
            templateUrl: "view/login.html"
            // controller: "loginCtrl"
        })
        .when("/register", {
            templateUrl: "view/register.html"
            // controller: "registerCtrl"
        })
        .when("/product", {
            templateUrl: "view/products.html"
            // controller: "productCtrl"
        })
        .otherwise({
            template: "<h1>Sorry, Don't Found Any File</h1>",
            redirectTo: "/"
        });
});