routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('game', {
    url: '/play',
    template: require('./game.html'),
    resolve: {
      letters: ['GameService', (GameService) => {
        return GameService.getRandomWord().then((word) => {
        	let a = word.split(""),
        	n = a.length;

		    for(var i = n - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var tmp = a[i];
		        a[i] = a[j];
		        a[j] = tmp;
		    }
		    return a.join("");
        });
      }]
    }
  });
}