routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('game', {
    url: '/play',
    template: require('./game.html')
  });
}