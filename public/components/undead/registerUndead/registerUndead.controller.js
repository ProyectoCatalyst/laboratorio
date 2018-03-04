(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarUndead', controladorRegistrarUndead);

  controladorRegistrarUndead.$inject = ['servicioUsuarios', '$stateParams', '$state'];

  function controladorRegistrarUndead(servicioUsuarios, $stateParams, $state) {
    let vm = this;

    let objSinFormatoUsuario = JSON.parse($stateParams.objUsuario);

    vm.undeadNuevo = {};

    console.log(objSinFormatoUsuario);

    vm.registrarUndead = (pUndeadNuevo) => {

      let objUsuarioTem = new Usuario(objSinFormatoUsuario.nombre, objSinFormatoUsuario.primerApellido, objSinFormatoUsuario.segundoApellido, objSinFormatoUsuario.cedula, objSinFormatoUsuario.fecha, objSinFormatoUsuario.genero, objSinFormatoUsuario.foto, objSinFormatoUsuario.ubicacion, objSinFormatoUsuario.canton, objSinFormatoUsuario.distrito, objSinFormatoUsuario.usuario, objSinFormatoUsuario.correo, objSinFormatoUsuario.contrasenna); // usuario en el que estoy trabajando

      let objNuevoUndead = new Difunto (pUndeadNuevo.apodo, pUndeadNuevo.genero, pUndeadNuevo.edad, pUndeadNuevo.tamanno); // difunto ue estoy ingresando

      let datos = [objUsuarioTem, objNuevoUndead];

      console.log(datos);

      let registro = servicioUsuarios.agregarDifunto(datos);

      if (registro == true) {
        swal({
          title: "Registro exitoso",
          text: "Difunto registrado correctamente registrado en el registro de difuntos :)",
          icon: "success"
        });

        $state.go('listUsers')
      }

    }
  }
})();