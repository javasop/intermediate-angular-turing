/**
 * Created by osama on 4/4/2015.
 */

var head = angular.module('head', []);

head.controller('HeadController', function ($scope) {

});
head.service('HeadData', function ($scope,$http) {
    this.getHeadData = function(){
        return $http.get("../dummy/head.json")
    }
});