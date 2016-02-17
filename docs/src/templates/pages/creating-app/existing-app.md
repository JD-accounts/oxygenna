---
  title: Adding triangular to an existing app
  subtitle: How to add triangular to existing codebase
  layout: docs.hbs
  section: creating-app
---

# Installing triangular via bower

We had lots of requests for this from people who have existing codebases and want to add triangular to their project and also keep it up to date.

The process is quite simple, run the following command in your project folder

```bash
bower install https://github.com/oxygenna/triangular-bower.git --save-dev
```

or if you have [SSH Certificates](https://help.github.com/articles/generating-ssh-keys/) set up on GitHub

```bash
bower install git@github.com:oxygenna/triangular-bower.git --save-dev
```

<div class="alert alert-danger" role="alert">
    <i class="fa fa-warning"></i> Note - You will need to have [requested access to our GitHub repos](http://triangular.oxygenna.com/#/github) to do this
</div>

This will install triangular as a bower package and also all of it's dependencies.

We have created an [example app](#bower-seed-app) that is included in the main download zip that demonstrates how triangular can work using bower.

# Adding triangular to your project

You will have to do 2 things to get triangular runnning in your existing project

1. Load the triangular CSS and the extra packages CSS
2. Load the triangular Javascript and the extra packages Javascript

The code for these two steps are provided below.

We have created an [example app](#bower-seed-app) that is included in the main download zip that shows contains all the code below.

## Loading the CSS

Add the following inside your app <code>&lt;head&gt;</code> tag

```HTML
<!-- load external bower css files -->
<link rel="stylesheet" href="bower_components/angular-chart.js/dist/angular-chart.css" />
<link rel="stylesheet" href="bower_components/angular-dragula/dist/dragula.min.css" />
<link rel="stylesheet" href="bower_components/angular-material-data-table/dist/md-data-table.min.css" />
<link rel="stylesheet" href="bower_components/fullcalendar/dist/fullcalendar.css" />
<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.css" />
<link rel="stylesheet" href="bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css" />
<link rel="stylesheet" href="bower_components/textAngular/src/textAngular.css" />
<link rel="stylesheet" href="bower_components/weather-icons/css/weather-icons.css" />
<link rel="stylesheet" href="bower_components/angular-material/angular-material.min.css" />

<!-- load triangular css -->
<link rel="stylesheet" href="bower_components/triangular/triangular.css" />
```

## Loading the Javascript

Add the following lines just above your <code>&lt;/body&gt;</code> tag.

```HTML
<!-- load external bower js -->
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-animate/angular-animate.js"></script>
<script src="bower_components/Chart.js/Chart.js"></script>
<script src="bower_components/angular-chart.js/dist/angular-chart.js"></script>
<script src="bower_components/angular-cookies/angular-cookies.js"></script>
<script src="bower_components/angular-digest-hud/digest-hud.js"></script>
<script src="bower_components/angular-dragula/dist/angular-dragula.js"></script>
<script src="bower_components/angular-google-chart/ng-google-chart.js"></script>
<script src="bower_components/lodash/lodash.js"></script>
<script src="bower_components/angular-google-maps/dist/angular-google-maps.js"></script>
<script src="bower_components/highlightjs/highlight.pack.js"></script>
<script src="bower_components/angular-highlightjs/build/angular-highlightjs.js"></script>
<script src="bower_components/angular-linkify/angular-linkify.js"></script>
<script src="bower_components/angular-local-storage/dist/angular-local-storage.js"></script>
<script src="bower_components/angular-aria/angular-aria.js"></script>
<script src="bower_components/angular-material/angular-material.js"></script>
<script src="bower_components/angular-material-data-table/dist/md-data-table.min.js"></script>
<script src="bower_components/angular-messages/angular-messages.js"></script>
<script src="bower_components/moment/moment.js"></script>
<script src="bower_components/angular-moment/angular-moment.js"></script>
<script src="bower_components/angular-resource/angular-resource.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<script src="bower_components/angular-translate/angular-translate.js"></script>
<script src="bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js"></script>
<script src="bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js"></script>
<script src="bower_components/angular-translate-storage-local/angular-translate-storage-local.js"></script>
<script src="bower_components/fullcalendar/dist/fullcalendar.js"></script>
<script src="bower_components/angular-ui-calendar/src/calendar.js"></script>
<script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
<script src="bower_components/countUp.js/countUp.js"></script>
<script src="bower_components/rangy/rangy-core.js"></script>
<script src="bower_components/rangy/rangy-classapplier.js"></script>
<script src="bower_components/rangy/rangy-highlighter.js"></script>
<script src="bower_components/rangy/rangy-selectionsaverestore.js"></script>
<script src="bower_components/rangy/rangy-serializer.js"></script>
<script src="bower_components/rangy/rangy-textrange.js"></script>
<script src="bower_components/textAngular/src/textAngular.js"></script>
<script src="bower_components/textAngular/src/textAngular-sanitize.js"></script>
<script src="bower_components/textAngular/src/textAngularSetup.js"></script>

<!-- load triangular js -->
<script src="bower_components/triangular/triangular.js"></script>
```

# Bower Seed App

You can find an example of how the bower version of triangular can be set up in the <code>extras/triangular-seed/</code> folder of the main download zip file.
