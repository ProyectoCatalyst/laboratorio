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
    vm.mostrarTotal = mostrarPrecios();

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

        // mostrarPrecios(objCompra.precio); // funcion que va a mostrar los precios para sumarlos
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

    function mostrarPrecios(){
      let compras = servicioRetoques.getCompra(),
          listaPrecios = [],
          total = 0;

          for(let i=0; i<compras.length; i++){
            listaPrecios.push(compras[i].precio);

            total = listaPrecios[i] + total;
          }

          // console.log(total)

          return total
    }
  }

})();