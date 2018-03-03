(()=>{
  'use strict';
  angular
  .module('laboratorio')
  .controller('controladorRegistroEntierro', controladorRegistroEntierro);
  
  controladorRegistroEntierro.$inject = ['$stateParams','servicioUsuarios'];

  function controladorRegistroEntierro ($stateParams, servicioUsuarios){
    let vm = this;

    console.log($stateParams);

    let objsinFormatoEntierro = JSON.parse($stateParams.objEntierroTem);
    
    vm.nuevoEntierro = {};
    console.log(objSinFormatoEntierro );

    vm.registrarEntierro = (pnuevoEntierro)=>{


/*Preguntar*/

      let objEntierroTem = new Entierro (objsinFormatoEntierro.horaInicio, objsinFormatoEntierro.horaFinal, objsinFormatoEntierro.lugar, objsinFormatoEntierro.prioridad, pEntierroNuevo.setIDcliente(objUsuarioTem.getIDUsuaruo()));
 
      let objNuevoUndead = new Difunto (pUndeadNuevo.apodo, pUndeadNuevo.genero, pUndeadNuevo.edad, pUndeadNuevo.tamanno,);

      let aDifuntos= ['objNuevoUndead', 'objEntierroTem'];

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