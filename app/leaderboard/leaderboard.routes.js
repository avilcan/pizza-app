routes.$inject = ['$stateProvider'];
leaderboardPageCtrl.$inject = ['$scope', '$state'];

function leaderboardPageCtrl($scope, state) {
    $scope.onPlayAgain = () => {
        state.go("game");
    }
}
//update
export default function routes($stateProvider) {
    $stateProvider
        .state('leaderboard', {
            url: '/leaderboard',
            template: require('./leaderboard.html'),
            controller: leaderboardPageCtrl,
        });
}