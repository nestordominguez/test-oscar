import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import CustomForm from './customForm/customForm';
import Users from './users/users';

const componentModule = angular.module('app.components', [
  Home,
  About,
  CustomForm,
  Users,
])

  .name;

export default componentModule;
