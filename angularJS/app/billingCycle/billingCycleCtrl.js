(function() {
  angular.module('primeiraApp').controller('billingCycleCtrl', [
    '$http',
    'msgs',
    billingCycleCtrl
  ])

  function billingCycleCtrl($http, msgs) {
    const vm = this;

    vm.create = function() {
      const url = 'http://localhost:3003/api/billingCycles';
      $http.post(url, vm.billingCycle).then(function(response) {
        vm.billingCycle = {};
        msgs.addSuccess('Operação realizada com Sucesso!');
      }).catch(function(response) {
        msgs.addError(response.errors);
      })
    }

  }

})()