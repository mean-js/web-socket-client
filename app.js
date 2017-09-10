var app = angular.module("app", ["ngMaterial"]);

app.controller("indexCtrl", ["$scope", function($scope) {
    console.log("Index Controller");

    var cardObj = {
        "title": "Affixus Sytstems Pvt Ltd",
        "ts": moment().toDate(),
        "bg": { "background-color": "#abc" }
    };
    $scope.refjson = {
        "cardList": [cardObj]
    }

    var wsUrl = `http://192.168.0.104:3010/sse-api`;


}]);