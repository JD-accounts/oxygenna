---
  title: Installation
  subtitle: Installation instructions for the <%= theme.name %> theme
  layout: docs.hbs
  section: getting-started
---

# ThemeForest

## How To Download the Theme Video
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/p7TbRVeNk3Y?list=PLjEWC37YdOvvC8P-Xrq-7ntPJucGP5Non" allowfullscreen></iframe>
</div>

## Downloading from ThemeForest
To get your copy of the theme follow the instructions below.

Log in to your <a href="http://www.themeforest.net" target="_blank">themeforest account</a> and then goto the <mark>account menu</mark> and click the <mark>Downloads</mark> option from the dropdown
<img src="assets/images/getting-started/tf-download.png" alt="Theme Forest download" class="img-responsive">
Then you can select your purchased theme and click the <mark>Download</mark> button, followed by the <mark>All files & documentation</mark> option.
<img src="assets/images/getting-started/tf-downloads.png" alt="Theme Forest downloads page" class="img-responsive">


## Zip file contents

Once you have downloaded the zip file, you can on unzip it using your favourite ZIP software.  When it has finished you should have a folder with the following files & directories inside.

| Folder        | Contents                                                              |
| ------------- |:----------------------------------------------------------------------|
| documentation | contains theme's documentation                                        |
| licensing     | theme licence files                                                   |
| psds          | all the themes layered PSD files for Adobe Photoshop                  |
| lambda-theme-ver.zip |the wordpress theme zip file ( for installation into WordPress ) |
| lambda-child-theme-ver.zip |the wordpress Child theme zip file

# Installing the theme

## How To Install Video
The video below shows you how to upload the {{theme.name}} theme and activate it in WordPress.
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/cIYPngslLw4?list=PLjEWC37YdOvvC8P-Xrq-7ntPJucGP5Non" allowfullscreen></iframe>
</div>

## Installation methods
There are two ways to install the {{theme.name}} theme.

<div class="row">
    <div class="col-md-6">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h4 class="panel-title text-center">Via WordPress (Recommended)</h4>
            </div>
            <div class="panel-body">
                <ol>
                    <li>Login to the wordpress administration panel</li>
                    <li>Go to Appearance > Themes</li>
                    <li>Click the Install Themes tab</li>
                    <li>Click the Upload link at the top of the page</li>
                    <li>Click the choose file button in the Install a theme in .zip format box</li>
                    <li>Browse for the theme zip inside the theme folder and click Install Now.</li>
                    <li>The Installed Theme from uploaded file will display the resolts of the installation.</li>
                    <li>Once you have uploaded the theme, you need to activate it by going to Appearance > Themes, and activate {{theme.name}}.</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h4 class="panel-title text-center">Via FTP</h4>
            </div>
            <div class="panel-body">
                <ol>
                    <li>Connect to your website host, using some of many FTP clients, for example FileZilla.</li>
                    <li>Go to your default WordPress themes folder, and upload Lambda into that folder. Properly uploaded theme should have path like this : ../wp-content/themes/lambda</li>
                    <li>Once you have uploaded the theme, you need to activate it by going to Appearance > Themes, and activate Lambda.</li>
                </ol>
            </div>
        </div>
    </div>
</div>

## Child theme
We have provided a **child theme** in case you want to modify the theme while keeping it up to date. The child theme is included within the main download zip file.

To use the child theme upload it as the standard theme and then activate it in Appearance > Themes from the WordPress menu.

## How To Install Theme Plugins Video
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/RUXmw0keaPA?list=PLjEWC37YdOvvC8P-Xrq-7ntPJucGP5Non" allowfullscreen></iframe>
</div>

## Install Plugins Instructions
Once you have installed & activated the theme you will see a notice at the top of your dashboard recommending that you install plugins that are bundled with the theme.
<img src="assets/images/getting-started/install-plugins.png" class="img-responsive" alt="Install plugins notice">

It is not essential to install all plugins that come with the theme, just the ones you need to make your site.  Some of the demo content packages require you to install certain plugins, more on that in the <a href="demo-content.html">demo content page</a>

# Troubleshooting
Here are some solutions for common problems when installing a theme

## Are you sure you want to do this
If when installing the theme you see this error: <strong>Are you sure you want to do this?</strong>, you will need to change the following parameters in your <code>php.ini</code> file:

<dl class="dl-horizontal">
  <dt>post_max_size</dt>
  <dd>25M</dd>
  <dt>upload_max_filesize</dt>
  <dd>25M</dd>
</dl>

If you don't have access to <code>php.ini</code>, please contact your host.  Or try adding the following lines to your .htaccess file.
<pre>php_value  post_max_size  25M
php_value  upload_max_filesize  25M</pre>


# Setting the theme's permalinks
In {{theme.name}} theme you can set permalinks for all the custom post types, like the services, the staff members and the portfolios. To setup the permalinks, follow these steps

- Click on **{{theme.name}}>Post Types**.
- Type the permalinks on the text boxes.
- Save your changes.

![permalinks](assets/images/getting-started/permalinks.png)
