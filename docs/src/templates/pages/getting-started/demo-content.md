---
  title: Demo Content
  subtitle: How to set up the themes demo content
  layout: docs.hbs
  section: getting-started
---

# Installing Content

## How To Install The Demo Content Video
The video below shows you in detail how to install the demo content onto your WordPress site.
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/jn1lAzi3Zic?list=PLjEWC37YdOvvC8P-Xrq-7ntPJucGP5Non" allowfullscreen></iframe>
</div>

## Step By Step Instructions
Here are the instructions on how to install a demo content site.

**Step 1 - ** Select <mark>{{theme.name}}</mark> / <mark>Demo Content</mark> from the Admin bar side menu.
<img src="assets/images/getting-started/demo-content-wp.png" alt="Demo Content Install Page" class="img-responsive">

**Step 2 - ** Choose a demo content site to install and then click the <mark>View Details</mark> Button.
<img src="assets/images/getting-started/demo-content-detail.png" alt="Demo Content Detail Page" class="img-responsive">

**Step 3 - ** Make sure you have all the required plugins installed for the demo content installer to continue.  If you have any red x marks in the required plugins section click the <mark>Install Plugins</mark> button and install the required plugins.

**Step 4 - ** Click the blue <mark>Install</mark> button.
<img src="assets/images/getting-started/demo-content-check.png" alt="Demo Content Checklist Page" class="img-responsive">

**Step 5 - ** Click the <mark>Install the package button</mark>.  If you have any errors in the pre install check list look at the <a href="#troubleshooting">troubleshooting section</a>.
<img src="assets/images/getting-started/demo-content-install.png" alt="Demo Content Installer Page" class="img-responsive">

**Step 6 - ** Wait for the demo content installer to install all the demo content

**Step 7 - ** Your all done!

# Troubleshooting

## WP Memory Limit
Sometimes the demo content installer might cause your server to run out of memory during the installation.  To combat this you can always up the memory limit that WordPress uses.

- Edit wp-config.php and enter the following **above** the line that says **/* That's all, stop editing! Happy blogging. */**
  <br><code>define('WP_MEMORY_LIMIT', '96M');</code>
- If you can access your server's PHP.ini file, then find the following line and increase the memory limit ie:<br>
  <code>memory_limit = 96M</code>
- If you cant't have access PHP.ini try adding this to the bottom of the .htaccess file at the root of your WordPress site:<br>
  <code>php_value memory_limit 96M</code>
- If you don't feel confident to attempt the above please contact your host provider.

## PHP cURL fsock
In order for the demo content installer to be able to download the demo content, you will need to have either PHP cURL or fsock enabled in your PHP settings.

### cURL
<a href="http://php.net/manual/en/curl.setup.php" target="_blank">Install cURL</a> Instructions on how to install PHP cURL

### fsock
To enable fsock you need to edit your <code>php.ini</code> and make sure you have the following config

<pre>allow_url_fopen = On</pre>


# Removing Content
If you want to remove the demo content that has been installed you can do so by following the instructions below

<div class="alert alert-danger text-uppercase">
    <strong>WARNING!</strong> This will remove all the pages / posts / widgets / menus / skins that were installed by the demo content installer.  All content will be removed / even pages you may have edited
</div>

**Step 1 - ** Select <mark>{{theme.name}}</mark> / <mark>Demo Content</mark> from the Admin bar side menu.
**Step 2 - ** Note one of the demo content packages is marked <mark>installed</mark> click the view details button for this package.
**Step 3 - ** Click the remove button in the bottom right corner of the popup window.
<img src="assets/images/getting-started/demo-content-remove.png" alt="Demo Content Installer Remove" class="img-responsive">
**Step 4 - ** Read the instructions carefully and if you are positive you want to revert your site back to its original state click the I'm sure button


