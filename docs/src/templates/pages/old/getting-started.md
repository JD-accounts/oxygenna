---
  title: Getting Started
  subtitle: An overview of how to download and setup the theme, and more.
  layout: docs.hbs
---
# Getting Started

## Introduction
Thank you for buying Lambda Wordpress theme! Lambda is an elegant, modern and unique wordpress theme and we have spent a very long time developing it from scratch. It is packed with awesome features and its main focus is to make your web pages stand out, while keeping it extremely easy to use and maintain.

Feel free to contact us and give us your feedback about the theme, improvements you feel it needs and the documentation of the theme. We've worked hard to create Lambda and we'll work even harder to support and improve it.

On behalf of **Oxygenna** team thanks again for buying Lambda.

---

## Downloading the theme
Once you have downloaded the zip file from Themeforest, unzip it using your standard zip software.

When it has finished you should have a folder with the following files & directories inside.

| Folder        | Contents                                                              |
| ------------- |:----------------------------------------------------------------------|
| icons         | Set of hi resolution flat icons                                       |
| demo          | Demo content data for import                                          |
| documentation | contains theme's documentation                                        |
| licensing     | theme licence files                                                   |
| psds          | all the themes layered PSD files for Adobe Photoshop                  |
| lambda-theme-ver.zip |the wordpress theme zip file ( for installation into WordPress ) |
| lambda-child-theme-ver.zip |the wordpress Child theme zip file                         |

---

# Installation
There are two ways to install **Lambda** theme.

1.  Via **WordPress** (Recommended)
  * Login to the wordpress administration panel
  * Go to Appearance > Themes
  * Click the Install Themes tab
  * Click the Upload link at the top of the page
  * Click the choose file button in the Install a theme in .zip format box
  * Browse for the theme zip inside the theme folder and click Install Now.
  * The Installed Theme from uploaded file will display the results of the installation.
  * Once you have uploaded the theme, you need to activate it by going to Appearance > Themes, and activate Lambda.
2. Via ftp
  * Connect to your website host, using some of many FTP clients, for example FileZilla.
  * Go to your default WordPress themes folder, and copy Lambda into that folder. Properly uploaded theme should have path like this : ../wp-content/themes/lambda

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to install Lambda: [Getting started](http://youtu.be/P0Qxtqjdoao)
</div>

<div class="alert alert-success">
  We have provided a **Child theme** in case you want to modify the theme while keeping it up to date. The child theme is included within the main download folder. To use the child theme upload it as the standard theme and then activate it in Appearance > Themes from the WordPress menu.
</div>

<div class="alert alert-danger">
  Before you install the theme, make sure you have installed **wordpress version  3.8** or higher. You also need to have **PHP 5.2.4** or higher and **MySQL 5.0** in order for the theme to function correctly. There are two ways to install, select a method from the accordion on the right.
</div>

## Troubleshooting

<table class="table table-hover">
  <tbody>
    <tr>
      <th>Are you sure you want to do this?</th>
      <td>If when installing the theme you see this error: <strong>Are you sure you want to do this?</strong>, you will need to change the following parameters in your <code>php.ini</code> file:<br><br>
<pre>post_max_size = 25M
upload_max_filesize = 25M</pre><br>
If you don't have access to <code>php.ini</code>, please contact your host.  Or try adding the following lines to your .htaccess file.<br><br>
<pre>php_value  post_max_size  25M
php_value  upload_max_filesize  25M</pre></td>
    </tr>
  </tbody>
</table>

---

## Installing the plugins
Now that you have installed and activated Lambda, navigate to the **Appearance->Install Plugins** menu. There, you will see a list of the plugins that we recommend you install for use with the theme. Install/activate the plugins one by one.

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to install and activate the plugins: [Installing plugins](http://youtu.be/P0Qxtqjdoao)
</div>

---

# Demo content

To get started quickly, once you have installed the theme you can install our demo content. This will make your site look exactly the same as the Lambda demo site. Using the demo content, you can customize all the pages to your own needs.
One of the most awesome things that you will come across when using Lambda for the first time is the **OneClick Installer**. Here 's how to make your website look as cool as our demo site.
Go to **Lambda->Demo Content Setup**. After you make sure that there are no problems in the pre-flight checklist you are ready to use the OneClick Installer. Just pick the content that you want to import (Main Demo Content or WooCommerce Shop Content ) and press the **Click Setup** button. All you have to do now is wait for the importer to download your content.
![demo](assets/images/demo-content.png)

<!-- Take a look at the video guide on how to install the demo content: [importing the demo content](TBA) -->

<div class="alert alert-danger">
  If importing the demo fails, it will likely be due to your **server settings**, which will be limiting the import. In case that happens, please refer to the troubleshooter below in order to increase some memory limits for Wordpress.
</div>

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to import the demo content: [importing the demo content](http://youtu.be/P0Qxtqjdoao)
</div>


## Demo content Troubleshooting

If you have any issues with the import, i.e. any errors, then you'll likely need to increase the memory limit. Here's a guide of how to proceed
:

- Edit wp-config.php and enter the following **above** the line that says **/* That's all, stop editing! Happy blogging. */**
  <br><code>define('WP_MEMORY_LIMIT', '96M');</code>
- If you can access your server's PHP.ini file, then find the following line and increase the memory limit ie:<br>
  <code>memory_limit = 96M</code>
- If you cant't have access PHP.ini try adding this to the bottom of the .htaccess file at the root of your WordPress site:<br>
  <code>php_value memory_limit 96M</code>
- If you don't feel confident to attempt the above please contact your host provider.

# Updating Lambda

Updating is a lot easier if you use the **Envato Wordpress Toolkit**.

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to easily update Lambda
</div>

<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/DsZR5Tojvnk" allowfullscreen></iframe>
</div>