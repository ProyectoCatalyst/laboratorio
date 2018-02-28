(() => {
  'use strict';
  angular
  .module('laboratorio')
  .factory('facebookService', facebookService);

  facebookService.$inject = ['$q'];

  function facebookService($q){
    return {
      getMyLastName: function() {
        var deferred = $q.defer();
        FB.api('/me', {
            fields: 'last_name'
        }, function(response) {
            if (!response || response.error) {
                deferred.reject('Error occured');
            } else {
                deferred.resolve(response);
            }
        });
        return deferred.promise;
    }
    }
  }
})();