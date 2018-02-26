import { get } from "https";

(()=>{
  'use strict';
  angular
  .module('laboratorio')
  .service('servicioeEntierros', servicioEntierros);

  servicioEntierros.$inject= ['$q', '$log', '$http'];

  function servicioEntierros ($q, $log, $http){
    const asyncLocalStorage = {
      setItem: function (key, value) {
          return Promise.resolve().then(() => {
              let response = true;
              localStorage.setItem(key, JSON.stringify(value));
              return response
          });
      }
    };

    let publicAPI = {
      agregarEntierro: _agregarEntierro,
      retornarEntierro: _retornarEntierro
    };
    return publicAPI;

    function _agregarEntierro(pnuevoEntierro){

      let todosEntierros = _retornarEntierros; 
      let registroExitoso = true;

      todosEntierros.push(pnuevoEntierro);
      asyncLocalStorage.setItem ('listaEntierrosLS', todosEntierros).then((respuesta) =>{
        registroExitoso = respuesta;
      });

      return registroExitoso;
    } 

    function _retornarEntierro(){
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
   }
})()