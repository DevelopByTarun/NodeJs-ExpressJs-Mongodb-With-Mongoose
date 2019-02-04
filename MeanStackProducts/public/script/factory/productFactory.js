app.factory("productFact", function ($http, $q) {
    var object = {
        callServer: function (url) {
            var defered = $q.defer();
            $http.get(url)
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
