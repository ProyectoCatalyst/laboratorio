(() => {
  'use strict';

  angular.module('laboratorio')
  .controller('controladorModificarRetoques', controladorModificarRetoques)
  
  controladorModificarRetoques.$inject = ['servicioRetoques'];
  function controladorModificarRetoques(servicioRetoques){
    let vm = this;

    vm.retoques = {}

    vm.listaRetoques = servicioRetoques.getRetoques();

    listarRetoques();

    function listarRetoques(){
      vm.listaRetoques = servicioRetoques.getRetoques();
    }

  }
})();