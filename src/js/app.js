 var app = angular.module('treasyChallenge', ['ngRoute']);

// Views
app.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
    templateUrl: 'view/products.html',
    controller: 'ProductsListController',    
    })
    .when('/add', {
        templateUrl: 'view/add.html',
        controller: 'addController',    
    })
    .when('/add/edit/:id', {
        templateUrl: 'view/add.html',
        controller: 'addController',    
    })
    .otherwise({
        redirectTo: '/'
    });
}
]);

//Lista de produtos
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
    ];

    service.save = function(entry){
        service.entries.push(entry);
    }

    return service;
});

//Controladores
app.controller("TreeController", ["$scope", function($scope) {
    $scope.appTitle = "Produtos";    
}]);

app.controller("ProductsListController", ["$scope", 'Produtos', function($scope, Produtos){
    $scope.productItem = Produtos.entries;
}]);

app.controller('addController', ['$scope', 'Produtos', '$location',  '$routeParams', function($scope, $location, Produtos, $routeParams) {
    $scope.viewTitle = "Adicionar Item*";
    $scope.productCode = "Código do produto*";
    $scope.productName = "Nome do produto";
    $scope.productObs = "Observação"
    $scope.textoAuxiliar = "*Campos obrigatórios"

    if(!$routeParams.id) {
        $scope.produtos = {id: 13, itemName: "Novo", obs: "new"};
    }

    $scope.save = function() {
        Produtos.save($scope.produtos);
        $location.path('/');
    }

}]);