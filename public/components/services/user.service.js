(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$q', '$log', '$http']; // dependencias de angular van de primero

  servicioUsuarios.$inject = ['$q', '$log', '$http']; 
  
  function servicioUsuarios($q, $log, $http) {

    const asyncLocalStorage = {
      setItem: function (key, value) {
          return Promise.resolve().then(() => {
              let response = true;
              localStorage.setItem(key, JSON.stringify(value));
              return response
          });
      }
    }

    let publicAPI = {
      agregarUsuario: _agregarUsuario,
      retornarUsuario: _retornarUsuario,
      agregarDifunto: _agregarDifunto,
      retornarDifunto: _retornarDifunto
    };
    return publicAPI;

    function _agregarUsuario(pusuario) {

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
    }

    function _agregarDifunto(aDatos){
      let todosLosUsuarios = _retornarUsuario();
      let registroExitoso = false;

      for(let i = 0; i < todosLosUsuarios.length; i++){
        if(aDatos[0].getCedula() === todosLosUsuarios[i].getCedula()){
          todosLosUsuarios[i].setDifunto(aDatos[1]);
          registroExitoso = true;
        }
      }

      actualizarLista(todosLosUsuarios);

      return registroExitoso;
      
    }
  }

  function actualizarLista(listaActualizada){
    localStorage.setItem('listaUsuariosLS', JSON.stringify(listaActualizada));
  }
  
})();