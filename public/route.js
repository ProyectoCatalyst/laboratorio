(() => {
  'use strict';
  angular

    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);

  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

 
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

      .state('register', {
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
      .state('registerHellParty', {
        url: '/registerHellParty',
        templateUrl: './components/hellParty/registerHellParty/registerHellParty.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hellParty/registerHellParty/registerHellParty.controller.js')
          }]
        },
        data:{
          pageTitle: 'Registro de Fiestas en el Infierno | Laboratorio 1'
        },
        params: {
          objFiesta: ''
        },
        controller: 'controladorRegistrarFiesta',
        controllerAs: 'vm'
      });

    //Por el amor de Dios comenten esto si surge un problema raro y corran la aplicación :)
    $urlRouterProvider.otherwise('/');
  };
})();