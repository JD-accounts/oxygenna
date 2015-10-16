---
  title: Creating a new app
  subtitle: How get started with a brand new app
  layout: docs.hbs
  section: creating-app
---

# Creating a new app

We recommend that you use the triangular gulp system if you are starting a new app, we have made lots of effort to make sure you can use the triangular code as a solid base for your new application.

The application structure was built using the [Yeoman generator for AngularJS with GulpJS](https://github.com/Swiip/generator-gulp-angular).  This uses gulp coupled with browser sync to make development easy.  Also deploying your app when it is finished is easy and all files (CSS/JS/HTML) are minified to make sure your new app loads super fast.

7 Steps to get started

1. [Download a copy of triangular](download.html).
2. Create a new folder for your new app
3. Copy the contents of the <code>source/</code> folder into your new app folder
4. Open a command prompt and goto your new app folder
5. Follow the [setting up gulp instructions](source.html#setting-up-gulp) to get your development server running or [watch our video](videos.html#how-to-set-up-a-gulp-development-server)
6. Run <code>gulp serve</code> to start your development server (a new browser window will automatically open)
7. Code!  Every time you save any (SCSS/JS/HTML) files, your browser will automatically refresh

# Modifying the code

Once you have the development server up and running you can familiarise yourself with how it works.

The app uses [John Papa's style guide](https://github.com/johnpapa/angular-styleguide) which is fast becoming a great standard for angular apps of all sizes.

You can read about how the templates modules are structured [here](modules.html)

Take a look at all the example codes included with the template you can find them in the <code>app/examples/</code> folder.

All the code for the triangular module is contained inside the <code>app/triangular/</code> folder.  It is best to not modify this code as this code will be updated over time.

If you need to be able to change anything inside triangular and can not do so programatically form inside your app.  Please create an issue in our GitHub repo.

# Updating triangular module

As updates are released to triangular you should follow these steps to update your app when a new version of triangular is released.

1. [Download the new version of triangular](download.html).
2. Compare the bower.json file in your app with the new version (check to see if angular & angular-material versions have changed)
3. If any versions have changed update your bower.json file to match
4. Copy the triangular folder from the new version into your app folder
5. Run your dev server and test your app