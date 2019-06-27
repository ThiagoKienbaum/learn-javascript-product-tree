 var app = angular.module('treasyChallenge', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/', {
    templateUrl: 'view/products.html',
    controller: 'ProductsListController',    
    })
    .when('/products/', {
        templateUrl: 'view/products.html',
        controller: 'ProductsListController',    
    })
    .when('/products/new', {
        templateUrl: 'view/add.html',
        controller: 'addController',    
    })
    .when('/products/add/:id', {
        templateUrl: 'view/add.html',
        controller: 'addController',    
    })
    .otherwise({
        redirectTo: '/'
    });
}
]);

app.factory('Produtos', function(){
    var service = {};
    service.entries = [
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
    return service;
});

app.controller("TreeController", ["$scope", function($scope) {
    $scope.appTitle = "Produtos";    
}]);

app.controller("ProductsListController", ["$scope", 'Produtos', function($scope, Produtos){
    $scope.productItem = Produtos.entries;
}]);

app.controller('addController', ['$scope', 'Produtos', '$routeParams', function($scope, Produtos, $routeParams) {
    $scope.someText = 'The world is round. ID=' + $routeParams.id;
}]);