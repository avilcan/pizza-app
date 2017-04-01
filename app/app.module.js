import angular from 'angular';
import uirouter from 'angular-ui-router'

import registration from './registration';
import routes from './app.routes'

angular.module('pizzaApp', [registration, uirouter])
	.config(routes);