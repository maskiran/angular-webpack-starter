import 'angular-route';

const routeConfig = ($routeProvider) => {
$routeProvider
.when('/', {
    template: require('./sample.html'),
    controller: 'SampleController as SampleController'
})
.when('/:name', {
    template: require('./sample.html'),
    controller: 'SampleController as SampleController'
})
}

export default routeConfig;

routeConfig.$inject = ["$routeProvider"];
