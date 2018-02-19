(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarUsuario', controladorRegistrarUsuario);

  controladorRegistrarUsuario.$inject = ['$http', 'servicioUsuarios'];

  function controladorRegistrarUsuario($http, servicioUsuarios) {
    let vm = this;

    vm.provincias = $http({
        method: 'GET',
        url: './provincias.json'
      }).then(function (success) {
        vm.provincias = success.data
      }, function (error) {
        console.log("Ocurrió un error" + error);
      });


    vm.usuarioNuevo = {};

    vm.registrarUsuario = (pusuarioNuevo) => {

      let objNuevoUsuario = new Usuario(pusuarioNuevo.nombre, pusuarioNuevo.primerApellido, pusuarioNuevo.segundoApellido, pusuarioNuevo.cedula, pusuarioNuevo.fecha, pusuarioNuevo.genero, pusuarioNuevo.foto, pusuarioNuevo.ubicacion, pusuarioNuevo.privincia, pusuarioNuevo.canton, pusuarioNuevo.distrito, pusuarioNuevo.usuario, pusuarioNuevo.correo, pusuarioNuevo.contrasenna);

      let registro = servicioUsuarios.agregarUsuario(objNuevoUsuario);

      if (registro == true) {
        swal({
          title: "Registro exitoso",
          text: "Usuario registrado correctamente registrado",
          icon: "success",
        });
      }

    }
  }
})();