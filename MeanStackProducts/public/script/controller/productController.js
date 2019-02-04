app.controller("productCtrl", function($scope, productFact) {
    $scope.getProducts = function() {
        var promise = productFact.callServer(url.productsUrl);
        promise.then(function(data) {
            $scope.result = data.data;
        }, function(err) {
            $scope.result = err;
        })
    }
});
