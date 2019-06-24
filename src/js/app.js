 var app = angular.module('treasyChallenge', []);

app.controller("TreeController", ["$scope", function($scope) {
    $scope.appTitle = "Produtos";
}]);

app.controller("ProductsListController", ["$scope", function($scope){
    $scope.productItem = [
        {id: 01, completed: true, itemName: "Campo Confecções", obs: "Todos os itens"},
        {id: 02, completed: true, itemName: "Bermudas", obs: "Todos os itens"},
        {id: 03, completed: true, itemName: "Calças", obs: "Todos os itens"},
        {id: 04, completed: true, itemName: "Sarja (m)", obs: "Todos os itens"},
        {id: 05, completed: true, itemName: "Social", obs: "Todos os itens"},
        {id: 06, completed: true, itemName: "Camisas", obs: "Todos os itens"},
        {id: 07, completed: true, itemName: "Esporte", obs: "Todos os itens"},
        {id: 08, completed: true, itemName: "Gola Polo", obs: "Todos os itens"},
        {id: 09, completed: true, itemName: "Grife", obs: "Todos os itens"},
        {id: 10, completed: true, itemName: "Lacoste", obs: "Todos os itens"},
        {id: 11, completed: true, itemName: "Social", obs: "Todos os itens"},
        {id: 12, completed: true, itemName: "Terno", obs: "Todos os itens"},
    ]
}]);