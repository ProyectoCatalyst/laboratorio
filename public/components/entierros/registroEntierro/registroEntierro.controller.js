(()=>{
  'use strict';
  angular
  .module('laboratorio')
  .controller('controladorRegistroEntierro', controladorRegistroEntierro);
  
  controladorRegistroEntierro.$inject = ['$stateParams', '$state', 'servicioUsuarios'];

  function controladorRegistroEntierro ($stateParams, $state, servicioUsuarios){
    let vm = this;

    if(!$stateParams.objDifunto){
      $state.go('listUsers');
    }

    let objsinFormatoDifunto = JSON.parse($stateParams.objDifunto);
    
    vm.nuevoEntierro = {};
    console.log(objsinFormatoDifunto);

    vm.registrarEntierro = (pnuevoEntierro)=>{

      let objEntierroTem = new Entierro (pnuevoEntierro.horaInicio, pnuevoEntierro.horaFinal, pnuevoEntierro.lugar, pnuevoEntierro.prioridad);
 
      let objNuevoUndead = new Difunto (objsinFormatoDifunto.apodo, objsinFormatoDifunto.genero, objsinFormatoDifunto.edad, objsinFormatoDifunto.tamanno);

      let aDifuntos= [objNuevoUndead, objEntierroTem];

      console.log(Difuntos); 
      console.log(Entierros); 
    
      let registro = servicioUsuarios.agregarEntierro(IDCliente);

      if (registro == true) {
        swal({
          title: "Registro exitoso",
          text: "Entierro registrado correctamente.",
          icon: "success"
        });
      }
    }

    }
  }
)();