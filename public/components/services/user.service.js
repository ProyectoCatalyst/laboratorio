(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioUsuarios', servicioUsuarios);

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
      retornarDifunto: _retornarDifunto,
      agregarEntierro: _agregarEntierro,
      retornarEntierro: _retornarEntierro
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

          let objUsuarioTemp = new Usuario(obj.cedula, obj.nombre, obj.primerApellido, obj.segundoApellido, obj.genero, obj.provincia, obj.canton, obj.distrito, obj.usuario, obj.correo, obj.contrasenna, obj.fecha);

          obj.difuntos.forEach(objdifunto => {
            let obtDifuntoTemp = new Difunto(objdifunto.apodo, objdifunto.genero, objdifunto.edad, objdifunto.tamanno);

            obtDifuntoTemp.setCedulaCliente(objUsuarioTemp.getCedula());

            objUsuarioTemp.setDifunto(obtDifuntoTemp);
          })
          todosLosUsuarios.push(objUsuarioTemp);
        });
      }
      return todosLosUsuarios;
    }

    function _agregarDifunto(aDatos) {
      let todosLosUsuarios = _retornarUsuario();
      let registroExitoso = false;

      for (let i = 0; i < todosLosUsuarios.length; i++) {
        if (aDatos[0].getCedula() === todosLosUsuarios[i].getCedula()) {
          todosLosUsuarios[i].setDifunto(aDatos[1]);
          registroExitoso = true;
        }
      }
      actualizarLista(todosLosUsuarios);
      return registroExitoso;
    }
    function _retornarDifunto(pidusuario) {
      let todosLosUsuarios = _retornarUsuario();
      let todosLosDifuntos = [];
      
      for(let i = 0; i < todosLosUsuarios.length; i++){
        if(pidusuario == todosLosUsuarios[i].getCedula()){
          todosLosDifuntos = todosLosUsuarios[i].getDifuntos();
        }
      }
      return todosLosDifuntos;
    }
    function _agregarEntierro(aIDCliente){
      let todosLosDifuntos = _retornarDifuntos(); 
      let registroExitoso = false;

      for(let i = 0; i< todosLosDifuntos.length; i++){
        if (aDifuntos[0].getIDCliente() === todosLosDifuntos[i].getIDCliente()){
          todosLosDifuntos[i].setEntierro(aDifuntos[1]);
          registroExitoso = true;
        }
      }
      todosEntierros.push(pnuevoEntierro);
      asyncLocalStorage.setItem ('listaEntierrosLS', todosEntierros).then((respuesta) =>{
        registroExitoso = respuesta;
      });

      return registroExitoso;
    } 

    function _retornarEntierro(pnuevoEntierro){
      let todosEntierros = [];

      listaEntierros = JSON.parse(localStorage.getItem('listaEntierrosLS'));
      
      if (listaEntierros == null) {
        return todosEntierros;

      } else {
        listaEntierros.forEach(obj => {
          let EntierroTemp = new Entierro (obj.horaInicio, obj.horaFinal, obj.fecha, obj.lugar, obj. prioridad);

          todosEntierros.push(objEntierroTemp);
        });
      }
      return todosEntierros;
    }

    function actualizarLista(listaActualizada){
      localStorage.setItem('listaUsuariosLS', JSON.stringify(listaActualizada));
    }
  }   
})(); 
