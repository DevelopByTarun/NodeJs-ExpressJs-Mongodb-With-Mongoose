app.controller("loginctrl",function($scope,loginfact){
      $scope.doRegister=function(){
        var userObject = {
            "userid":"ddddd"
        };
        var promise = loginfact.registerUser(userObject);
        promise.then(function(data){
            console.log("SUCCESS ",data.data.msg);
            $scope.result = data.data.msg;
        },function(error){
            $scope.result = error;
        });
    }
})



