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

      let objNuevoUndead = new Difunto (pUndeadNuevo.apodo, pUndeadNuevo.genero, pUndeadNuevo.edad, pUndeadNuevo.tamanno);

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