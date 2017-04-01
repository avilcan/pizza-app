registrationFormCtrl.$inject = ['$scope','RegistrationService', '$state'];

function registrationFormCtrl($scope, service, state){
	$scope.user = "";
	$scope.onRegistration = () => {
		service.registerUser($scope.user).then(() => {
			state.go('game');
		})
	};
}
module.exports = {
	template: require('./registration-form.template.html'),
	controller: registrationFormCtrl,
}
