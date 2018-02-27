(() => {
  'use strict';

  angular.module('laboratorio')
  .controller('controladorModificarRetoques', controladorModificarRetoques);

  controladorModificarRetoques.$inject = ['$stateParams', '$state', 'servicioRetoques'];

  function controladorModificarRetoques($stateParams, $state, servicioRetoques){
    
    let vm = this;

    let objSinFormato = JSON.parse($stateParams.objRetoqueTemp);

    let objRetoque = new Retoque (objSinFormato.nombre, objSinFormato.precio);

    let retoques = objRetoque;

    mostrarRetoque();

    function mostrarRetoque(){

      console.log(retoques)
      vm.retoques = objRetoque;
      
    }

  }
})();