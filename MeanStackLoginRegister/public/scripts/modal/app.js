var app = angular.module("meanStackProblemApp", ['ngRoute']);
app.config([
    '$qProvider', function($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }
]);