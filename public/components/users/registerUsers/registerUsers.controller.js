(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarUsuario', controladorRegistrarUsuario);

  controladorRegistrarUsuario.$inject = ['servicioUsuarios'];

  function controladorRegistrarUsuario(servicioUsuarios) {
    let vm = this;

    vm.usuarioNuevo = {};

    vm.registrarUsuario = (pusuarioNuevo) => {

      let objNuevoUsuario = new Usuario(pusuarioNuevo.nombre, pusuarioNuevo.primerApellido, pusuarioNuevo.segundoApellido, pusuarioNuevo.cedula, pusuarioNuevo.fecha, pusuarioNuevo.genero, pusuarioNuevo.foto, pusuarioNuevo.ubicacion, pusuarioNuevo.privincia, pusuarioNuevo.canton, pusuarioNuevo.distrito, pusuarioNuevo.usuario, pusuarioNuevo.contrasenna);

      servicioUsuarios.agregarUsuario(objNuevoUsuario);

    }
  }
})();