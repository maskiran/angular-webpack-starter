import 'angular';
import 'angular-route';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';

// routes of the application
import routeConfig from './routes.js';

// controllers
import SampleController from './sample_controller';


const app = angular.module("app", ['ngRoute']);

app.directive("appContent", function() {
    return {
        template: require('./app.html')
    }
})

app.directive("navBar", function() {
    return {
        template: require('./navbar.html')
    }
})

app.controller("SampleController", SampleController);

app.config(routeConfig);
