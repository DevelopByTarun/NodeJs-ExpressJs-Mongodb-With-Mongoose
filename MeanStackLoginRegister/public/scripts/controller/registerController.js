app.controller("registerCtrl", function($scope, registerFactory) {
    $scope.doRegister = function() {
        var registerObject = {
            username: $scope.uid,
            password: $scope.pwd
        }
        var promise = registerFactory.callServer(registerObject, url.registerUrl);
        promise.then(function(data) {
            $scope.result = data.data;
        },function(err) {
            $scope.result = err;
        })
    }
});