(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioFiesta', servicioFiesta);

    servicioFiesta.$inject = ['$q', '$log', '$http'];

    function servicioFiesta($q, $log, $http){
      
      const asyncLocalStorage = {
        setItem: function(key,value){
          return Promise.resolve().then(() => {
            let reponse = true;
            localStorage.setItem(key, JSON.stringify(value));
            return response
          });
        }
      };
      let publicAPI = {
        agregarFiesta: _agregarFiesta,
        retornarFiesta: _retornarFiesta
      }
      return publicAPI;

function calcularCostoFinal(phoras,pcostoAnimador,ptipoPago){
  let montoTotal=0, Desc=0,tarifaBasica=65;
  let horas = phoras, costoAnimador=pcostoAnimador,tipoPago= ptipoPago;

  if(tipoPago=='efectivo')
  {
    Desc=(((tarifaBasica + costoAnimador)*horas)-(6/100))
  }
  montoTotal = ((tarifaBasica + costoAnimador)- Desc)

  return montoTotal;
}