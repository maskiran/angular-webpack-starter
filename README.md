# angularjs-webpack-starter
The project provides a starter repository to get started with angularjs, webpack, node and bootstrap3.

The index.html is not required to be edited.

app.html defines the structure of the document and is loaded into index.html through angularjs directive.

In the default view, app.html provides a navbar (the content of navbar is defined in navbar.html) and the div for the content of the route (ng-view).

All the routes are defined in 'routes.js'. routes.js must define a path, the template and the controller to use for that path.

Controller must be defined in a new file (copy sample_controller.js). Use this controller in the routes.js for the new path. Add this controller to the angularjs app in 'index.js'

Controller is written using ES6 class. The controller parameters (like $http, $routeParams) must be defined at the constructor and then injected at the end of the code in the same order. The parameters that are passed to the constructor must be save to a member variable if its required to be accessed in other methods.

To start the application:
- npm install
- npm start

To generate a build:
- npm run build

this generates the build in the 'dist' directory.
