(() => {
  'use strict';
  angular
    // Se inyecta el ui.router y el oclazyLoad
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  // Inyeccción de dependencia indirecta (tipo Angular)
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  // Forma del archivo de identificarse a sí mismo (tercer tipo de inyection por parametro)
  function routing($stateProvider, $urlRouterProvider, $ocLazyLoad) { // no importa las rutas que hayan, solo ocupo la funcionalidad

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data: {
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
        data: {
          pageTitle: 'Inicio de sesión | Laboratorio 1'
        },
        controller: 'controladorInicioSesion',
        controllerAs: 'vm'
      })

<<<<<<< HEAD
      .state('register', {
        url: '/register',
=======
      .state('registroUsuarios', {
        url: '/registerUsers',
>>>>>>> origin/Monserrat
        templateUrl: './components/users/registerUsers/registerUsers.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/registerUsers/registerUsers.controller.js')
          }]
        },
        data: {
          pageTitle: 'Registro de usuarios | Laboratorio 1'
        },
        controller: 'controladorRegistrarUsuario',
        controllerAs: 'vm'
      })

      .state('retouchadd', {
        url: '/retouchadd',
        templateUrl: './components/retouch/retouchadd/retouchadd.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/retouch/retouchadd/retouchadd.controller.js')
          }]
        },
        data: {
          pageTitle: 'Registro de retoques | Laboratorio 1'
        },
        controller: 'controladorAgregarRetoques',
        controllerAs: 'vm'
      })

      .state('retouchmanage', {
        url: '/retouchmanage',
        templateUrl: './components/retouch/retouchmanage/retouchmanage.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/retouch/retouchmanage/retouchmanage.controller.js')
          }]
        },
        data: {
          pageTitle: 'Manejar Retoques | Laboratorio 1'
        },
        controller: 'controladorManejarRetoques',
        controllerAs: 'vm'
      })
      
      .state('retouchmodify', {
        url: '/retouchmodify',
        templateUrl: './components/retouch/retouchmodify/retouchmodify.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/retouch/retouchmodify/retouchmodify.controller.js')
          }]
        },
        data: {
          pageTitle: 'Modificar Retoques | Laboratorio 1'
        },
        params : {
          objRetoqueTemp: ''
        },
        controller: 'controladorModificarRetoques',
        controllerAs: 'vm'
      })
      
      .state('retouchchoose', {
        url: '/retouchchoose',
        templateUrl: './components/retouch/retouchchoose/retouchchoose.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/retouch/retouchchoose/retouchchoose.controller.js')
          }]
        },
        data: {
          pageTitle:'Elegir retoques | Laboratorio 1'
        },
        controller: 'controladorElegirRetoques',
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