import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './leaderboard.routes.js';
import leaderboardComponent from './leaderboard-component/leaderboard-component.component';
import LeaderboardService from './leaderboard.service';



export default angular.module('pizzaApp.leaderboard', [uirouter])
  .config(routes)
  .controller('leaderboardController', leaderboardComponent.controller)
  .component('leaderboardComponent', leaderboardComponent)
  .service('LeaderboardService', LeaderboardService)
  .name;
  