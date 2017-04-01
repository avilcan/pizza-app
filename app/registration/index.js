import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './registration.routes.js';
import registrationForm from './registration-form/registration-form.component';

export default angular.module('pizzaApp.registration', [uirouter])
  .config(routes)
  .component('registrationForm', registrationForm)
  .name;
  