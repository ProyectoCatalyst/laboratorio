(() => {
  'use strict';

  angular.module('laboratorio')
  .controller('controladorModificarRetoques', controladorModificarRetoques);

  controladorModificarRetoques.$inject = ['$stateParams', '$state', 'servicioRetoques'];

  function controladorModificarRetoques($stateParams, $state, servicioRetoques){
    
    let vm = this;

    let objSinFormato = JSON.parse($stateParams.objRetoqueTemp); // tomar objeto que me envia el state manage

    let objRetoque = new Retoque (objSinFormato.nombre, objSinFormato.precio); // darle formato al objeto que recibo del state anterior

    vm.retoqueoriginal = objRetoque; // asignar el objeto a la lista la cual se va  a llamar desde la vista para mostrar el objeto original antes de moficarlo

    vm.modificarRetoque = (pretoqueModificado) => {
      let objRetoque = new Retoque (pretoqueModificado.nombre, pretoqueModificado.precio);

      console.log(vm.retoqueoriginal);
      console.log(objRetoque); // cva a mostrar el nombre modificado como indefinido ya que no logra pasar los datos


    }

  }
})();