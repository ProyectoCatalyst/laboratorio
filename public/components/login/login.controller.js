(() => {
  'use strict';
  angular
  .module('laboratorio')
  .controller('controladorInicioSesion', controladorInicioSesion);

  function controladorInicioSesion(){
    let vm = this;

    vm.usuario = {};

    vm.iniciarSesion = (pusuario) => {
      console.log(pusuario);
      
    }
  }
})();