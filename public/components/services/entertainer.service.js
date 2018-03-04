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
      retornarAnimador: _retornarAnimador,
      actualizarAnimador: _actualizarAnimador,
      eliminarAnimador: _eliminarAnimador
    
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
  



    function _actualizarAnimador(panimadorActulizar){
      let listaAnimadores = _retornarAnimador(),
          valido = false;

      for(let i =0; i < listaAnimadores.length; i++){
        if(panimadorActulizar.getCodigoAnimador() == listaAnimadores[i].getCodigoAnimador()){
          listaAnimadores[i] = panimadorActulizar;
          valido = true;
        }
      }

      actualizarLocal(listaAnimadores);

      return valido;
    }

    function _eliminarAnimador(panimadorEliminar){
      let listaAnimadores = _retornarAnimador(),
      valido = false;

      for(let i =0; i < listaAnimadores.length; i++){
        if(panimadorEliminar.getCodigoAnimador() == listaAnimadores[i].getCodigoAnimador()){
          listaAnimadores.splice(i,1);
          valido = true;
        }
      }
      actualizarLocal(listaAnimadores);
      return valido;
    }

    function actualizarLocal(plistaActualizada){
      localStorage.setItem('listaAnimadoresLS', JSON.stringify(plistaActualizada));
    }
    
  }
})();