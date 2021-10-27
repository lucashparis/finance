// Rotas de navegação do sistema

angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles",
      templateUrl: "billingCycle/tabs.html"
    })

    $urlRouterProvider.otherwise('/dashboard')
  }
])