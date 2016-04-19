---
  title: Elements
  subtitle: Guide to Angular Material Elements
  layout: docs.hbs
  section: triangular
---

# Introduction

{{theme.name}} uses [Angular Translate](https://angular-translate.github.io/) to translate strings in the template.

Angular tranlsate has [great documentation](http://angular-translate.github.io/docs/#/guide) as well as an [API guide](http://angular-translate.github.io/docs/#/api).

# Set your application languages

In order to set the languages that your app supports you just need to edit the translate module config file at <code>app/translate/translate.config.js</code>

At the top of the config file is this code.

    var appLanguages = [{
        name: 'Chinese',
        key: 'zh'
    },{
        name: 'English',
        key: 'en'
    },{
        name: 'French',
        key: 'fr'
    },{
        name: 'Portuguese',
        key: 'pt'
    }];

This sets out the name and keys of the language that your app will support.

<div class="alert alert-info" role="alert">
    **Note** - The key you set here will determine the names of the translation files that are loaded.  e.g. <code>key: fr</code> will make the app load <code>app/i18n/fr.json</code>
</div>


# How to translate a page

In order to translate some text in a page just use the translate directive in your HTML.

for example

    <h1 translate>Settings</h1>

Then edit or create a json translation file in your app/i18n folder.

So for example to translate to French we would create a new file called <code>fr.json</code> in the <code>app/i18n</code> folder and add the following json.

    {
        "Settings": "Paramètres",
    }

You will then see that your Settings text is translated into Paramètres.

# How to translate a menu item

Each menu item is filtered with the translate filter.  So just make sure that the name you use for your menu is translated in your i18n json files.

For example in <code>app/examples/charts/charts.config.js</code> you will find the following code.

    triMenuProvider.addMenu({
        name: 'Charts',
        icon: 'zmdi zmdi-chart',
        type: 'dropdown',
        priority: 5.1,
        children: [{

So for example to translate to French we should have translation in our <code>i18n/fr.json</code> file that looks like this.

    {
        "Charts": "Graphiques",
    }

Then the menu item will use Graphiques for it's name.

# Auto translating all template strings

We have built in an auto translater into triangular that sends all the strings in your i18n folders to Yandex to be translated.

It then writes translation files in your chosen language.

First of all to use this you will need to [get a Yandex API Key](https://tech.yandex.com/translate/).

Once you have a key edit this file

    app/gulp/translate.js

At the top of the file you will see this code


    // ADD YOUR YANDEX API KEY HERE
    // go here for more info
    // https://tech.yandex.com/translate/
    var YANDEX_API_KEY = '';

edit the YANDEX_API_KEY and add your api key

    var YANDEX_API_KEY = '1234567894621695846516546951651981';

Once this is done, open up a terminal and cd to your app directory.

From there you can run the gulp task that will translate the template translation files.

You need to specify 2 lanuages e.g.

    gulp translate --from en --to fr

The command above will grab all en.json files from all your i18n folders send them to Yandex to be translated into French.

Once this is done the resulting translations will be written to fr.json files in each coresponding i18n folder.

# Using modular translations

Out of the box triangular puts all the translations strings of the app into one file in the <code>app/i18n</code> folder.

But it is also possible to separate all the translations into your angularjs modules.

To do this just create a new folder inside your module with the name i18n and add your translation files into there.

So for example to make the examples/chart module take care of its own translations you would create the following folder <code>app/examples/chart/i18n</code> and then add your translation json files inside there.

After that the last thing to do is tell angular translate to look in that folder when it is looking for translations.  Edit <code>app/translate/translate.config.js</code> and add the following code.

    $translatePartialLoaderProvider.addPart('app/examples/chart');

Adding this tells angular translate to also look in your newly created folder.

# How to turn off translations

Out of the box triangular is multi-language, but we realise this might not be for everyone.  
So we have made turning off multi-language is very simple.

Edit the app module file <code>app/app.module.js</code> and comment out or remove this line

    'app.translate',

This will stop the app translate module from being loaded and therefore stop all translation functionality.
