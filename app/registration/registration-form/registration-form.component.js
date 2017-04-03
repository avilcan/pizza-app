registrationFormCtrl.$inject = ['$rootScope', '$scope', 'RegistrationService', '$state'];

function registrationFormCtrl($rootScope, $scope, service, state) {
    $scope.user = "";
    $scope.onRegistration = () => {
        service.registerUser($scope.user).then((userId) => {
            $rootScope.userId = userId;
            state.go('game');
        })
    };
}
module.exports = {
    template: require('./registration-form.template.html'),
    controller: registrationFormCtrl,
}