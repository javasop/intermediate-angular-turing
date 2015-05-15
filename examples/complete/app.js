/**
 * Created by osama on 4/4/2015.
 */
var app = angular.module('todo', []);

app.config(function(gameProvider){
    gameProvider.setType("hi");
});

app.controller('TodoController', function ($scope,game) {

    console.log(game);

    $scope.todos = [];
    $scope.currentTodo = "";

    $scope.addTodo = function (todo) {
        todoObject = {
            name: todo,
            done: false
        };
        $scope.todos.push(todoObject);
    };
    $scope.deleteTodo = function (todo) {
        index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1)
    }
});
app.service('ser', function () {
    this.helloThere = "I am here";
    this.name = "hello";
});
app.factory('serf', ["ser", function (ser) {
    return {name: "serf"};
}]);
app.provider("game", function () {
    var type;
    //configuration functions, called within app.config
    this.setType = function(t){
        type = t;
    };
    this.$get = function(){
        return {typo:type}
    }
});