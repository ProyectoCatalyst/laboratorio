(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioFiesta', servicioFiesta);

    servicioFiesta.$inject = ['$q', '$log', '$http']; 
  
  function servicioFiesta($q, $log, $http) {

    const asyncLocalStorage = {
      setItem: function (key, value) {
          return Promise.resolve().then(() => {
              let response = true;
              localStorage.setItem(key, JSON.stringify(value));
              return response
          });
      }
    }

    let publicAPI = {
      agregarFiestas: _agregarFiestas,
      retornarFiesta: _retornarFiesta
    }
    return publicAPI;

    function _agregarFiestas(pfiestaNueva) {

      let listaFiestas = _retornarFiesta();
      let costoFiesta = calcularCostoFiesta(pfiestaNueva.horas,pfiestaNueva.pilar,pfiestaNueva.andrey,pfiestaNueva.pago);
      listaFiestas.push(pfiestaNueva);
      pfiestaNueva.costoTotal=costoFiesta;
        localStorage.setItem('listaFiestasLS',JSON.stringify(listaFiestas));
      }

      function _retornarFiesta(){
        let listaFiestas = [];
        let listaFiestasLocal = JSON.parse(localStorage.getItem("listaFiestasLS"));
  
        if(listaFiestasLocal == null){
          listaFiestas = [];
        }else{
          listaFiestasLocal.forEach(obj => {
            
            let objFiestas = new Fiesta(obj.fecha,obj.horas,obj.pilar,obj.andrey,obj.pago);
            listaFiestas.push(objFiestas);
          })
        }
  
        return listaFiestas;
      }
  


      function calcularCostoFiesta(horas,pilar,andrey,pago){
        let costoPilar;
        let costoAndrey;
        let tipoPago = pago;

        if(pilar == true){
          costoPilar = 30;
        }else{
          costoPilar = 0;
        }
      
        if(andrey == true){
          costoAndrey = 25;
        }else{
          costoAndrey = 0;
        }
      
      let costoTotal = (65 * horas) + (costoPilar * horas) + (costoAndrey * horas);   

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


      function actualizarLocal(plistaActualizada){
        localStorage.setItem('listaFiestasLS', JSON.stringify(plistaActualizada));
      }
    }
  })();