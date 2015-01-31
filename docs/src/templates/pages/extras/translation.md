---
  title: Translations
  subtitle: How to translate your website
  layout: docs.hbs
  section: extras
---

# Translation Basics

In order to make WordPress recognize the language to which you want to translate the core WordPress, the theme or the plugins, you have to define the language within the <mark>wp-config.php</mark> file or change a setting within the dashboard.


Login to your FTP account and edit the <mark>wp-config.php</mark> file. In the wp-config.php file, look for WPLANG constant which looks like the following code:

    define(‘WPLANG’, ”);

Define the WPLANG constructor by adding the ISO language code of your language. The names consist of locals, a combination of language and regional dialect. Examples: de_DE, nl_NL, es_ES (for more info see here: [ISO language codes](http://www.w3schools.com/tags/ref_language_codes.asp)).

E.g. for translating to Deutsch language, change the WPLANG constant will look like the following code:

    define(‘WPLANG’, ‘de_DE’);

For Wordpress 4.0 or 4.0+ Users:<br>
After the wp-config.php file is edited, login to WP-admin dashboard and navigate to **Settings -> General Settings** page. Make sure <mark>Site Language</mark> option is set correctly.

# Translating the theme with POEdit
No matter if you are setting up a complete new language file or if you just want to edit a translation of one of the pre built language files, the steps to take are easy and more or less the same.
There are many .po editors to choose from, but we suggest <mark>POEdit</mark> as it is easy to use, it is available for all platforms and it is freeware. 


<div class="alert alert-info">
    Download POEdit from [POEdit download](http://poedit.net/download).
</div>

## Translation files
Your translation files should be located inside the **/languages** folder in the root folder of the theme. When you first download the theme, there will be a <mark>lambda_front.pot</mark> file that you need to edit in order to setup you preferred language's translation.

## Install POEdit

Visit the [Translator Handbook](https://make.wordpress.org/polyglots/handbook/tools/poedit/) for more info on how to Download & Install POEdit.

<div class="alert alert-info">
    Download POEdit from [POEdit download](http://poedit.net/download).
</div>

## Translate the theme

In order to start a new translation follow these steps

1. Open the <mark>Lambda_front.pot</mark> in POEdit and you will find all English text strings in the left column (“Source Text”). Once you add translations those will show up in the right column (“Translation”).
2. Choose the line you want to translate and then check the lower part of the POEdit window where you will find a textarea to add the correct translation.
3. When you are done translating all needed strings save the file with your language code, for example: de_DE.po. The corresponding .mo file will be auto created. Make sure both are in <mark>{{theme.name}}/languages</mark> folder. Everytime you update the .po file, make sure to upload both .po and the compiled .mo file in <mark>{{theme.name}}/languages</mark> folder.

<br>
<p style="font-size:21px; font-weight:300;">In orderto edit a pre built language file follow these steps</p>

1. Open the .po file of your language in POEdit and search for the line you want to change. To do so select <mark>Edit > Find (windows)</mark> or <mark>Edit > Search (OSX)</mark> respectively from the menu.
2. In the search window type the string you are looking for. Once it is selected, delete the text from the <mark>Translation</mark> textarea in the lower part of the window and enter your prefered translation.
3. Save the file. The updated .mo file will be auto created. Make sure both are in {{theme.name}}/languages folder

## Updating the translations
Updating your translations after a theme update is usually not required. If you want to keep your customized translations and add any new strings that have been added to a new version of the theme, you can update from the .pot file to get the new strings to your file. Follow these steps to do so

1. Copy your existing custom language folder from your current theme version to the updated version’s language folder.
2. Open it in POEdit. Choose <mark>Catalogue > Update</mark> from POT file and in the opening file dialog choose the <mark>lambda_front.pot</mark> file. The catalogue will be auto updated then with all new strings and your custom ones will be preserved.
3. Don’t forget to save the file once you are done updating and adding translations.

# Translating the theme with WPML
{{theme.name}} is fully compatible with the <mark>WPML</mark> plugin. WPML consists of several modules. The basic module turns WordPress sites multilingual. Other modules help with an enhanced translation process, string translation, media translation and other functions.

## Getting the WPML Plugin
You can download the WPML plugin from [wpml.org](http://wpml.org/).

<div class="alert alert-warning">
    It is advised to install WPML <strong>after</strong> importing the demo content
</div>

## Translating theme text
When you want to translate a page or a post, go to your posts or page admin screen. You will see a list of pages. You see columns for each active language, with a <mark>pencil</mark> icon (for ‘edit translation’) or a ‘<mark>+</mark>’ icon (for ‘add translation’) next to each page.
<img src="assets/images/extras/translation-edit.png" alt="WPML">

Once you click on the '+' or the pencil icon, you should be taken to page editing.

<img src="assets/images/extras/translation-page.png" alt="WPML">

## Translating Strings in the theme
An important part of the translation process is translating the strings that exist inside the theme. Locate these strings from **WPML->Theme and plugins localization**. From the next page, you need to click on the <a class="btn btn-info" href="#">Scan the theme for strings</a>, which will scan the theme for strings that can be translated, and will create a table with the domains that hold translatable strings.
<img src="assets/images/extras/translation-strings.png" alt="WPML">
 Click on the <a class="btn btn-info" href="#">View strings that need translation</a> button of the domain that you want to translate. If you want to translate the frontend strings of {{theme.name}}, edit the <mark>lambda-td</mark> domain. From the next screen, clicking on the **translations** link should allow you to add translations for all the available languages.
<img src="assets/images/extras/translation.png" alt="WPML">

## Translating custom post types and taxonomies
{{theme.name}} comes with a rich set of custom post types such as portfolios and sliders, and custom taxonomies. In order to get a similar interface for translation/duplication as for posts and pages, you need to go to WPML->Translation Management, and select the tab ‘Multilingual Content Setup’. At the bottom of the page you’ll see:
<img src="assets/images/extras/translation-custom.png" alt="WPML">

You need to select ‘translate’ for the custom post types you want to make translatable. Similarly, if you choose ‘translate’ for custom taxonomies such as <mark>Departments</mark>, etc. you’ll get a similar interface for translation as for page categories.

## Translating Widgets
Widgets are translated from **WPML->String Translation**. Refer to <a href="http://wpml.org/2011/03/howto-display-different-widgets-per-language/">How to Display Different Widgets Per Language</a> for more info on how to translate your widgets.

## Translating theme options
Theme animations are also translated from **WPML->String Translation**. If you filter through <mark>theme lambda-admin-td</mark> from the <mark>Select strings within context</mark> filter, you should have all the backend strings that can be translated. Alternatively, if you are searching for a specific string, you can use the _Search_ form.
<img src="assets/images/extras/translation-options.png" alt="WPML">