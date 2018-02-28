(() => {
  'use strict';

  angular
  .module('laboratorio')
  .controller('controladorElegirRetoques', controladorElegirRetoques);

  controladorElegirRetoques.$inject = ['servicioRetoques'];

  function controladorElegirRetoques(servicioRetoques){
    let vm = this;

    vm.mostrarretoques = servicioRetoques.getRetoques(); // mostrar retoques en la vista

  }

})();