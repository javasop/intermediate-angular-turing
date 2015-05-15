/**
 * Created by osama on 4/4/2015.
 */

var app = angular.module('human', []);


app.controller('HumanController', function ($scope,humanData) {
    handData.fingers = 6
    headData.get().success(function(hData){
        console.log(hData);
    })
});

app.service('humanData', function () {
    this.name = "steph";
    this.age = 25;
    this.height = 6;
});
