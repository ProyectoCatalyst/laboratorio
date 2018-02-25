(() => {
  'use strict';
  angular
    .module('laboratorio')
    .service('sessionService', sessionService)

  function sessionService() {

    this.create = (data) => {
      this.session = data;
      sessionStorage.setItem('session', JSON.stringify(data));
    };

    this.destroy = function () {
      delete this.session;
      sessionStorage.removeItem('session');
    };
  }
})();