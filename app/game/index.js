import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './game.routes.js';
import GameService from './game.service';


export default angular.module('pizzaApp.game', [uirouter])
  .config(routes)
  .service('GameService', GameService)
  .name;
  