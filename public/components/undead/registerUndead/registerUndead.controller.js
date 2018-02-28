(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarUndead', controladorRegistrarUndead);

  controladorRegistrarUndead.$inject = ['servicioUsuarios', '$stateParams'];

  function controladorRegistrarUndead(servicioUsuarios, $stateParams) {
    let vm = this;

    let objSinFormatoUsuario = JSON.parse($stateParams.objUsuario);

    vm.undeadNuevo = {};

    console.log(objSinFormatoUsuario);

    vm.registrarUndead = (pUndeadNuevo) => {

      let objUsuarioTem = new Usuario(objSinFormatoUsuario.nombre, objSinFormatoUsuario.primerApellido, objSinFormatoUsuario.segundoApellido, objSinFormatoUsuario.cedula, objSinFormatoUsuario.fecha, objSinFormatoUsuario.genero, objSinFormatoUsuario.foto, objSinFormatoUsuario.ubicacion, objSinFormatoUsuario.privincia, objSinFormatoUsuario.canton, objSinFormatoUsuario.distrito, objSinFormatoUsuario.usuario, objSinFormatoUsuario.correo, objSinFormatoUsuario.contrasenna);

      let objNuevoUndead = new Difunto (pUndeadNuevo.apodo, pUndeadNuevo.genero, pUndeadNuevo.edad, pUndeadNuevo.tamanno, pUndeadNuevo.setIDcliente(objUsuarioTem.getIDusuario()));

      let datos = [objUsuarioTem, objNuevoUndead];

      console.log(datos);

      let registro = servicioUsuarios.agregarDifunto(datos);

      if (registro == true) {
        swal({
          title: "Registro exitoso",
          text: "Difunto registrado correctamente registrado en el registro de difuntos :)",
          icon: "success"
        });
      }


      
    }
  }
})();