(() => {
  'use strict';
  angular
  .module('laboratorio')
  .controller('controladorAgregarRetoques', controladorAgregarRetoques);

  controladorAgregarRetoques.$inject = ['$stateParams', '$state', 'servicioRetoques']; //nombre del servicio

  function controladorAgregarRetoques($stateParams, $state, servicioRetoques){
    let vm = this;

    vm.nuevoRetoque = {}; // agregar retoques por defecto
    // vm.listaRetoques = listarRetoques();

    // listarRetoques();

    vm.registrarRetoques = (pnuevoRetoque) => {
      let objNuevoRetoque = new Retoque (pnuevoRetoque.nombre, pnuevoRetoque.precio);


      let exito = verificarRetoques(objNuevoRetoque);

      if(exito == true){
        swal("Bien", "Nuevo retoque agregado", "success");
        servicioRetoques.addRetoques(objNuevoRetoque);
      }else{
        swal("Mmm...", "Ese retoque ya esta en el sistema", "error");
      }
      

      vm.nuevoRetoque = null;
    }

    vm.mostrarRetoques = () => {
      $state.go('retouchmanage');
    }

    function verificarRetoques(pobjNuevoRetoque){
      let retoquesExistentes = servicioRetoques.getRetoques(),
          agregar = false;
      
      for(let i=0; i<retoquesExistentes.length; i++){
        if(retoquesExistentes[i].getNombre() === pobjNuevoRetoque.nombre){
          agregar = true
        }else{
        }
      }
      return !agregar
    }
  }
})();