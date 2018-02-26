(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarFiesta', controladorRegistrarFiesta);

  controladorRegistrarFiesta.$inject = [ 'servicioFiesta'];

  function controladorRegistrarFiesta(servicioFiesta) {
    let vm = this;

    vm.fiestaNueva = {};
    vm.registrarFiesta = (pfiestaNueva) => {
      let objFiestaNueva = new fiestaNueva
      (pfiestaNueva.fecha,
        pfiestaNueva.horas,
        pfiestaNueva.pagoFiesta);

        let registro = servicioFiesta.agregarFiesta(objFiestaNueva);

        if(registro == true){
          swal({
            title: "Registro exitoso",
            text: "Fiesta correctamente registrado",
            icon: "success",
          });
        }
      }
    }
  }
)();