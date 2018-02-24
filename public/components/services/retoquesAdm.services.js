(() => {

'use strict';

angular
.module('laboratorio')
.service('servicioRetoquesAdm', servicioRetoquesAdm);

servicioRetoquesAdm.$inject = ['$log', '$http'];

function servicioRetoquesAdm($log, $http){
  
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

    // se debera llamar una funcion en la cual se agregaran los retoques que deben estar previamente definidos.

    let listaRetoques = [];
    let listaRetoquesLocal = JSON.parse(localStorage.getItem('retoquesLS'));

    if(listaRetoquesLocal == null){
      listaRetoques = []; // quemar retoques
    }else{

      listaRetoquesLocal.forEach(obj => {
        let ObjRetoque = new Retoque (obj.nombre, obj.precio);

        listaRetoques.push(ObjRetoque);
      })

    }

    return listaRetoques
  }
}
})();