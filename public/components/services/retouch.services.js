(() => {
  'use strict';
  angular
  .module('laboratorio')
  .service('servicioRetoques', servicioRetoques);

  servicioRetoques.$inject = ['$log', '$http'];

  function servicioRetoques($log, $http){
    
    let publicAPI = {
      addRetoques: _addRetoques,
      getRetoques: _getRetoques,
      modifyRetoques: _modifyRetoques,
      deleteRetoques: _deleteRetoques
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

    function _modifyRetoques(paDatos){
      let listaRetoquesOrginal = _getRetoques();

      for(var i=0; i<listaRetoquesOrginal.length; i++){
        if(listaRetoquesOrginal[i].nombre === paDatos[0].nombre){

          listaRetoquesOrginal[i] = paDatos[1];
          
        }
      }


      console.log(listaRetoquesOrginal);

      actualizarLista(listaRetoquesOrginal);
    }

    function _deleteRetoques(pretoqueaeliminar){
      let listaRetoquesLocal = _getRetoques();
      let listaRetoquesFinal = [];
      let retoqueEliminar = pretoqueaeliminar;

      // console.log(listaRetoquesLocal[0].nombre)
      // console.log(retoqueEliminar.nombre)

      for (let i = 0; i<listaRetoquesLocal.length; i++){
        if ( listaRetoquesLocal[i].nombre === retoqueEliminar.nombre){

        }else[
          listaRetoquesFinal.push( listaRetoquesLocal[i] )
        ]
      }

      // console.log(listaRetoquesFinal);
      actualizarLista(listaRetoquesFinal) 

    }

    function actualizarLista(plistaRetoquesOrginal){
      localStorage.setItem('retoquesLS', JSON.stringify(plistaRetoquesOrginal));
    }

  }
})();