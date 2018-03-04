(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorUpdateAnimador', controladorUpdateAnimador);

  controladorUpdateAnimador.$inject = ['$stateParams','$state','$http','servicioAnimadores'];

  function controladorUpdateAnimador($stateParams, $state, $http, servicioAnimadores) {
    let vm = this;

    if(!$stateParams.objAnimador){
      $state.go('registerEntertainer');
    }
    
    let objAnimadorSinFormato = JSON.parse($stateParams.objAnimador);

    let objAnimadorTemp = new Animador (objAnimadorSinFormato.codigoAnimador, objAnimadorSinFormato.nombreAnimador, objAnimadorSinFormato.costoAnimador);

    console.log(objAnimadorSinFormato);

    vm.animadorActivo = objAnimadorTemp.nombreAnimador;

    vm.AnimadorMod = {};

    vm.AnimadorMod.codigoAnimador = objAnimadorTemp.codigoAnimador;
    vm.AnimadorMod.nombreAnimador = objAnimadorTemp.nombreAnimador;
    vm.AnimadorMod.costoAnimador = objAnimadorTemp.costoAnimador;

    vm.listaAnimadores = listarAnimadores();

    listarAnimadores();

    vm.actualizarAnimador = (panimadorActulizar) => {

      let objAnimadorFormato = new Animador (panimadorActulizar.codigoAnimador, panimadorActulizar.nombreAnimador, panimadorActulizar.costoAnimador);
      
      let updateValido = servicioAnimadores.actualizarAnimador(objAnimadorFormato);

      if(updateValido == true){
        swal({
          title: "Actualización exitosa",
          text: "Animador actualizado correctamente",
          icon: "success",
          button: "Aceptar"
        });

        $state.go('registerEntertainer');
      }
      vm.AnimadorNuevo = null;
      listarAnimadores();
    }

    vm.eliminarAnimador = (panimadorEliminar) => {
      console.log(panimadorEliminar);

      let objAnimadorFormato = new Animador (panimadorEliminar.codigoAnimador, panimadorEliminar.nombreAnimador, panimadorEliminar.costoAnimador);

      let deleteValido = servicioAnimadores.eliminarAnimador(objAnimadorFormato);

      if(deleteValido == true){
        swal({
          title: "Eliminación exitoso",
          text: "Animador eliminado correctamente",
          icon: "success",
          button: "Aceptar"
        });

        $state.go('registerEntertainer');
      }
      vm.AnimadorNuevo = null;
      listarAnimadores();
    }

    function listarAnimadores(){
      vm.listaAnimadores = servicioAnimadores.retornarAnimador(); 
    }

    vm.regresar = ()=>{
      $state.go('registerEntertainer');
    }
  }
})();