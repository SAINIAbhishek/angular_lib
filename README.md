# Angular Lib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

## To build & publish library with ng-packagr
In this I've created the lib folder and their I have added the package.json and public-api.ts file.
<br>

`npm run publish` it will build the library package under the dist folder and publish its content.

## To build & publish library with angular in-build
In this I've created the library with `ng g library test-library`
<br>

`npm run publish:library` it will build the library package under the dist folder and then pack the distribution 
folder of the library and publish that .tgz package.

Note: before publishing don't forget to check the .tgz package name. 
 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
