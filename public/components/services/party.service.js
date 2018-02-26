(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioFiesta', servicioFiestas);

  servicioFiestas.$inject = ['$q', '$log', '$http']; 

    function _agregarFiesta(pfiesta) {

      let todosLosUsuarios = _retornarUsuario();
      let registroExitoso = true;

      todosLosUsuarios.push(pusuario);

      asyncLocalStorage.setItem('listaUsuariosLS', todosLosUsuarios).then((result) => {
        registroExitoso = result
      });

      return registroExitoso;
    }

    function _retornarDifunto(pusuario) {
        
      
    }

    function _retornarUsuario() {
      let todosLosUsuarios = [],

        listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

      if (listaUsuarios == null) {

        return todosLosUsuarios;

      } else {

        listaUsuarios.forEach(obj => {

          let objUsuarioTemp = new Usuario(obj.nombre, obj.primerApellido, obj.segundoApellido, obj.cedula, obj.fecha, obj.genero, obj.foto, obj.ubicacion, obj.provincia, obj.canton, obj.distrito, obj.usuario, obj.correo, obj.contrasenna);

          todosLosUsuarios.push(objUsuarioTemp);
        });
      }
      return todosLosUsuarios;
    };