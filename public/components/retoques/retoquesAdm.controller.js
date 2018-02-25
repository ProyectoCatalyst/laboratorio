(() => {

  'use strict';
  angular
  .module('laboratorio')
  .controller('controladorAdmRetoques', controladorAdmRetoques);

  controladorAdmRetoques.$inject = ['servicioRetoquesAdm']; //nombre del servicio

  function controladorAdmRetoques(servicioRetoquesAdm){
    let vm = this;

    vm.nuevoRetoque = {}; // agregar retoques por defecto
    // vm.listaRetoques = listarRetoques();

    // listarRetoques();

    vm.registrarRetoques = (pnuevoRetoque) => {
      let objNuevoRetoque = new Retoque (pnuevoRetoque.nombre, pnuevoRetoque.precio);

    servicioRetoquesAdm.addRetoques(objNuevoRetoque);

      vm.nuevoRetoque = null;
      // listarRetoques();
    }


    vm.retoquesEstablecidos = () => {
      let retoquesEstablecidos = new Retoque ([
        'Sesión de maquillaje', 150,
        'Sesión de peluqueria', 100,
        'Sesión de costura', 250
      ]);

      return retoquesEstablecidos;
    }
    // function listarRetoques(){
    //   vm.listaRetoques = servicioRetoquesAdm.getRetoques();
    // }
    // no se utiliza en este módulo de adm pq los servicios se mostraran en la pagina donde el usuarios podra seleccionarlos
  }
})();