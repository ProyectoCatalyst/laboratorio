(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorInicioSesion', controladorInicioSesion);

  controladorInicioSesion.$inject = ['servicioUsuarios', 'authService'];

  function controladorInicioSesion(servicioUsuarios, authService) {
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

    vm.iniciarSesionFacebook = () => {
      
    }
  }
})();