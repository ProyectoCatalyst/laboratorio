(() => {

'use strict';

angular
.module('laboratorio')
.service('servicioRetoquesAdm', servicioRetoquesAdm);

servicioRetoquesAdm.$inject['$log', '$http'];

function servicioRetoquesAdm($log, $http){
  let publicAPI = {
    addRetoques: _addRetoque,
    getRetoques: _getRetoques
  }
  return publicAPI

  function _addRetoque(pnuevoRetoque){
    let listaRetoques = _getRetoques();
    listaRetoques.push('pnuevoRetoque');
    localStorage.setItem('retoquesLs', JSON.stringify(listaRetoques));
  }

  function _getRetoques(){

    // se debera llamr una funcion en la cual se agregaran los retoques que deben estar previamente definidos.

    let listaRetoques = [];
    let listaRetoquesLocal = JSON.parse(localStorage.getItem('retoquesLS'));

    if(listaRetoquesLocal == null){

    }else{

      listaRetoquesLocal.forEach(obj => {
        let ObjRetoque = new Retoque (obj.nombre, obj.precio);

        listaRetoques.push(ObjRetoque);
      })

    }

    return listaRetoques
  }
}
});