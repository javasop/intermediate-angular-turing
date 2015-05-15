/**
 * Created by osama on 4/4/2015.
 */

var app = angular.module('human', ['hand','leg','head']);


app.controller('HumanController', function ($scope,human,handData) {
    console.log(handData)
    handData.fingers = 6
    console.log(human);
});

app.config(function(humanProvider){
    humanProvider.setType("super human");
});

app.service('humanStat', function () {
    this.name = "steph";
    this.age = 25;
    this.height = 6;
});
app.factory('humanStat', function () {
    return {
        name: "Steph",
        age:25,
        height:6
    };
});
app.provider("human", function () {
    var type;
    //configuration functions, called within app.config
    this.setType = function(t){
        type = t;
    };
    this.$get = function(){
        return {
            name: "Steph",
            age:25,
            height:6,
            type:type
        };
    }
});
