'use strict';

angular.module('open-market')
   .controller('UserShowCtrl', ['$rootScope', '$scope', '$state', 'User', function($rootScope, $scope, $state, User) {
     User.show($state.params.userId).then(function(response) {
       $scope.user = response.data.user;
       $scope.items = response.data.items;
       console.log(response.data.user);
       console.log('#####Item',response.data.items);
     });
}]);
