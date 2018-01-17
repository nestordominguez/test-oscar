import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import usersComponent from './users.component';

const usersModule = angular.module('users', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('users', {
        url: '/users',
        component: 'users',
      })
      .state('user', {
      	url: '/user/:id',
      	component: 'users',
      });
  })

  .component('users', usersComponent)

  .name;

export default usersModule;
