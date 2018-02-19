(() => {
  'use strict';
  angular
    .module('laboratorio')
    .controller('controladorInicioSesion', controladorInicioSesion);

  controladorInicioSesion.$inject = ['servicioUsuarios', 'authService'];

  function controladorInicioSesion(servicioUsuarios, authService) {
    let vm = this;

    vm.usuario = {};

    vm.iniciarSesion = (pusuario) => {

      let inicioCorrecto = authService.logIn(pusuario);

      if (inicioCorrecto == true){
        swal("Good job!", "You clicked the button!", "success");
      }else{
        swal("Good job!", "You clicked the button!", "error");
      }
    }
  }
})();

window.fbAsyncInit = function() {
  FB.init({
    appId            : 'your-app-id',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.12'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));