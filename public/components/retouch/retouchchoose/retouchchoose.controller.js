(() => {
  'use strict';

  angular
  .module('laboratorio')
  .controller('controladorElegirRetoques', controladorElegirRetoques);

  controladorElegirRetoques.$inject = ['$state', 'servicioRetoques'];

  function controladorElegirRetoques($state, servicioRetoques){
    let vm = this;

    vm.mostrarretoques = servicioRetoques.getRetoques(); // mostrar retoques en la vista
    vm.mostrarCompra = servicioRetoques.getCompra();

    vm.agregarretoques = (pretoques) => {
      let objCompra = new Compra (pretoques.nombre, pretoques.precio),
          listaCompra = servicioRetoques.getCompra();

      let agregarCompra = compraExistente(objCompra, listaCompra);

      // console.log(objCompra);

       // si es true es pq agregue la compra
    
      if(agregarCompra == true){
        swal("Gracias", "Hemos agregado el ítem", "success");

        $state.reload()
        
        servicioRetoques.addCompra(objCompra)
      }else{
        swal("Error", "Ya has agregado el ítem", "error");
      }
    }


    vm.eliminarCompra = (pcompras) => {
      let objCompra = new Compra (pcompras.nombre, pcompras.precio);

      servicioRetoques.deleteCompra(objCompra);

      $state.reload()
    }

    function compraExistente(pobjCompra, listaCompra){
      let repetido = false
      for (let i = 0; i<listaCompra.length; i++){
        if(listaCompra[i].getNombre() === pobjCompra.nombre){
          repetido = true
        }

      }
      return !repetido // retornar contrario
    }
  }

})();