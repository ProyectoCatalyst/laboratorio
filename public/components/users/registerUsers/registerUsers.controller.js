(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorRegistrarUsuario', controladorRegistrarUsuario);

  controladorRegistrarUsuario.$inject = ['$stateParams', '$state', '$http', 'servicioUsuarios'];

  function controladorRegistrarUsuario($stateParams, $state, $http, servicioUsuarios) {
    let vm = this;

    vm.provincias = $http({
      method: 'GET',
      url: './provincias.json'
    }).then(function (success) {
      vm.provincias = success.data
    }, function (error) {
      console.log("Ocurrió un error" + error);
    });

    vm.rellenarCantones = (pidProvincia) => {
      // console.log(pidProvincia);
      vm.cantones = $http({
        method: 'GET',
        url: './cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidProvincia == success.data[i].idProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, function (error) {
        console.log("Ocurrio un error" + error)
      });
    }

    vm.rellenarDistrito = (pidCanton) => {
      console.log(pidCanton);
      vm.distritos = $http({
        method: 'GET',
        url: './distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidCanton == success.data[i].idCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, function (error){
        console.log("Ocurrio un error" + error)
      });
    }

    vm.usuarioNuevo = {};

    vm.registrarUsuario = (pusuarioNuevo) => {

      let objNuevoUsuario = new Usuario(pusuarioNuevo.cedula, pusuarioNuevo.nombre, pusuarioNuevo.primerApellido, pusuarioNuevo.segundoApellido, pusuarioNuevo.genero, pusuarioNuevo.provincia, pusuarioNuevo.canton, pusuarioNuevo.distrito, pusuarioNuevo.usuario, pusuarioNuevo.correo, pusuarioNuevo.contrasenna, pusuarioNuevo.fecha);

      let registro = servicioUsuarios.agregarUsuario(objNuevoUsuario);

      if (registro == true) {
        swal({
          title: "Registro exitoso",
          text: "Usuario registrado correctamente registrado",
          icon: "success",
        });
      }
      $state.go('login');
    }
  }
})();