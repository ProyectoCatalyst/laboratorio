(() => {
  'use strict';

  angular.module('laboratorio')
  .controller('controladorManejarRetoques', controladorManejarRetoques)
  
  controladorManejarRetoques.$inject = ['servicioRetoques'];
  function controladorManejarRetoques(servicioRetoques){
    let vm = this;

    vm.retoques = {}

    vm.listaRetoques = servicioRetoques.getRetoques();

    listarRetoques();

    function listarRetoques(){
      vm.listaRetoques = servicioRetoques.getRetoques();
    }

  }
})();