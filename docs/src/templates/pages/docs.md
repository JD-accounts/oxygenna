---
  title: Support
  subtitle: How to get support from Oxygenna
  layout: docs.hbs
---

# Introduction

## Overview

First of all thank you for purchasing triangular.  

{{theme.name}} is a fantastic admin template build with angularjs.  It has been created with merticulous attention to [Google's material design specification](http://www.google.com/design/spec/material-design/introduction.html).

Using our experience at developing AngularJS admin templates for clients, we have tried to make an admin template that will be easy to plug in to an existing API.

We hope you will enjoy using this triangular to make wonderful things.

## Technologies

Triangular is built on top of a few fantastic technologies.  These are AngularJs and Angular Material, both were created by Google.  Triangular also uses the material design specification in its design and functionality.

### Material Design

Material design is a design language developed by Google and announced at the Google I/O conference on June 25, 2014. Expanding upon the "card" motifs first seen in Google Now, it is a design with increased use of grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows. Designer Matías Duarte explained that "unlike real paper, our digital material can expand and reform intelligently. Material has physical surfaces and edges. Seams and shadows provide meaning about what you can touch." Google states that their new design language is based on paper and ink.

At Google we say, “Focus on the user and all else will follow.” We embrace that principle in our design by seeking to build experiences that surprise and enlighten our users in equal measure. This site is for exploring how we go about it. You can read our design guidelines, download assets and resources, meet our team, and learn about job and training opportunities.

Here are some resources about Material Design

- [Google Design](http://www.google.com/design/)
- [Material Design Guidelines](http://www.google.com/design/spec/material-design/introduction.html)

### AngularJS

AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.

Angular is what HTML would have been, had it been designed for applications. HTML is a great declarative language for static documents. It does not contain much in the way of creating applications, and as a result building web applications is an exercise in what do I have to do to trick the browser into doing what I want?

Before you get started with the template it is recommended that you learn about AngularJS.  Here are a few articles and videos that will help you get up to speed.

- [New to angular?](https://egghead.io/articles/new-to-angularjs-start-learning-here)
- [AngularJS in 5min (video)](https://www.youtube.com/watch?v=tnXO-i7944M)
- [AngularJS Fundementals in 60min](https://www.youtube.com/watch?v=i9MHigUZKEM)
- [Official Docs Guide](https://docs.angularjs.org/guide)

### Yeoman Gulp Angular Generator

At the start of this project we used the [Yeoman generator for AngularJS with GulpJS](https://github.com/Swiip/generator-gulp-angular) to generate the gulp tasks and structure of the app.  This is a good place to look if you are looking to do extra build processes with the template.

### Angular Material

For developers using AngularJS, Angular Material is both a UI Component framework and a reference implementation of Google's Material Design Specification. This project provides a set of reusable, well-tested, and accessible UI components based on Material Design.

- [Angular Material](https://material.angularjs.org/#/)


### John Papa's Angular Style Guide

Triangulars code follows the [John Pappa style guide for angular](https://github.com/johnpapa/angular-styleguide).  This is an opinionated style guide for syntax, conventions and structuring of angular apps that is now endorsed by the Google angular team.

# Getting Started

## Prerequisites

In this section we will show you how to install all the prerequisites you need on your system to run triangular.

Here is a handy install checklist for you to go through.  Instructions on how to install them are below the table.

| Prerequisite                      | Description                                                            |
|:----------------------------------|:-----------------------------------------------------------------------|
| [Node.js](https://nodejs.org/en/) | Javascript runtime needed to build the app                             |
| [Git](https://git-scm.com/)       | Source Control for bower installation & access latest code from GitHub |
| [Bower](http://bower.io/)         | Package Installer used to grab dependencies needed in the app          |
| [GulpJs](http://gulpjs.com/)      | Automation system for building the app                                 |

### Install Node.js

We recommend installing the latest version of node.  

You can download the latest of node.js [from here](https://nodejs.org/download/) alternatively there are [guides on how to install using a package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

Once you have installed node you can check that it is working correctly by opening a command prompt / terminal and typing

    npm --version

and see something like this

    $ npm --version
    4.4.5

### Install Git

You will also need to install the Git source control system on your machine.  Check out [this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on how to install on Windows, Mac and Linux.

### Install Bower

Bower is a package manager built with nodejs so you will need to have installed nodejs before attempting to install bower.

To install bower just type the following command into your terminal.

    npm -g install bower

This tells node's package manager (npm) to install bower on your system.  The <code>-g</code> tells npm to install this package globally, this means that you can use this command in any folder on your system.

### Install GulpJS

GulpJS automates building and testing your app.  It is also built with nodejs so you will need to have installed nodejs before attempting to install.

To install bower just type the following command into your terminal.

    npm -g install gulp-cli

This tells node's package manager (npm) to install gulp-cli on your system.  The <code>-g</code> tells npm to install this package globally, this means that you can use this command in any folder on your system.

## Downloading

Now you have all the prerequisites installed on your system the next step is to grab the latest copy of triangular from themeforest.

So first of all you will need to log in to your [themeforest account](http://themeforest.net).

After that goto your downloads page

![ThemeForest Downloads Page](assets/images/getting-started/tf-download.png)

From there locate the {{theme.name}} template click the **download button** and then select **All files & documentation**

![ThemeForest Downloads Page](assets/images/getting-started/tf-downloads.png)

<div class="alert alert-info" role="alert">
  Congratulations.  You now have a shiny new copy of {{theme.name}}
</div>

### Unzipping the download

You should now have a file that looks something like this.

<code>triangular-1.0.0.zip</code>

In order to get at the goodness inside you will need to [unzip this file](https://answers.stanford.edu/solution/how-do-i-zip-and-unzip-files-and-folders-do-i-need-winzip-or-stuffit).

### Zip Contents

Once you have unzipped the {{theme.name}} zip file you will find the following folders have been created.

| Folder / File | Contents                                                         |
|:--------------|:-----------------------------------------------------------------|
| changelog.md  | lists changes to each version of the template                    |
| source/       | contains the templates source files                              |
| demo/         | compiled version of source files (minified version of demo site) |
| docs/         | the documentation you are reading now                            |
| extras/       | lots of extra material design & code goodies                     |

The source folder contains all the templates source code files.  

The demo folder contains a built version of the source files, this is an exact copy of the demo site that is running on {{theme.name}}'s ThemeForest demo site.

The docs folder contains a copy of the latest documentation for {{theme.name}}, there is also an online copy available.

The extras folder contains lots of material design graphics and a copy of the {{theme.name}} PHP API that provides the dummy content for the demo.

# The source code

## Where is the code?

Once you have [downloaded and unzipped](#downloading) the main template download zip.

You will find several folders have been created, one of which will be a folder called source.

This is where you will find all the code for triangular.

## Folder and file structure

Inside the source folder you will see a folder structure like this:

| Folder / File      | Contents                                                         |
|:-------------------|:-----------------------------------------------------------------|
| .bowerrc           | Sets folder to install bower components                          |
| .editorconfig      | Sets editor coding standards                                     |
| .eslintrd          | Sets eslint configuration                                        |
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

| Folder / File | Contents                    |
|:--------------|:----------------------------|
| app/          | Contains the main app files |
| assets/       | Contains app image files    |
| 401.tmpl.html | 401 page html               |
| 404.tmpl.html | 404 page html               |
| 500.tmpl.html | 500 page html               |
| favicon.png   | Favourite icon              |
| index.html    | Main index html file        |

Inside the app folder you will find the following files and folders

| Folder / File                 | Contents                                                       |
|:------------------------------|:---------------------------------------------------------------|
| examples/                     | All the example modules used in the app                        |
| i18n/                         | App translation files                                          |
| layouts/                      | Templates used for footer, sidenavs, loader & toolbar in app   |
| permission/                   | Optional module to add permissions to routes and menus         |
| scss/                         | Style SCSS for the app                                         |
| seed-module/                  | Example starter module to teach module structure & function    |
| translate/                    | Optional module to add multi-language translations to template |
| triangular/                   | The main triangular module                                     |
| app.module.js                 | The main app module file                                       |
| app.run.js                    | Handles error redirection on state change error                |
| app.scss                      | The main app scss file                                         |
| config.chartjs.js             | Config to make chartjs plugin use MD colors                    |
| config.route.js               | Config to set up your app routes                               |
| config.triangular.layout.js   | Config to set triangulars default admin page layout            |
| config.triangular.settings.js | Config to set triangulars default settings                     |
| config.triangular.themes.js   | Config to set up triangulars theme colors and themes           |
| error-page.controller.js      | Controller for 401, 404 & 500 error pages                      |
| translate.filter.js           | Translation filter used by optional translation module         |
| value.googlechart.js          | Adds a value used by google charts plugin                      |

## Module structure

Each module in {{theme.name}} uses John Papa's recommended structure and naming conventions.

To find out how this structure works we will describe the seed-module module's structure below.

| Folder / File           | Contents                                                |
|:------------------------|:--------------------------------------------------------|
| seed-page.controller.js | Example Controller for the seed-page.tmpl.html page     |
| seed-page.tmpl.html     | Example page HTML                                       |
| seed-page.tmpl.scss     | Example page SCSS for CSS styling                       |
| seed.module.js          | Seed module js file                                     |
| seed.config.js          | Sets up the modules routes and adds menus to triangular |

# Developing

## Setup development server

Hopefully now you have [Installed the prerequisites](#prerequisites) and have read about [the file and folder structure](#folder-and-file-structure).

So let's start coding.

There are two command you need to run from inside the triangular source folder (the main root directory of the source folder that contains gulpfile.js).

These two commands will install the js packages needed to run the development server and create production builds.

### Install node modules

Run the following command from the root of your source files to install the node modules listed in packages.json

    npm install

### Install bower packages

Run the following command from the root of your source files to install the bower packages listed in bower.json

    bower install

<div class="alert alert-info" role="alert">
  <strong>Note</strong> - You will need [git installed](#install-git) for bower to work <a href="https://git-scm.com/">Git website</a>
</div>


## Starting development server

Once you have all the [node packages](#install-node-modules) & [bower packages]((#install-node-modules)) installed all ready to go you can start developing.

To do this you just need to start a local development server, from the root of the source folder run this command.

    gulp serve

This should automatically open up a browser window with the template running.

## Seeing your changes

Once the development server is up and running any changes you make to the HTML & JS & SASS files will trigger your browser window to auto refresh with your changed code.

# Deploying

Once you have used the [development server](#starting-development-server) to modify the app to your needs you will want to get your new app online for everyone to see.

Triangular has a build system that will grab all the JS, HTML & SASS you have created whilst developing and collating it all together into a minimal package of HTML, CSS & JS files that you can the upload and deploy on your web server.

## Running a production build

Once you are happy with your site you can initiate a build that will create a copy of the template that you can FTP to your web server.

Just run the command

    gulp build

This will initiate a build, once it has finished you will find a new folder has been created called <code>dist</code>.  This is where the built files have been created, you will find the following files.

| Folder / File     | Contents                                           |
|:------------------|:---------------------------------------------------|
| app/              | Example data files and example source code         |
| assets/images/    | Images used in the app                             |
| fonts/            | Font icon files                                    |
| scripts/app.js    | Minified App AngularJS code                        |
| scripts/vendor.js | Minified JS packages (jquery, angularjs, etc)      |
| styles/app.css    | Minified app css                                   |
| styles/vendor.css | Minified packages css (font-awesome, chartjs, etc) |
| 401.tmpl.html     | 401 page html                                      |
| 404.tmpl.html     | 404 page html                                      |
| 500.tmpl.html     | 500 page html                                      |
| favicon.png       | App FavIcon                                        |
| index.html        | Main index.html page                               |

## Testing a production build

If you need to troubleshoot the production build process there is also an option to run the production build in the development server.

Just run the command

    gulp serve:dist

The local server that runs will now be running a built version of your site as if you ran <code>gulp build</code>

# Visual Studio

For users that want to use Visual Studio to develop their app [this guide explains how to get Gulp working together with VS](http://www.davepaquette.com/archive/2014/10/08/how-to-use-gulp-in-visual-studio.aspx)

# The demo files

The files you will find in the demo folder are a production ready build of the source files found in the source folder.

This is an exact copy of the files that are loaded on our demo site.

# Material Avatars

In the material-avatars folder you will find our set of material avatars, over 1400 material style avatars.

The images are divided into 2 folders men and women each containing subfolders for each face type.

Or if you have the skills you can always grab the MaterialAvatars.ai file and edit it yourself in Adobe Illustrator.

# Material Font

In the material-font folder you will find our set of material font characters.

We have proivded a full alphabet and number set of images.

Or if you prefer you can always open the material-font.ai in Adobe Illustrator and modify the font as you like.

# PSD files

In the PSD folder you will find the PSD design file for the {{theme.name}} template.

# Triangular API

To make sure that {{theme.name}} is API ready we created a test API in PHP to call.

This is what provides the dummy data that is used on the Email and Example pages.

We have included it here in case anyone wants a start on creating their own API.

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
