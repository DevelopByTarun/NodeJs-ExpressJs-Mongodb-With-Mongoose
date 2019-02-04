app.factory("loginFactory", function ($http, $q) {
    var object = {
        callServer: function (loginObject, url) {
            var defered = $q.defer();
            $http.post(url, loginObject)
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