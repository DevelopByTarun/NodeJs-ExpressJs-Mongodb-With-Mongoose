app.controller("registerctrl",function($scope,regfactory){
    $scope.doRegister=function(){
        var userObject = {
            "userid":$scope.userid,
            "password":$scope.password,
            "phone":$scope.phone,
            "address":$scope.address
        };
        var promise = regfactory.registerUser(userObject);
        promise.then(function(data){
            console.log("SUCCESS ",data.data.msg);
            $scope.result = data.data.msg;
        },function(error){
            $scope.result = error;
        });
    }
})