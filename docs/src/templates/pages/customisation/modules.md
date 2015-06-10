---
  title: Modules
  subtitle: How to change remove and create angular modules for triangular
  layout: docs.hbs
  section: customisation
---

# Modules loaded by triangular

The very first lines of javascript that run in app.js create the triangular app and tell angular which modules it will need to load.

        angular.module('triAngular', [
            // inject angular modules
            'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngMaterial',
            // inject extra 3rd party angular modules
            'ui.router', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular',
            // inject our own triangular modules
            'triAngularIntroduction', 'triAngularUI', 'triAngularAuthentication', 'triAngularDashboards', 'triAngularEmail', 'triAngularMenuLevels', 'triAngularElements', 'triAngularForms', 'triAngularCharts', 'triAngularMaps', 'triAngularExtras', 'triAngularTodo'
        ])

### Angular Modules

Triangular loads the following angular modules

- **ngAnimate** - Provides support for CSS-based animations.
- **ngCookies** - Provides a convenient wrapper for reading and writing browser cookies.
- **ngTouch** - Provides touch events and other helpers for touch-enabled devices.
- **ngSanitize** - Provides functionality to sanitize HTML.
- **ngMessages** - Provides enhanced support for displaying messages within templates.
- **ngMaterial** - The [Angular Material project](https://material.angularjs.org/) is an implementation of Material Design in Angular.js

### 3rd Party Modules

Triangular loads the following 3rd party angular modules

- **ui.router** - The de-facto solution to flexible routing with nested views in AngularJS [Site](http://angular-ui.github.io/ui-router/site/)
- **pascalprecht.translate** - i18n in your Angular apps, made easy [Site](https://angular-translate.github.io/)
- **LocalStorageModule** - Stores selected language in local storage
- **googlechart** - Google Chart Tools AngularJS Directive Module [Site](http://angular-google-chart.github.io/angular-google-chart)
- **chart.js** - Reactive, responsive, beautiful charts for AngularJS using Chart.js [Site](http://jtblin.github.io/angular-chart.js)
- **linkify** - Angular filter, directive, and service to linkify text. [Site](https://github.com/scottcorgan/angular-linkify)
- **ui.calendar** - A complete AngularJS directive for the Arshaw FullCalendar. [Site](http://angular-ui.github.io/ui-calendar/)
- **angularMoment** - Moment.JS directives for Angular.JS (timeago and more). [Site](https://github.com/urish/angular-moment)
- **textAngular** - A radically powerful Text-Editor/Wysiwyg editor for Angular.js! [Site](https://github.com/fraywing/textAngular)
- **uiGmapgoogle-maps** - AngularJS directives for the Google Maps Javascript API. [Site](https://github.com/angular-ui/angular-google-maps)
- **hljs** - AngularJS directive for syntax highlighting with highlight.js. [Site](https://github.com/pc035860/angular-highlightjs)

### Triangular Modules

Finally triangular loads it's own modules

- **triAngularIntroduction** - Module that contains introduction page in the Introduction menu
- **triAngularUI** - Module that contains all pages in the UI menu (Colors, Skins, etc).
- **triAngularAuthentication** - Module that contains all pages in the Authentication menu (Login, Forgot Password, etc).
- **triAngularDashboards** - Module that contains all pages in the Dashboards menu (Analytics, Server, Widgets, etc).
- **triAngularEmail** - Module that contains the Email app accessed via the Email menu.
- **triAngularMenuLevels** - Module that contains all pages in the Levels menu.
- **triAngularElements** - Module that contains all pages in the Elements menu (Buttons, Inputs, etc).
- **triAngularForms** - Module that contains all pages in the Forms menu (Autocomplete, Inputs, etc).
- **triAngularCharts** - Module that contains all pages in the Charts menu (ChartJS, Google, etc).
- **triAngularMaps** - Module that contains all pages in the Maps menu (Full Width, Examples).
- **triAngularExtras** - Module that contains all pages in the Extras menu (Gallery, Avatars, etc).
- **triAngularTodo** - Module that contains the Todo app found on the Todo menu

# Module structure

Each module in {{theme.name}} uses Googles recommended structure and naming conventions.

To find out how this structure works we will describe one of the more simple modules below, the introduction module.

This module justs adds one menu item and one page to the site.

|       Folder / File        |                                   Contents                                  |
| -------------------------- | :-------------------------------------------------------------------------- |
| il8n                       | Translation json files                                                      |
| introduction-controller.js | Controller for the introduction.tmpl.html page                              |
| introduction.module.js     | Module js file, use angular to declare a module, adds a menu and the routes |
| introduction.tmpl.html     | Introduction page HTML                                                      |
| introduction.tmpl.scss     | Introduction page SCSS for CSS styling                                      |

# Removing a module

Removing a module is super easy just edit the array at the top of app.js and remove the string of the module you want to remove.

For example if you wanted to remove the authentication pages (login, forgot password, etc) you would want to remove the triangular authentication package.

So you would edit this line

    'triAngularIntroduction', 'triAngularUI', 'triAngularAuthentication', 'triAngularDashboards', 'triAngularEmail', 'triAngularMenuLevels', 'triAngularElements', 'triAngularForms', 'triAngularCharts', 'triAngularMaps', 'triAngularExtras', 'triAngularTodo'

and remove

    'triAngularAuthentication',

This will stop the triAngularAuthentication module in the authentication folder from being loaded and remove the menu and pages.


# Creating a module

In order to make creating a module for your work as easy as possible we have created a simple seed module to get started.

You can find the code in

    app/seed-module

To create your own module just make a copy of this folder and rename it to your new module name.

After that rename the module to your new module name and then add it to app.js
