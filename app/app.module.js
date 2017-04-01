import angular from 'angular';
import uirouter from 'angular-ui-router'

import registration from './registration';
import game from './game';
import routes from './app.routes'

angular.module('pizzaApp', [registration, game, uirouter])
	.config(routes);