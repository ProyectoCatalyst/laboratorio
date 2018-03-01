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
      deleteRetoques: _deleteRetoques,
      addCompra: _addCompra,
      getCompra: _getCompra,
      deleteCompra: _deleteCompra
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
        if(listaRetoquesOrginal[i].getNombre() === paDatos[0].nombre){

          listaRetoquesOrginal[i] = paDatos[1];

          // en paDatos[0] esta el dato original, en paDatos[1] el dato que voy a reemplazar
          
        }
      }


      // console.log(listaRetoquesOrginal);

      actualizarListaRetoques(listaRetoquesOrginal);
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
      actualizarListaRetoques(listaRetoquesFinal) 

    }

    function _addCompra(pobjCompra){
      let listaCompra = _getCompra();
      listaCompra.push(pobjCompra);
      localStorage.setItem('compraLS', JSON.stringify(listaCompra));

    }

    function _getCompra(){
      let listaCompraLocal = JSON.parse(localStorage.getItem('compraLS')),
          listaCompra = [];

      if(listaCompraLocal == null){
        listaCompra = [];
      }else{
        listaCompraLocal.forEach(objTemp => {
          let objCompra = new Compra (objTemp.nombre, objTemp.precio);
        
          listaCompra.push(objCompra);
        
        });
      }

      return listaCompra
    }

    function _deleteCompra(pobjCompra){
      let listaCompraLocal = _getCompra(),
          listaCompraFinal = [];

      for(let i=0; i<listaCompraLocal.length; i++){
        if(listaCompraLocal[i].nombre == pobjCompra.nombre){

        }else{
          listaCompraFinal.push(listaCompraLocal[i])
        }
      }

      actualizarListaCompras(listaCompraFinal);
    }

    function actualizarListaCompras(plistaCompraFinal){

      // console.log(plistaCompraFinal)
      localStorage.setItem('compraLS', JSON.stringify(plistaCompraFinal));
    }


    function actualizarListaRetoques(plistaRetoquesOrginal){
      localStorage.setItem('retoquesLS', JSON.stringify(plistaRetoquesOrginal));
    }
  }
})();