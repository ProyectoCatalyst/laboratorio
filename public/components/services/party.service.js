(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioFiesta', servicioFiesta);
    
    
  
  servicioFiesta.$inject = ['$q', '$log', '$http'];
  function servicioFiesta($q, $log, $http){
    
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
      Windows.alert("agregarFiesta");
      let todasLasFiestas = [];
  
        listaFiestas = JSON.parse(localStorage.getItem('listaFiestasLS'));
  
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
