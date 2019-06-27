 var app = angular.module('treasyChallenge', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider
        .otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'view/products.html'
        })
        .state('products', {
            url: 'view/products',
            templateUrl: 'products.html'
        });
});

app.controller("TreeController", ["$scope", function($scope) {
    $scope.appTitle = "Produtos";    
}]);

app.controller("ProductsListController", ["$scope", function($scope){
    $scope.productItem = [
        {id: 01, itemName: "Campo Confecções", obs: "Todos os itens"},
        {id: 02, itemName: "Bermudas", obs: "Todos os itens"},
        {id: 03, itemName: "Calças", obs: "Todos os itens"},
        {id: 04, itemName: "Sarja (m)", obs: "Todos os itens"},
        {id: 05, itemName: "Social", obs: "Todos os itens"},
        {id: 06, itemName: "Camisas", obs: "Todos os itens"},
        {id: 07, itemName: "Esporte", obs: "Todos os itens"},
        {id: 08, itemName: "Gola Polo", obs: "Todos os itens"},
        {id: 09, itemName: "Grife", obs: "Todos os itens"},
        {id: 10, itemName: "Lacoste", obs: "Todos os itens"},
        {id: 11, itemName: "Social", obs: "Todos os itens"},
        {id: 12, itemName: "Terno", obs: "Todos os itens"},
    ]
}]);