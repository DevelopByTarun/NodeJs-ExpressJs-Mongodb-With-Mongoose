var app = angular.module("productProblemApp", ['ngRoute']);
app.config([
    '$qProvider', function($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }
]);