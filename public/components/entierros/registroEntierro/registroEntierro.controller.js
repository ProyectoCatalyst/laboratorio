(()=>{
  'use strict';
  angular
  .module('laboratorio')
  .controller('controladorRegistroEntierro', controladorRegistroEntierro);
  
  controladorRegistroEntierro.$inject = ['servicioeEntierros'];

  function controladorRegistroEntierro (servicioeEntierros){
    let vm = this;
    
    vm.nuevoEntierro = {};

    vm.registrarEntierro = (pnuevoEntierro)=>{
      console.log (pnuevoEntierro);
    }
  }
})();