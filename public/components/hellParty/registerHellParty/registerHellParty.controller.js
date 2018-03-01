(() => {
  'use strict';
  angular
  
  .module('laboratorio')
  .controller('controladorRegistrarFiesta',controladorRegistrarFiesta);
    //controladorRegistrarFiesta);

    controladorRegistrarFiesta.$inject = ['$stateParams','$state','servicioFiesta'];

  function controladorRegistrarFiesta(servicioFiesta) {

    
    let vm = this;

    vm.fiestaNueva = {};
    vm.registrarFiesta = (pfiestaNueva) => {
      
      console.log(pfiestaNueva)
      
      let objFiestaNueva = new Fiesta
      (pfiestaNueva.fecha,
        pfiestaNueva.horas);
 

        
        let registro = servicioFiesta.agregarFiesta(objFiestaNueva);


      }
    }
  }
)();