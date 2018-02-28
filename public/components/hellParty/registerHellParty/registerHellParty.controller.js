(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegisterHellParty', controladorRegisterHellParty);
    //controladorRegistrarFiesta);

    controladorRegisterHellParty.$inject = [ 'servicioFiesta'];

  function controladorRegisterHellParty(servicioFiesta) {

    
    let vm = this;

    vm.fiestaNueva = {};
    vm.registrarFiesta = (pfiestaNueva) => {
      let objFiestaNueva = new Fiesta
      (pfiestaNueva.fecha,
        pfiestaNueva.horas);
 
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