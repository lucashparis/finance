(function() {
  
  angular.module('primeiraApp').controller('dashboardCtrl', [
    '$http',
    dashboardCtrl
  ])
  
  function dashboardCtrl($http) {
    
    const vm = this;
    vm.getSummary = function () {
      const url = 'http://localhost:3003/api/billingSummary';
      $http.get(url).then(function(response) {
        const {credit = 0, debt = 0} = response.data;
        vm.credit = credit;
        vm.debt = debt;
        vm.total = credit - debt;
      })
    }

    vm.getSummary();

  }
})()