(() => {

  'use strict';

  angular
  .module('laboratorio')
  .controller('controladorListaDifunto', controladorListaDifunto);

  controladorListaDifunto.$inject = ['servicioUsuarios'];

  function controladorListaDifunto(servicioUsuarios){

    let vm = this;

    vm.mostrarDifuntos = servicioUsuarios.retornarDifunto();
  }
})()