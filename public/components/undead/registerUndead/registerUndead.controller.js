(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarUndead', controladorRegistrarUndead);

  controladorRegistrarUndead.$inject = ['servicioUsuarios'];

  function controladorRegistrarUndead(servicioUsuarios) {
    let vm = this;

    vm.undeadNuevo = {};

    vm.registrarUndead = (pUndeadNuevo) => {

      let objNuevoUndead = new Undead(pUndeadNuevo.apodo, pUndeadNuevo.genero, pUndeadNuevo.edad, pUndeadNuevo.edad);

      let registro = servicioUsuarios.agregarDifunto(objNuevoUsuario);

      if (registro == true) {
        swal({
          title: "Registro exitoso",
          text: "Difunto registrado correctamente registrado en el registro de difuntos :)",
          icon: "success"
        });
      }

    }
  }
})();