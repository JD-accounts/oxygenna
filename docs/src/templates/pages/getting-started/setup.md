---
  title: Setup
  subtitle: How to get started setting up the build
  layout: docs.hbs
  section: getting-started
---

# Setting up your system

In order you run the build system for the template you will need to install node.js on your system.  Follow the instructions below to install node.js on your system.

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

# The source files

The source files for the template can be found in the main download.  Once you have unzipped the main download zip file from themeforest you will find another zip file inside named source.zip.

Unzip the source.zip file and you will see a folder structure like this:

| Folder / File |                Contents               |
| ------------- | :------------------------------------ |
| app           | contains the templates main app files |
| test          | testing folder                        |
| bower.json    | bower package file                    |
| package.json  | node.js package file                  |
| gulpfile.js   | gulp build file                       |
| composer.json | PHP composer package file             |
| changelog.md  | lists changes to the template         |

Inside the app folder you will find the following files and folders

| Folder / File |                                          Contents                                          |
| ------------- | :----------------------------------------------------------------------------------------- |
| assets        | contains images used in the template                                                       |
| fonts         | font icon files used in the template                                                       |
| layouts       | layout files used in nunjucks template system                                              |
| partials      | html partial files                                                                         |
| scripts       | all the templates javascript files                                                         |
| styles        | all the templates SASS files                                                               |
| *.html        | the main html files that are combined with the layouts / partials to create the html pages |

# Getting the build system ready

In order to finish the set up of the build system you just need to run 2 simple commands from the root directory of your unzipped source files.

## Install bower packages

Run the following command from the root of your source files to install the bower packages listed in bower.json

    bower install

## Install node modules

Run the following command from the root of your source files to install the node modules listed in packages.json

    npm install


# Running a development server

## Start a development server

Once you have bower packages and node modules installed you are ready to code.  To start a development server just type.

    gulp serve

This should automatically open up a browser window with the template running.  Any changes you make to the HTML & JS & SASS files will be auto updated in your browser window.

# Creating a production build

Once you are happy with your changes you can initiate a build that will create a copy of the template that you can FTP to your web server.

Just run the command

    gulp build

This will initiate a build, once it has finished you will find your built files in a folder called dist that will have been created for you.

