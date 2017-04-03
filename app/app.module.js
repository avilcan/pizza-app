import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';

import registration from './registration';
import game from './game';
import leaderboard from './leaderboard';
import routes from './app.routes';

angular.module('pizzaApp', [registration, game, leaderboard, uirouter])
    .config(routes);