(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorInicioSesion', controladorInicioSesion);

  controladorInicioSesion.$inject = ['$window', 'servicioUsuarios', 'authService', 'facebookService'];

  function controladorInicioSesion($window, servicioUsuarios, authService, facebookService) {
    let vm = this;

    vm.usuario = {};

    vm.iniciarSesion = (pusuario) => {

      let inicioCorrecto = authService.logIn(pusuario);

      if (inicioCorrecto == true){
        swal("Good job!", "You clicked the button!", "success");
      }else{
        swal("Good job!", "You clicked the button!", "error");
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
  }
})();