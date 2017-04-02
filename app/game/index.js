import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './game.routes.js';
import puzzleComponent from './puzzle-component/puzzle-component.component';
import GameService from './game.service';



export default angular.module('pizzaApp.game', [uirouter])
  .config(routes)
  .controller('puzzleGameController', puzzleComponent.controller)
  .component('puzzleGameComponent', puzzleComponent)
  .service('GameService', GameService)
  .name;
  