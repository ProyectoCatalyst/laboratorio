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

      // console.log(pfiestaNueva)

      let listaFiestas = _retornarFiesta();
      listaFiestas.push(pfiestaNueva);
        localStorage.setItem('listaFiestasLS',JSON.stringify(listaFiestas));
      }

      function _retornarFiesta(){
        let listaFiestas = [];
        let listaFiestasLocal = JSON.parse(localStorage.getItem("listaFiestasLS"));
  
        if(listaFiestasLocal == null){
          listaFiestas = [];
        }else{
          listaFiestasLocal.forEach(obj => {
            
            let objFiestas = new Fiesta(obj.fecha,obj.horas,obj.pilar,obj.andrey,obj.pago, obj.costoTotal);
            listaFiestas.push(objFiestas);
          })
        }
  
        return listaFiestas;
      }


      function actualizarLocal(plistaActualizada){
        localStorage.setItem('listaFiestasLS', JSON.stringify(plistaActualizada));
      }
    }
  })();