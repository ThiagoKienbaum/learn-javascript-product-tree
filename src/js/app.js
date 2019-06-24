 var app = angular.module('treasyChallenge', []);

app.controller("TreeController", ["$scope", function($scope) {
    $scope.appTitle = "Produtos";
}]);

app.controller("ProductsListController", ["$scope", function($scope){
    $scope.productItem = [
        {completed: true, itemName: "Campo Confecções", code: 001},
        {completed: true, itemName: "Bermudas", code: 002},
        {completed: true, itemName: "Calças", code: 003},
        {completed: true, itemName: "Sarja (m)", code: 004},
        {completed: true, itemName: "Social", code: 005},
        {completed: true, itemName: "Camisas", code: 006},
        {completed: true, itemName: "Esporte", code: 007},
        {completed: true, itemName: "Gola Polo", code: 008},
        {completed: true, itemName: "Grife", code: 009},
        {completed: true, itemName: "Lacoste", code: 010},
        {completed: true, itemName: "Social", code: 011},
        {completed: true, itemName: "Terno", code: 012},
    ]
}]);