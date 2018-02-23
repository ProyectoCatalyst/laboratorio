(() => {
  'use strict';
  angular
    // Se inyecta el ui.router y el oclazyLoad
    .module('appRoutes', ['ui.router', 'oc.lazyLoad'])
    .config(routing);
  // Inyeccción de dependencia indirecta (tipo Angular)
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  // Forma del archivo de identificarse a sí mismo (tercer tipo de inyection por parametro)
  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html'
      });

      // generar vista de retoques de administrador, donde se dara mantenimiento a la parte de agregar, remover o modificar servicios. Calidad 1 | Isaac.

      $stateProvider
        .state('retoques', {
          url: '/retoques',
          templateUrl: './components/retoques/retoquesAdm.view.html',
          data:{
            pageTitle: 'Laboratorio | Retoques'
          },
          resolve:{
            load: ['$ocLazyLoad', () => {
              return $ocLazyLoad.load('./components/retoques/retoquesAdm.controller.js')
            }]
          },
          controller: 'controladorAdmRetoques',
          controllerAs: 'vm'
        });

    //Por el amor de Dios comenten esto si surge un problema raro y corran la aplicación :)
    $urlRouterProvider.otherwise('/');
  };
})();