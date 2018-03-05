(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorListarUsuario', controladorListarUsuario);

  controladorListarUsuario.$inject = ['$http', '$state', '$stateParams', 'servicioUsuarios'];

  function controladorListarUsuario($http, $state, $stateParams, servicioUsuarios) {

    let vm = this;

    listarUsuarios();

    vm.listarUsuarios = servicioUsuarios.retornarUsuario();

    vm.agregarDifunto = (puser) => {
      $state.go('registerUndead', {objUsuario : JSON.stringify(puser)});
    };

    vm.listarDifunto = (puser) => {
      $state.go('listUndead', {objUsuario : JSON.stringify(puser)});
    };

    

    function listarUsuarios() {
      vm.listaUsuarios = servicioUsuarios.retornarUsuario();
    }
  }
})();