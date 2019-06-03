# MockAutocomplete

### Demo:
https://app-mock-autocomplete.herokuapp.com/ 

### Documentation:
https://dark-blaze.github.io/mock-autocomplete/documentation/overview.html  

## To run it locally:
- Clone the project
- Execute npm i or yarn install
- Execute ng serve
- Open  `http://localhost:4200/`

## Bugs/Behavior deviation:
- The current version does not cater to moving from the last mouse-selected item when the up and down arrow keys' are pressed.
- The cursor position starts from the top every time the data is filtered after moving out of the input field.
- If the focus is not out and the data is re-filtered, the highlighted/active row item carries the last position value set. 
- The current keybinding code is inside the autocomplete. It can be removed to convert it into a directive.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

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
