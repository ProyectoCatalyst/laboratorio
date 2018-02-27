(() => {
  'use strict';
  angular
  .module('laboratorio')
  .controller('controladorAgregarRetoques', controladorAgregarRetoques);

  controladorAgregarRetoques.$inject = ['$stateParams', '$state', 'servicioRetoques']; //nombre del servicio

  function controladorAgregarRetoques($stateParams, $state, servicioRetoques){
    let vm = this;

    vm.nuevoRetoque = {}; // agregar retoques por defecto
    // vm.listaRetoques = listarRetoques();

    // listarRetoques();

    vm.registrarRetoques = (pnuevoRetoque) => {
      let objNuevoRetoque = new Retoque (pnuevoRetoque.nombre, pnuevoRetoque.precio);

      servicioRetoques.addRetoques(objNuevoRetoque);

      vm.nuevoRetoque = null;
    }

    vm.mostrarRetoques = () => {
      $state.go('retouchmanage');
    }
  }
})();