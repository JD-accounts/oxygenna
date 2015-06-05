---
  title: Logo & Name
  subtitle: How to change the template logo and name
  layout: docs.hbs
  section: customisation
---

# Changing the logo

The super easy way to change the template logo is to replace this file.

    src/assets/images/logo.png

With your own logo.  This will replace the logo used througout the theme (Logo above sidebar, loading animations, etc)

<div class="alert alert-info" role="alert">
    Note - Use the same image size as the template for the best results.
</div>

If you want to change the image filename used for the template logo edit the following line in app.js.

    logo: 'assets/images/logo.png',


# Changing the template name

To change the name that is shown in the logo bar at the top of the sidemenu & loading animation just edit the following lines in app.js.

    .constant('APP', {
        name: 'triangular',
        logo: 'assets/images/logo.png',
        version: '1.0',
        languages: [{
            name: 'LANGUAGES.ENGLISH',
            key: 'en'
        },{
            name: 'LANGUAGES.FRENCH',
            key: 'fr'
        }],
        defaultSkin: 'cyan-cloud'
    })

Change the name property to the name of your app.