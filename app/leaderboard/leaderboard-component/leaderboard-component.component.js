leaderboardCtrl.$inject = ['$scope','LeaderboardService', '$state'];

function leaderboardCtrl($scope,  service, state){
	service.getLeaderboard().then((users) => {
		$scope.$apply(() => {
			$scope.users = users;
		});
	});
}
module.exports = {
	template: require('./leaderboard-component.template.html'),
	controller: leaderboardCtrl,
}
