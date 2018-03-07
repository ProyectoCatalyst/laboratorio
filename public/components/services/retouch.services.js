(() => {
  'use strict';
  angular
  .module('laboratorio')
  .service('servicioRetoques', servicioRetoques);

  servicioRetoques.$inject = ['$log', '$http', 'servicioUsuarios'];

  function servicioRetoques($log, $http, servicioUsuarios){
    
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

    function _addCompra(pobjCompra, pobjDifunto){
      let listaCompra = pobjDifunto.getCompra(); // llamar nuevamente a las compras asociadas al pobjDifunto al cual acabo de acabo de hacer click para agregar la compra o servicio
      listaCompra.push(pobjCompra); // a la lista de compras que tiene el difunto le agrego la nueva compra
      pobjDifunto.push(listaCompra); // al difunto le agrego la lista d compras con la nueva compra
           
      
      // localStorage.setItem('compraLS', JSON.stringify(listaCompra));

      // enviar los datos a su clase de difuntos y agregar eso al objeto, 
      
      //debo obtener el difunto al que acabo de hacer click y la compra que deseo agregar(parametro de esta funcion), debo enviar el difunto, y la compra que deseo agregar a una funcion que va a buscar el difunto al cual deseo agregar la compra y actualizar mediante un forEach que va a recorrer los usuarios, y los difuntos hasta encontrar el difunto al cual deseo agregar la compra y en ese punto hacer el .push

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

      // trabajar con el difunto con el cual estoy accediendo para mostrar las compras asociadas a este
    }

    function _deleteCompra(pobjCompra){
      let listaDifuntos = servicioUsuarios.retornarDifunto(faltausuarioactivo); // getServcios de un difunto

      for(let i=0; i<listaDifuntos.length; i++){
          let listaCompraLocal = listaDifuntos[i].getCompras(),
              listaCompraFinal = [];
        for(let j=0; j<listaCompraLocal.length; j++){

          if(listaCompraLocal[i].nombre == pobjCompra.nombre){ // compras en el sistema junto con la compra que deseo eliminar, respectivamente

        }else{
          listaCompraFinal.push(listaCompraLocal[i])
        }
      }
      listaDifuntos[j].push(listaCompraFinal);
    }

      actualizarListaDifuntos(listaDifuntos);

      // obtener la compra que deseo eliminar, y comparar eso con las compras que tiene el difunto con el cual accedi y continuar con la eliminacion
    }

    function actualizarListaDifuntos(plistaDifuntos){

      // console.log(plistaCompraFinal)
      // localStorage.setItem('compraLS', JSON.stringify(plistaCompraFinal));
    }


    function actualizarListaRetoques(plistaRetoquesOrginal){
      localStorage.setItem('retoquesLS', JSON.stringify(plistaRetoquesOrginal));
    }
  }
})();