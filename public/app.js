(() => {
  'use strict';
  // Estamos llamando al framework e inicializando un modulo
  angular
    // Es el modulo que esta en el ng-app (Inyeccion directa)
    .module('laboratorio', ['appRoutes']);

  window.fbAsyncInit = function () {
    FB.init({
      appId: '1128360287299589',
      xfbml: true,
      version: 'v2.12'
    });
    FB.AppEvents.logPageView();
  };

  // (function (d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) { return; }
  //   js = d.createElement(s); js.id = id;
  //   js.src = "https://connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));
})();