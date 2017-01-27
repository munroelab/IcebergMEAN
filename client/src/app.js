import angular from 'angular'
angular.module('icedef', [])
.controller('icebergIdController', function($http){
  $http.get('/icebergId').then((response) => {
    this.icebergId = response.data;
  });
})
