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

    vm.mostrarInfo=mostrarPrecio();

    vm.registrarFiesta = (pfiestaNueva) => {

      // console.log(pfiestaNueva);

      let objNuevaFiesta = new Fiesta (pfiestaNueva.fecha, pfiestaNueva.costoHora, pfiestaNueva.pilar,pfiestaNueva.andrey, pfiestaNueva.tipoPagoFiesta, pfiestaNueva.costoTotal);
      
      let costoFiesta = calcularCostoFiesta(objNuevaFiesta);

      objNuevaFiesta.costoTotal=costoFiesta;

      // console.log('objeto con fiesta');
      // console.log(objNuevoFiesta);

      // console.log(objNuevaFiesta);
      servicioFiesta.agregarFiestas(objNuevaFiesta);

        swal({
          title: "Éxito",
          text: "Se ha registrado una fiesta nueva!",
          icon: "success",
          button: "Aceptar"
        });
      
      vm.FiestaNueva = null;

      listarFiestas();
      }

      function listarFiestas(){
        vm.listaFiestas = servicioFiesta.retornarFiesta(); 
      }

      function calcularCostoFiesta(pobjNuevaFiesta){
        let costoPilar = 0;
        let costoAndrey = 0;
        let tipoPago = pobjNuevaFiesta.pago;

        if(pobjNuevaFiesta.pilar == true){
          costoPilar = 30;
        }

        if(pobjNuevaFiesta.andrey == true){
          costoAndrey = 25;
        }
      
        let costoTotal = (65 * pobjNuevaFiesta.horas) + (costoPilar * pobjNuevaFiesta.horas) + (costoAndrey * pobjNuevaFiesta.horas);

       switch(tipoPago){
         case "efectivo":
         let descuento = 6 * costoTotal / 100;
         costoTotal = costoTotal - descuento;
         break;
         case "tarjeta":
         break
       }


      return costoTotal; 
      }

      function mostrarPrecio(){
        let fiesta = servicioFiesta.retornarFiesta(),
            precio = fiesta[0].CostoTotal;

        return precio
      }
      
    }

})();