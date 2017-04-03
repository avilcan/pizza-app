import shuffleLetters from '../../utils/utils'
puzzleGameCtrl.$inject = ['$rootScope', '$scope', 'GameService', '$state'];

const GAME_TIME = 40; //40s

function updateWord($scope, service) {
    return service.getRandomWord().then((word) => {
        $scope.$apply(() => {
            $scope.solution = '';
            $scope.word = word;
            $scope.letters = shuffleLetters(word);
        });
    });
}

function puzzleGameCtrl($rootScope, $scope, service, state) {

    $scope.onSubmitSolution = () => {
        if ($scope.solution === $scope.word) {
            service.computeScoreForSolution($scope.fails);
            updateWord($scope, service);
        } else {
            $scope.fails = $scope.fails + 1;
        }
    };

    $scope.onViewLeaderboard = () => {
        state.go('leaderboard');
    }

    $scope.onRegister = () => {
    	state.go('registration');
    }

    $scope.playGame = () => {
        $scope.fails = 0;
        $scope.gameOver = false;

        $scope.timeLeft = GAME_TIME;
        $scope.userScore = 0;
        if (!$rootScope.userId) {
        	$scope.unregisteredUser = true;
        }

        updateWord($scope, service).then(() => {
            const interval = setInterval(() => {
                $scope.$apply(() => {
                    $scope.timeLeft = $scope.timeLeft - 1;
                    if ($scope.timeLeft <= 0) {
                        clearInterval(interval);
                        const userScore = service.getFinalScore();
                        const userId = $rootScope.userId;

                        service.storeResults(userId)

                        $scope.userScore = userScore;
                        $scope.gameOver = true;
                    }
                });
            }, 1000);
        });
    }

    $scope.playGame();
}
module.exports = {
    template: require('./puzzle-component.template.html'),
    controller: puzzleGameCtrl,
}