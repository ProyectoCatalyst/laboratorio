(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('servicioFiesta', servicioFiesta);

  servicioFiesta.$inject = ['$q', '$log', '$http']; 

