import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import customFormComponent from './customForm.component';

const customFormModule = angular.module('customForm', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('customForm', {
        url: '/form',
        component: 'customForm',
      });
  })

  .component('customForm', customFormComponent)

  .name;

export default customFormModule;
