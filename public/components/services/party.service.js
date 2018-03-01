(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioFiesta', servicioFiesta);
    
    
  
  servicioFiesta.$inject = ['$q', '$log', '$http'];
  function servicioFiesta($q, $log, $http){
    
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
      agregarFiesta: _agregarFiesta,
      retornarFiesta: _retornarFiesta
    };
    return publicAPI;

    function _agregarFiesta(pfiesta) {
      let todasLasFiestas = _retornarFiesta();
      let registroExitoso = true;
  
      todasLasFiestas.push(pfiesta);
  
      asyncLocalStorage.setItem('listaFiestasLS', todasLasFiestas).then((result) => {
        registroExitoso = result
      });
  
      return registroExitoso;
    }
  
  
    function _retornarFiesta() {
      let todasLasFiestas = [];
  
      let listaFiestas = JSON.parse(localStorage.getItem('listaFiestasLS'));
  
      if (listaFiestas == null) {
  
        return todasLasFiestas;
  
      } else {
  
        listaFiestas.forEach(obj => {
  
          let objFiestaTemp = new Fiesta(obj.fecha, obj.horas);
  
          todasLasFiestas.push(objFiestaTemp);
        });
      }
      return todasLasFiestas;
    }

  }
  
})();
