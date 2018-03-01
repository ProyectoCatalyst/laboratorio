(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioAnimadores', servicioAnimadores);

    servicioAnimadores.$inject = ['$q', '$log', '$http']; 
  
  function servicioAnimadores($q, $log, $http) {

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
      agregarAnimador: _agregarAnimador,
      retornarAnimador: _retornarAnimador
    }
    return publicAPI;

    function _agregarAnimador(panimadorNuevo) {

      let listaAnimadores = _retornarAnimador();
      let validarCodigo = true;
      let tamanno = listaAnimadores.length;
      for(let i=0; i < tamanno; i++){
        if(panimadorNuevo.getCodigoAnimador() == listaAnimadores[i].getCodigoAnimador()){
          validarCodigo=false;
        }
      }

      if(validarCodigo == true){
        listaAnimadores.push(panimadorNuevo);
        localStorage.setItem('listaAnimadoresLS',JSON.stringify(listaAnimadores));
      }
      
      return validarCodigo;
    }

    function _retornarAnimador(){
      let listaAnimadores = [];
      let listaAnimadoresLocal = JSON.parse(localStorage.getItem("listaAnimadoresLS"));

      if(listaAnimadoresLocal == null){
        listaAnimadores = [];
      }else{
        listaAnimadoresLocal.forEach(obj => {
          
          let objAnimadores = new Animador(obj.codigoAnimador,obj.nombreAnimador,obj.costoAnimador);
          listaAnimadores.push(objAnimadores);
        })
      }

      return listaAnimadores;
    }
  
    function actualizarLocal(plistaActualizada){
      localStorage.setItem('listaAnimadoresLS', JSON.stringify(plistaActualizada));
    }
  }
})();