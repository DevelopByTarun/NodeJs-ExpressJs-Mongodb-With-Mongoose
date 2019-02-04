app.controller("loginCtrl", function($scope, loginFactory) {
    $scope.doLogin = function() {
        var loginObject = {
            username: $scope.uid,
            password: $scope.pwd
        }
        var promise = loginFactory.callServer(loginObject, url.loginUrl);
        promise.then(function(data) {
            $scope.result = data.data;
        }, function(err) {
            $scope.result = err;
        })
    }
});
