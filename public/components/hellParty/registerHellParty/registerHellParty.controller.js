(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarFiesta', controladorRegistrarFiesta);

    controladorRegistrarFiesta.$inject = ['$stateParams','$state','$http','servicioFiesta'];

  function controladorRegistrarFiesta($stateParams, $state, $http, servicioFiesta) {
    let vm = this;

    vm.FiestaNueva = {};
    vm.listaFiestas = listarFiestas();

    listarFiestas();
    vm.registrarFiesta = (pfiestaNueva) => {
      console.log(pfiestaNueva);
      let objNuevoFiesta = new Fiesta (pfiestaNueva.fecha, pfiestaNueva.costoHora,
      pfiestaNueva.pilar,
      pfiestaNueva.andrey,
      pfiestaNueva.tipoPagoFiesta,
      0
    );

      console.log('objeto con fiesta');
      console.log(objNuevoFiesta);

      servicioFiesta.agregarFiestas(objNuevoFiesta);
        swal({
          title: "Registro exitoso",
          text: "Se ha registrado una fiesta nuevanEl dia  la duración será de "+pfiestaNueva.costoHora+" horas y el costo es de: "+pfiestaNueva.costoTotal,
          icon: "success",
          button: "Aceptar"
        });
      
      vm.FiestaNueva = null;
      listarFiestas();
      }

      function listarFiestas(){
        vm.listaFiestas = servicioFiesta.retornarFiesta(); 
      }

      


      
    }

})();