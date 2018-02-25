(() => {
  'use strict';
  angular
    // Se inyecta el ui.router y el oclazyLoad
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  // Inyeccción de dependencia indirecta (tipo Angular)
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  // Forma del archivo de identificarse a sí mismo (tercer tipo de inyection por parametro)
  function routing($stateProvider, $urlRouterProvider, $ocLazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
<<<<<<< HEAD
        templateUrl: './components/landingPage/landingPage.view.html'
      })

      // generar vista de retoques de administrador, donde se dara mantenimiento a la parte de agregar, remover o modificar servicios. Calidad 1 | Isaac.
        .state('retoques', {
          url: '/retoques',
          templateUrl: './components/retoques/retoquesAdm.view.html',
          data:{
            pageTitle: 'Laboratorio | Retoques'
          },
          resolve:{
            load: ['$ocLazyLoad', ($ocLazyLoad) => {
              return $ocLazyLoad.load('./components/retoques/retoquesAdm.controller.js')
            }]
          },
          controller: 'controladorAdmRetoques',
          controllerAs: 'vm'
        });
=======
        templateUrl: './components/landingPage/landingPage.view.html',
        data:{
          pageTitle: 'Inicio | Laboratorio 1'
        }
      })

      .state('login', {
        url: '/login',
        templateUrl: './components/login/login.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/login/login.controller.js')
          }]
        },
        data:{
          pageTitle: 'Inicio de sesión | Laboratorio 1'
        },
        controller: 'controladorInicioSesion',
        controllerAs: 'vm'
      })

      .state('register', {
        url: '/register',
        templateUrl: './components/users/registerUsers/registerUsers.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/registerUsers/registerUsers.controller.js')
          }]
        },
        data:{
          pageTitle: 'Registro de usuarios | Laboratorio 1'
        },
        controller: 'controladorRegistrarUsuario',
        controllerAs: 'vm'
      });
>>>>>>> master

    //Por el amor de Dios comenten esto si surge un problema raro y corran la aplicación :)
    $urlRouterProvider.otherwise('/');
  };
})();