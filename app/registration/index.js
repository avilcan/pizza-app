import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './registration.routes.js';
import registrationForm from './registration-form/registration-form.component';
import RegistrationService from './registration.service';

export default angular.module('pizzaApp.registration', [uirouter])
    .config(routes)
    .controller('registrationFormController', registrationForm.controller)
    .component('registrationForm', registrationForm)
    .service('RegistrationService', RegistrationService)
    .name;