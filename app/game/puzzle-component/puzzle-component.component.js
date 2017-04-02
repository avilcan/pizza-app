import shuffleLetters from '../../utils/utils'
puzzleGameCtrl.$inject = ['$rootScope','$scope','GameService'];

const GAME_TIME = 40; //40s

function puzzleGameCtrl($rootScope, $scope, service){
	this.fails = 0;
	$scope.timeLeft = GAME_TIME;
	$scope.userScore = 0;
	
	const interval = setInterval(() => {
		$scope.$apply(() => {
			$scope.timeLeft = $scope.timeLeft - 1;
			if ($scope.timeLeft <= 0){
				clearInterval(interval);
				const userScore = service.getFinalScore();
				const userId = $rootScope.userId;

				service.storeResults(userId)
				
				$scope.userScore = userScore;
				$scope.gameOver = true;
			}
		});
	}, 1000);
	
	service.getRandomWord().then((word) => {
		$scope.$apply(() => {
			$scope.word = word;
			$scope.letters = shuffleLetters(word);
		});
    });

	$scope.onSubmitSolution = () => {
		if ($scope.solution === $scope.word){
			service.computeScoreForSolution(this.fails);
			service.getRandomWord().then((word) => {
				$scope.$apply(() => {
					$scope.word = word;
					$scope.letters = shuffleLetters(word);
				});
		    });
		} else {
			this.fails = this.fails + 1;
		}
	};
}
module.exports = {
	template: require('./puzzle-component.template.html'),
	controller: puzzleGameCtrl,
}
