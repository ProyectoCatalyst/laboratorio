(() => {
  'use strict';
  angular
  .module('laboratorio')
  .controller('controladorListarUndead', controladorListarUndead);

  controladorListarUndead.$inject = ['$stateParams', '$state', 'servicioUsuarios'];

  function controladorListarUndead($stateParams, $state, servicioUsuarios){
    let vm = this;

    if(!$stateParams.objUsuario){
      $state.go('listUsers');
    }

    let objSinFormatoUsuario = JSON.parse($stateParams.objUsuario);

    console.log(objSinFormatoUsuario);

    vm.listarDifuntos = servicioUsuarios.retornarDifunto(objSinFormatoUsuario.cedula);

    vm.agregarEntierro = (pdifunto) => {
      $state.go('registrarEntierro', {objDifunto : JSON.stringify(pdifunto)});
    }

  }
})();