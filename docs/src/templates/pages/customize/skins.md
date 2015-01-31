---
  title: Skins
  subtitle: Change how your site looks using the theme's skin functionality
  layout: docs.hbs
  section: customize
---

# Site Skins
{{theme.name}} allows you to create skins that alter the look of your site.  You can create unlimited skins, and switch your site from one skin to another easily with the customizer.  The skin will define all aspects of your site's looks.

## Default skins
{{theme.name}} comes with a few ready made skins that you can get started with right away.  Or if you prefer make your own skin from scratch.

## Creating a skin
The Skins menu option on the left is where you add skins. To add a new skin, select the **Skins > Add New** option from the left hand WordPress menu.

## Modifying a skin
From the **Skins > All Skins** menu you can see all the skins currently available to the theme. Click on the skin that you wish to edit and the options of that skin will appear.

## Deleting a skin
Deleting a skin is easy to do. From the **Skins** menu, under the name of the skin, click on the <mark>Thrash</mark> link. Alternatively, from the options of the skin, click on the <mark>Move to Thrash</mark> link, next to the <mark>Update</mark> button. Once the skin is in the thrash, you need to remove it from the Trash for it to be removed permanently.

## Setting the current site skin
In order to set the skin that you want to use for the website, you need to open the customizer. Go to **Appearance > Customize**. From the menu accordions on the left, click on <mark>Site</mark>. Once expanded, select a skin from the dropdown option <mark>Site Skin</mark>. Hit <mark>Save</mark>.
<img src="assets/images/customize/site_skin.png" alt="Current Skin">

# Skin Options
Visit the [Skin Options](/skin-options.html) section of the docs under the <mark>Options</mark> menu to read through all the options of a skin.
<br>For the <mark>CSS Style</mark> options, click on **Skins > Settings**

## How the Skin Css gets loaded
In order to set how the skin Css is loaded, go to **Skins->Settings**. There are two options for how the skin CSS is loaded.
From the <mark>Load CSS</mark> option, 
- **Header:** Injects your skin CSS straight into the header.
- **File:** Creates a single file that will include all the skin CSS and load it in the header.

## How to change the CSS format
The CSS can have three different output formats, **Normal**, **Nested** and **Compressed**. 
- **Normal:** Outputs the CSS normally, which is better for debugging purposes. 
- **Nested:** Nested style is the default Sass style, because it reflects the structure of the CSS styles and the HTML document they’re styling. Each property has its own line, but the indentation isn’t constant. Each rule is indented based on how deeply it’s nested.
- **Compressed:** Compressed style takes up the minimum amount of space possible, having no whitespace except that necessary to separate selectors and a newline at the end of the file. It also includes some other minor compressions, such as choosing the smallest representation for colors. It’s not meant to be human-readable.

<div class="alert alert-info">
    You can read more about output styles from <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style">SASS documentation</a>
 </div>

## Exporting a Skin
When editing a skin, at the bottom of the page there is the <mark>Import/Export</mark> metabox. From the <mark>Export Data</mark> textfield, copy all the content. This is all the data that you need for the import of this skin.

## Importing a Skin
From the same <mark>Import/Export</mark> metabox as before, there is an empty <mark>Import Data</mark> textfield that we add content to. This is the place that you need to add the content that you acquired from the export of the skin.  

<img src="assets/images/customize/import.png" alt="Import/Export">