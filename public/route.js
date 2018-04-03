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

      .state('registroUsuarios', {
        url: '/registerUsers',
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
      })

      .state('listUsers', {
        url: '/listUsers',
        templateUrl: './components/users/listUsers/listUsers.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/listUsers/listUsers.controller.js')
          }]
        },
        data:{
          pageTitle: 'Listar usuarios | Laboratorio 1'
        },
        params: {
          objUsuarioTemp: ''
        },
        controller: 'controladorListarUsuario',
        controllerAs: 'vm'
      })
      
      .state('registerUndead', {
        url: '/registerUndead',
        templateUrl: './components/undead/registerUndead/registerUndead.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/undead/registerUndead/registerUndead.controller.js')
          }]
        },
        data:{
          pageTitle: 'Registro de difuntos | Laboratorio 1'
        },
        params: {
          objUsuario: ''
        },
        controller: 'controladorRegistrarUndead',
        controllerAs: 'vm'
      })

      .state('listUndead', {
        url: '/listUndead',
        templateUrl: './components/undead/listUndead/listUndead.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/undead/listUndead/listUndead.controller.js')
          }]
        },
        data:{
          pageTitle: 'Listado de difuntos | Laboratorio 1'
        },
        params: {
          objUsuario: ''
        },
        controller: 'controladorListarUndead',
        controllerAs: 'vm'
      })

      .state('registrarEntierro',{
        url: '/registrarEntierro',
        templateUrl: './components/entierros/registroEntierro/registroEntierro.view.html',
          resolve: {
            load: ['$ocLazyLoad', ($ocLazyLoad) => {
              return $ocLazyLoad.load('./components/entierros/registroEntierro/registroEntierro.controller.js')
            }]
          },
          data:{
            pageTitle: 'Registro de Entierros | Laboratorio 1'
          },
          params: {
            objDifunto: ''
          },
          controller: 'controladorRegistroEntierro',
          controllerAs: 'vm'
      });

    //Por el amor de Dios comenten esto si surge un problema raro y corran la aplicación :)
    $urlRouterProvider.otherwise('/');
  };
})();