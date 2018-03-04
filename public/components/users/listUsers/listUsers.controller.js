(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorListarUsuario', controladorListarUsuario);

  controladorListarUsuario.$inject = ['$http', 'servicioUsuarios', '$state', '$stateParams'];

  function controladorListarUsuario($http, servicioUsuarios, $state, $stateParams) {

    let vm = this;

    listarUsuarios();

    vm.listarUsuarios = servicioUsuarios.retornarUsuario();

    vm.agregarDifunto = (puser) => {
      $state.go('registerUndead', { objUsuario : JSON.stringify(puser)});
    };

    function listarUsuarios() {
      vm.listaUsuarios = servicioUsuarios.retornarUsuario();
    }
  }
})();