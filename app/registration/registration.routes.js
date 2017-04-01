routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('registration', {
    url: '/',
    template: require('./registration.html')
  });
}