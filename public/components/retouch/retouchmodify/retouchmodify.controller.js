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

    vm.retoqueModificado = {};

    vm.modificarRetoque = (pretoqueModificado) => {
      let objNuevoRetoque = new Retoque (pretoqueModificado.nombre, pretoqueModificado.precio);

      // console.log(vm.retoqueoriginal);
      // console.log(objNuevoRetoque); // va a mostrar el objeto modificado

      let aDatos = [objRetoque, objNuevoRetoque];

      // console.log(aDatos); aDatos contiene el objeto que estoy modificando junto con los datos que voy a reemplazar 

      servicioRetoques.modifyRetoques(aDatos);
      vm.retoqueModificado = null
      $state.go('retouchmanage');    
    }


  }
})();