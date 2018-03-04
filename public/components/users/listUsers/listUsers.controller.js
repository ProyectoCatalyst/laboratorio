(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorListarUsuario', controladorListarUsuario);

<<<<<<< HEAD
  controladorListarUsuario.$inject = ['$state', '$stateParams', '$http', 'servicioUsuarios'];

  function controladorListarUsuario($state, $stateParams, $http, servicioUsuarios) {
=======
  controladorListarUsuario.$inject = ['$http', '$state', '$stateParams', 'servicioUsuarios'];

  function controladorListarUsuario($http, $state, $stateParams, servicioUsuarios) {
>>>>>>> master

    let vm = this;

    // if(!$stateParams.objUsuarioTemp){
    //   $state.go('login');
    // }

    // let objSinFormatoUsuario = JSON.parse($stateParams.objUsuarioTemp);
    // console.log(objSinFormatoUsuario);

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