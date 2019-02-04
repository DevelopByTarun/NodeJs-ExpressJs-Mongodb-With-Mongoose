app.factory("registerFactory", function ($http, $q) {
    var object = {
        callServer: function (registerObject, url) {
            var defered = $q.defer();
            $http.post(url, registerObject)
                .then(function (data) {
                    defered.resolve(data);
                }, function (err) {
                    defered.reject(err);
                });
            return defered.promise;
        }
    }
    return object;
})