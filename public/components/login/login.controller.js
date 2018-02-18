(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorInicioSesion', controladorInicioSesion);

  controladorInicioSesion.$inject = ['servicioUsuarios'];

  function controladorInicioSesion(servicioUsuarios) {
    let vm = this;

    vm.usuario = {};

    vm.iniciarSesion = (pusuario) => {
     
      //servicioUsuarios.agregarUsuario(pusuario);

    }
  }
})();