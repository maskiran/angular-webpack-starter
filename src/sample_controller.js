import 'angular';
import 'angular-route';

class SampleController {
    constructor ($routeParams, $location, $http) {
        this.data = "";
        this._$routeParams = $routeParams;
        this.name = $routeParams.name || 'default';
        this.$http = $http;
        this.getInfo();
    }

    getInfo() {
        this.data = "data from remote";
    }
}

SampleController.$inject = ["$routeParams", "$location", "$http"];

export default SampleController;
