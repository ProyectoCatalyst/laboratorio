(() => {
  'use strict';
  angular
  .module('laboratorio')
  .service('servicioRetoques', servicioRetoques);

  servicioRetoques.$inject = ['$log', '$http'];

  function servicioRetoques($log, $http){
    
    let publicAPI = {
      addRetoques: _addRetoques,
      getRetoques: _getRetoques
    }
    return publicAPI;

    function _addRetoques(pnuevoRetoque){
      let listaRetoques = _getRetoques();
      listaRetoques.push(pnuevoRetoque);
      localStorage.setItem('retoquesLS', JSON.stringify(listaRetoques));
    }

    function _getRetoques(){

      let listaRetoques = [];
      let listaRetoquesLocal = JSON.parse(localStorage.getItem('retoquesLS'));

      if(listaRetoquesLocal == null){
        listaRetoques = [];
      }else{

        listaRetoquesLocal.forEach(obj => {
          let ObjRetoque = new Retoque (obj.nombre, obj.precio);

          listaRetoques.push(ObjRetoque);
        });

      }

      return listaRetoques
    }
  }
})();