(() => {
  'use strict';

  angular.module('laboratorio')
  .controller('controladorManejarRetoques', controladorManejarRetoques)
  
  controladorManejarRetoques.$inject = ['$stateParams', '$state', 'servicioRetoques'];
  function controladorManejarRetoques($stateParams, $state, servicioRetoques){
    let vm = this;

    vm.retoques = {}

    vm.listaRetoques = servicioRetoques.getRetoques();

    listarRetoques();

    function listarRetoques(){
      vm.listaRetoques = servicioRetoques.getRetoques();
    }

    vm.modificarRetoque = (pretoques) => {
      // console.log (pretoques);
      $state.go('retouchmodify', { objRetoqueTemp : JSON.stringify(pretoques)});
    }

    vm.eliminarRetoque = (pretoques) => {
      let retoqueaeliminar = pretoques;
      servicioRetoques.deleteRetoques(retoqueaeliminar);

      $state.reload();
    }
  }
})();