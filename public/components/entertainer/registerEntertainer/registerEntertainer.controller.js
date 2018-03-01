(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarAnimador', controladorRegistrarAnimador);

  controladorRegistrarAnimador.$inject = ['$stateParams','$state','$http','servicioAnimadores'];

  function controladorRegistrarAnimador($stateParams, $state, $http, servicioAnimadores) {
    let vm = this;

    vm.AnimadorNuevo = {};
    vm.listaAnimadores = listarAnimadores();

    listarAnimadores();
    vm.registrarAnimador = (panimadorNuevo) => {
      console.log(panimadorNuevo);
      let objNuevoAnimador = new Animador (panimadorNuevo.codigoAnimador, panimadorNuevo.nombreAnimador, panimadorNuevo.costoAnimador);

      console.log('objeto con animador');
      console.log(objNuevoAnimador);

      let codigoValidado = servicioAnimadores.agregarAnimador(objNuevoAnimador);

      if(codigoValidado == true){
        swal({
          title: "Registro exitoso",
          text: "Animador registrado correctamente",
          icon: "success",
          button: "Aceptar"
        });
      }else{
        swal({
          title: "Registro fallido",
          text: "El animador ya ha sido registrado anteriormente",
          icon: "error",
          button: "Aceptar"
        });
      }

      

      vm.AnimadorNuevo = null;
      listarAnimadores();
      }

      function listarAnimadores(){
        vm.listaAnimadores = servicioAnimadores.retornarAnimador(); 
      }


      vm.editarAnimador = (panimador)=>{
      $state.go('editarAnimador', { objAnimadorTemp : JSON.stringify(panimador)});
      }
    }

})();