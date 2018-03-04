(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorInicioSesion', controladorInicioSesion);

  controladorInicioSesion.$inject = ['$stateParams', '$state', '$window', 'servicioUsuarios', 'authService'];

  function controladorInicioSesion($stateParams, $state, $window, servicioUsuarios, authService) {
    let vm = this;

    vm.usuario = {};

    vm.iniciarSesion = (pusuario) => {

      let inicioCorrecto = authService.logIn(pusuario);

      if (inicioCorrecto == true){
        swal("Correcto!", "Redirigiendo", "success");
        $state.go('listUsers', {objUsuarioTemp: JSON.stringify(pusuario)});
      }else{
        swal("Error!", "Datos erroneos", "error");
      }
    }

    vm.iniciarSesionFacebook = ($window) => {
      FB.init({ 
        appId: '1128360287299589',
        status: true, 
        cookie: true, 
        xfbml: true,
        version: 'v2.12'
      });
    }

    vm.registrar = () => {
      $state.go('register');
    }
  }
})();