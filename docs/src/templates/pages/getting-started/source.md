---
  title: Source folder
  subtitle: How to get started setting up the build found in the source folder
  layout: docs.hbs
  section: getting-started
---

# The source files

## Introduction

Once you have [downloaded and unzipped](download.html) the main template download zip.

You will find several folders have been created, one of which will be a folder called source.

This is where you will find the main [gulp](http://gulpjs.com/) build and angularjs source files.

## Gulp Angular build system

The gulp build system was generated using the [Yeoman Gulp Angular](https://github.com/Swiip/generator-gulp-angular) generator.

Generator offers a great start to creating any AngularJS app becuas it incudes the following:

- useref : allow configuration of your files in comments of your HTML file
- ngAnnotate : convert simple injection to complete syntax to be minification proof
- uglify : optimize all your JavaScript
- csso : optimize all your CSS
- rev : add a hash in the file names to prevent browser cache problems
- watch : watch your source files and recompile them automatically
- jshint : JavaScript code linter
- Unit test (karma) : out of the box unit test configuration with karma
- e2e test (protractor) : out of the box e2e test configuration with protractor
- browser sync : full-featured development web server with livereload and devices sync
- angular-templatecache : all HTML partials will be converted to JS to be bundled in the application

The generator was also built using the [Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

## Folder and File structure

Inside the source folder you will see a folder structure like this:

|   Folder / File    |                             Contents                             |
| ------------------ | :--------------------------------------------------------------- |
| .bowerrc           | Sets folder to install bower components                          |
| .editorconfig      | Sets editor coding standards                                     |
| .jshintrc          | Sets jshint configuration                                        |
| .yo-rc.json        | Yeoman config                                                    |
| bower.json         | Lists all packages to be installed by bower                      |
| gulpfile.js        | Main gulp file                                                   |
| karma.conf.js      | Karma unit test config                                           |
| package.json       | Lists all packages to be installed by node package manager (npm) |
| protractor.conf.js | Protractor end to end config                                     |
| e2e/               | Protractor end to end test folder                                |
| gulp/              | Contains gulp build source files                                 |
| src/               | Contains the triangular app code (JS/SASS/HTML/ETC)              |
| test/              | Karma unit test folder                                           |

Inside the source folder you will find the following folders and files

| Folder / File |                  Contents                  |
| ------------- | :----------------------------------------- |
| app/          | Contains the main app files                |
| assets/       | Contains app image files                   |
| components/   | Contains components shared between modules |
| 404.tmpl.html | 404 page html                              |
| 500.tmpl.html | 500 page html                              |
| favicon.png   | Favourite icon                             |
| index.html    | Main index html file                       |

Inside the app folder you will find the following files and folders

| Folder / File  |                                                Contents                                                |
| -------------- | :----------------------------------------------------------------------------------------------------- |
| app.js         | Main angular app file sets up the entire template source includes all modules                          |
| app.scss       | Main app sass file that imports partials from scss folder                                              |
| authentication | Module that contains all authentication pages (Login, Forgot Password, etc) in the Authentication menu |
| charts         | Module that contains all chart example pages (ChartJS and Google) in the Charts menu.                  |
| dashboards     | Module that contains all dashboard examples and widgets in the Dashboards menu.                        |
| elements       | Module that contains all element examples in the Elements menu.                                        |
| email          | Module that contains the email app in the Email menu.                                                  |
| extras         | Module that contains the extras pages in the Extras menu.                                              |
| forms          | Module that contains the forms pages in the Forms menu.                                                |
| il8n           | Contains all the base translation json files for the triangular app                                    |
| introduction   | Module that contains the introducion page shown in the Introduction menu.                              |
| layouts        | Contains the templates used for layouts by the template                                                |
| maps           | Module that contains the map examples show in the Maps menu.                                           |
| menulevels     | Module that contains the menu levels pages in the Levels menu.                                         |
| scss           | Contains the apps scss partials                                                                        |
| theming        | Contains code used by triangular to allow access to Material Angulars color palettes and themes        |
| todo           | Module that contains the todo app in the Todo menu.                                                    |
| ui             | Module that contains the ui pages in the UI menu.                                                      |

## Module structure

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


# Setting up Gulp

In order you run the gulp build system for the template you will need to install node.js on your system.

Follow the instructions below to install node.js on your system.

## Installing Node.js

You can download the latest versin of node.js [from here](http://nodejs.org/download/) alternatively there are [guides on how to install using a package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).


## Checking node is installed and working

Once you have node.js installed on your system you should be able to go to your command line and type

    npm version

and see something like this

    $ npm version
    { http_parser: '1.0',
      node: '0.10.28',
      v8: '3.14.5.9',
      ares: '1.9.0-DEV',
      uv: '0.10.27',
      zlib: '1.2.3',
      modules: '11',
      openssl: '1.0.1g',
      npm: '2.0.0-alpha-5',
      triangular: '0.0.0' }


## Getting the build system ready

In order to finish the set up of the build system you just need to run 2 simple commands from the root directory of your unzipped source files.

## Install node modules

Run the following command from the root of your source files to install the node modules listed in packages.json

    npm install

## Install bower packages

If you do not have bower installed run

    npm -g install bower

Run the following command from the root of your source files to install the bower packages listed in bower.json

    bower install

# Running a development server

Once you have gulp all ready to go you can start developing.

To do this you just need to start a local development server

## Start a development server

First make sure you have gulp installed globally

  npm -g install gulp

Once you have bower packages and node modules installed you are ready to code.  To start a development server just type.

    gulp serve

This should automatically open up a browser window with the template running.

## Browsersync

Once the development server is up and running any changes you make to the HTML & JS & SASS files will be auto updated in your browser window.

# Creating a production build

## Running a production server

Before you run a production build you can test your production files first by running a local production server.

Just run the command

    gulp serve:dist

The local server that runs will now be running a built version of your site.

## Running a production build

Once you are happy with your site you can initiate a build that will create a copy of the template that you can FTP to your web server.

Just run the command

    gulp build

This will initiate a build, once it has finished you will find your built files in a folder called dist that will have been created for you.

