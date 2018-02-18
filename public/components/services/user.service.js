(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$log', '$http'];

  function servicioUsuarios($log, $http) {

    let publicAPI = {
      agregarUsuario: _agregarUsuario,
      retornarUsuario: _retornarUsuario
    }
    return publicAPI;

    function _agregarUsuario(pusuario) {

      let todosLosUsuarios = _retornarUsuario();

      todosLosUsuarios.push(pusuario);
      localStorage.setItem('listaUsuariosLS', JSON.stringify(todosLosUsuarios))
    }

    function _compararUsuario() {

    }

    function _retornarUsuario() {
      let todosLosUsuarios = [],

        listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

      if (listaUsuarios == null) {

        return todosLosUsuarios;

      } else {

        listaUsuarios.forEach(obj => {

          let objUsuarioTemp = new Usuario(obj.nombre, obj.primerApellido, obj.segundoApellido, obj.cedula, obj.fecha, obj.genero, obj.foto, obj.ubicacion, obj.provincia, obj.canton, obj.distrito, obj.usuario, obj.contrasenna);

          todosLosUsuarios.push(objUsuarioTemp);
        });
      }
      return todosLosUsuarios;
    }
  }
})();