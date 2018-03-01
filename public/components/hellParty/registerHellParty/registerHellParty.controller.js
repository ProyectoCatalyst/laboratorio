(() => {
  'use strict';
  angular.module('laboratorio');
  angular.controller('controladorRegistrarFiesta', controladorRegistrarFiesta);
    //controladorRegistrarFiesta);

    controladorRegistrarFiesta.$inject = ['servicioFiesta'];

  function controladorRegistrarFiesta(servicioFiesta) {

    
    let vm = this;

    vm.fiestaNueva = {};
    vm.registrarFiesta = (pfiestaNueva) => {
      let objFiestaNueva = new Fiesta
      (pfiestaNueva.fecha,
        pfiestaNueva.horas);
 
        let registro = servicioFiesta.agregarFiesta(objFiestaNueva);


      }
    }
  }
)();