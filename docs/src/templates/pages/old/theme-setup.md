---
  title: Theme Setup
  subtitle: An overview of how to setup the theme.
  layout: docs.hbs
---  
# Theme setup

## Customizer
The **Customizer** is the new easy way to customize your theme, whilst getting a full preview of your changes in real time! What makes the customizer awesome is the fact that you can view your changes without saving. As soon as you make your change, page refreshes so you save tons of time! Start editing your website from **Appearance->Customize**.

![customizer](http://placehold.it/750x200)

---

## Setting the home page
In Lambda theme you need to specify which page is going to be your home page. Assuming that you have created a page (or installed the demo content), follow these steps

- Click on **Settings>Reading**
- Select “a static page” and from the dropdown menu select any page you want for your home page.

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to setup your  homepage: [Setting the home page](http://youtu.be/azijfc4XtX4)
</div>

---

## Setting the Blog page
To specify which page is going to be your blog post list page (assuming that you have created a blank page or installed the demo content) follow these steps

- Click on *Settings>Reading*
- Select “a static page” and from the dropdown menu select any page you want for your blog page.

<div class="alert alert-info">
  The settings for the blog page can be found on Lambda>Blog
</div>

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to setup your blog page: [setting the blog page](http://youtu.be/cmK5wrvQnIQ)
</div>

---

## Setting the Footer
Lambda comes with two footer areas that contains up to eight widget positions. The **footer**  (at the bottom of the page) and the **upper footer** directly above the normal footer. To set up the theme’s footers, follow these simple steps.

1. Click on **Lambda>General**
2. Select how many columns you need on your footer and upper footer areas (1 up to 4. These are going to be shown as widgets areas )
3. Select the color swatches of the footers.
4. Select the height options of the footer areas.
5. Enable or disable the “back to top” link.

![footer](assets/images/footer.png)

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to setup your footer: [setting the footer](http://youtu.be/-hJSryfUqDc)
</div>

---

## Setting your Logo

Setting your logo is now achieved through the customizer. Expand the **Logo** tab and fill in the **Logo Text** field and **Logo Image** option.

![logo](http://placehold.it/350x200)

<div class="alert alert-info">
  The logo image size will always be restricted by the height of the header (see next section). To make sure that your logo will look crisp on retina screens, make sure that the height of the image you upload is at least 1.5 times bigger than the header's height.
</div>

---

## Setting the typography
Lambda comes with a powerful typography engine that can help you set your typography as you want. With the option to use any google or typekit font you like you have unlimited options. To set up your typography, you first need to import your fonts:

- Click on **Lambda>fonts**.
- To use any google fonts you need to click on “update fonts” to get the latest list of google fonts. This option can be used later on to update the list of google fonts.
- To use typekit fonts enter the API token from typekit.
- After entering the token, click on update your kits to get the kits you created on typekit.
- Click on **Save Changes** to save your font lists.

![fonts](assets/images/fonts.png)
After saving your font lists, you can go ahead and select the fonts you want in your website.

- Click on **Lambda->Typography**.
- Select your font family from the dropdown list (the list includes some common system font stacks along with all the fonts you have imported from google or typekit) and click **Add font**.
- In the pop up window you can select the variants of the font that you want to use (weights),
and where you want to use this font (all body, headings, forms and block quotes).
- In the extra CSS textfield you can add extra CSS to target specific selectors.
- Click on the **Add font** to save your font.

![typography](assets/images/typography.png)

<div class="alert alert-info">
  You can repeat the last few steps to add as many fonts you want to your web page.
</div>

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to setup your typography: [setting the typography](http://youtu.be/5yeTTAmmlA8)
</div>

**Important Notice**. In order for all the font weights to be applied correctly, it is a prerequisite that the font you are using supports the chosen font weight. In addition, when adding fonts you need to associate the font weight classes with the appropriate weights that the font family supports.

Press the **Insert theme font weight CSS** button(shown below) to add the default theme weight css:

      blockquote p {
      font-weight: 300;
      }
      .light {
        font-weight: 300 !important;
      }
      .hairline {
        font-weight: 200 !important;
      }
      .hairline  strong {
          font-weight: 400;
      }
      h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
      }
      .lead {
        font-weight: 300;
      }
      .lead  strong {
          font-weight: 600;
      }


![logo](assets/images/font_weights.png)

---

## Setting the Menu
To set up a main menu on Lambda theme (assuming you have created a menu or imported the demo content)
click on **Appearance>Menus**.
Select your main menu from the drop down list.

---

### Special menu items
If you want to make a menu item stand out from the others, you can highlight it, giving it a button-like view. Follow these simple steps

1. Go to **Appearance->Menus** menu.
2. Locate the menu item that you want and expand it.
3. From the **Special Menu Item** dropdown list select the **Button Menu** option.
4. Save the menu.

![layout](assets/images/menu_highlight_option.png)
![layout](assets/images/menu_highlight.png)

If you would like to have a tansparent highlight effect, select the **Bordered Button Menu** option instead.
![layout](assets/images/menu_highlight_ghost.png)

<div class="alert alert-info">
  The **Button Menu** and **Bordered Button Menu** options only apply on the root menu items.
</div>

---

### Adding labels to the menu items
To add a label next to a menu item follow these steps.

1. Expand the menu item by clicking on the small arrow on the right side of the item.
2. Type inside the **Extra menu label** field the name of the label. Then, you can choose a label type from the **Label Type** dropdown for e.g Success.
3. Hit **Save Menu**.
![layout](assets/images/menu_item_img_label.png)
![layout](assets/images/menu_img_label.png)

---

### Adding icons to the menu items
To add an icon next to a menu item follow these steps.

1. Expand the menu item by clicking on the small arrow on the right side of the item.
2. From the **Menu Icon** dropdown choose the icon that you wish.
3. Hit **Save Menu**.
![layout](assets/images/menu_item_img.png)
![layout](assets/images/menu-img.png)

---

### Adding a separator between menu items
To add a separator between menu items follow these steps.

1. Click on the accordion item **Links** on the left hand side of the page.
2. Fill in the **URL** field with a simple **#**.
3. Hit **Add to Menu**.
4. Move the new item to the place of the menu where you want the divider to be placed at.
5. Expand the menu item by clicking on the small arrow on the right side of the item.
6. From the **Special Menu Item** dropdown option choose the **Divider** option.
7. Hit **Save Menu**.

![layout](assets/images/divider_1.png)

![layout](assets/images/divider_2.png)

---

## Adding a Mega Menu
A Mega Menu is a menu that is designed to hold a large amount of pages, organised in columns. Follow these simple steps to build it in Lambda.

1. Go to **Appearance->Menus**.
2. Locate the **Screen Options** tab and tick the **Mega Menu** and **Mega Menu Columns** as shown below.
![layout](assets/images/screen-options.png)
3. On the accordion on the left of the **Menu Structure** you should now see two extra options, **Mega Menu** and **Mega Menu Columns**. Click on the Mega Menu to expand.
Add the Mega Menu as if it was a page by pressing **Add to Menu**.
4. Now that you have the **Mega Menu** menu item, time to put the columns that will hold the menu items. Decide whether you want three or four columns. Add the one that you wish as a submenu of the Mega Menu. The **Navigation Label** of each column will be the name of the column on the menu.
5. Do the same for as many columns as you wish to add.
6. Add pages to each column as a submenu. See the images below to get an idea.
![layout](assets/images/mega-menu.jpg)
![layout](assets/images/menu-columns.png)

<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to create a Mega Menu: [Creating a Mega Menu](http://youtu.be/JP7fPpvvpIQ)
</div>
<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to set a menu to be transparent: [Setting a menu to be transparent](http://youtu.be/nO-7TQvJLbE)
</div>

### Clickable Mega Menu items
Should you have the menu set to work on hover, we have added an extra functionality, which allows you to make the mega-menu items clickable. You can set those links if you follow these simple steps.

1. Go to **Appearance->Menus**.
2. Locate the **Screen Options** tab and tick the **Description** as shown  in the screenshot below.
![layout](assets/images/screen-options-description.png)
3. Expand the Mega Menu item that you want to make linkable and type the full URL in the **Description** textarea, as shown in the screenshot below.
![layout](assets/images/mega-menu-description.png)
4. Save the menu.

### Adding background images to Mega Menus
You can add an image backround to Mega Menus by following these simple steps.

1. Find the url of the image that you want to use as a background.
2. Go to **Appearance->Menus** and edit the menu.
3. Locate the Mega Menu item and expand it.
4. Add the url of the image to the **Background Image URL** field.
5. Save the menu
![mega-menu](assets/images/mega-menu-item.png)
![mega-menu](assets/images/mega-menu-background.png)


### Adding widgets to Mega Menus
A new feature that Lambda offers is the ability to add widgets to Mega Menu columns. If you want to use a Mega Menu column as a widget position follow these simple steps

1. Go to **Appearance->Menus** and edit the menu.
2. Locate the Mega Menu Columns item and expand it.
3. From the **Use Column As Widget** dropdown list select the **On** option.
4. Save the menu.
5. Go to **Appearance->Widgets**. A new widget position should now exist named after the name of the column.
6. Add a widget and you are done!

![Menu Widget](assets/images/menu_widgets.png)

---

## Setting the theme's permalinks
In Lambda theme you can set permalinks for all the custom post types, like the services, the staff members and the portfolios. To setup the permalinks, follow these steps

- Click on **Lambda>Permalinks**.
- Type the permalinks on the text boxes.
- Save your changes.

![permalinks](assets/images/permalinks.png)

---

## Setting Theme's layout
Lambda supports both fullscreen and boxed layout.

### Fullscreen
![layout](assets/images/layout_1.png "Fullscreen")

### Boxed
![layout](assets/images/layout_2.png "Boxed")

To set up the layout go to **Lambda>General** and select **normal** or **boxed** in the layout option section.

![layoutoptions](assets/images/layoutoptions.png)
<div class="alert alert-info">
  To set up the background used in the boxed version go to **Appearance>Background**
</div>
<div class="alert alert-success">
  <i class="fa fa-youtube-play"></i> Take a look at the video on how to setup the theme's layout: [Setting the layout](http://youtu.be/FFAr_IFT9rk)
</div>

# Header

## Setting the header
Setting your site header up is now achieved through the **Customizer**, and and your **Skin** options. The following options will allow you to decide the style of your menu, the width, height, whether it should stay at the top of the page or scroll along and many more options that you can see below. 

![header](assets/images/customizer-shop.png)

- **Style:** Set the style of your menu (see next section).
- **Width:** Set the width of the menu to be Normal or Full Width.
- **Sticky:** Sets the header to stay at the top of your site( **Off** ) or scroll along with the page( **On** ).
- **Top Bar:** Enable-disable the top bar.
- **Text Capitalization:** Enable-disable automatic capitalization in header logo and menus.
- **Navbar Scroll Change Point:** Point in pixels after the page scrolls that will trigger the menu to change shape / colour.
- **Hover Menu:** Choose between menu that will open when you click or hover (desktop only option since mobile devices will always use touch).
- **Hover Menu Delay:** Delay in miliseconds before the hover menu opens after hovering on the menu.
- **Hover Menu Fade Delay:** Amount of time in miliseconds for the fade in effect of the menu to take place, after hovering on the menu.

### Skin - Navigation

The options below are located in the **Skins** menu, if you edit the desired skin. Look at the <strong>Navigation</strong> section.

- **Navbar Height:** The default navbar height.
- **Navbar Height After Scroll:** The navbar height after the page has scrolled.
- **Menu Drop Down Width:** The width of the dropdown menus of the navigation.
- **Side Menu Width:** The width of the side menu slide out menu.
- **Side Menu Navigation Max Height:** The the maximum height that the navigation menu in a side menu can be.

### Skin - Navbar/Side Menu Colors

The options below are located in the **Skins** menu, if you edit the desired skin. Look at the <strong>Navbar/Side Menu Colors</strong> section.

- **Background Color:** Background color for top nav bar and side menu.
- **Menu Link Color:** Menu link color.
- **Menu Link Hover Color:** Menu link hover color.
- **Logo Text Color:** Text colour of text logo in the navbar and side menu.
- **Menu Text Color:** Text colour of regular text in the navbar and side menu.
- **Menu Border Color:** Color used for Menu borders.
- **Menu Dropdown Background Color:** Background color of menu dropdown.
- **Menu Dropdown Link Color:** Link color of menu dropdown.
- **Menu Dropdown Link Hover Color:** Link hover color of menu dropdown.
- **Menu Dropdown Text Color:** Text color of menu dropdown.
- **Menu Dropdown Border Color:** Color used for divider and mega menu column dividers.
- **Transparent Menu Link Color:** Link color of navbar when set to transparent.
- **Transparent Menu Link Hover Color:** Link hover color of navbar when set to transparent.
- **Transparent Logo Text Color:** Logo text color of navbar when set to transparent.
- **Transparent Text Color:** Text color of navbar when set to transparent.
- **Transparent Borders Color:** Color used for borders in transparent menu.
- **Logo bar Background Color:** Background color of the logo bar - used in **Menu below header** options.
- **Logo bar Text Color:** Brand text color on the logo bar - used in **Menu below header** options.

## Style
You can choose from `6` unique styles for your **Header** layout

### Logo Left - Menu Right
When using this style the **Logo Image** and **Logo Text** are positioned on the left side of the header, and the Navbar on the right. On the right side of the Navbar there is the widget position.

![header](assets/images/logo-left-menu-right.png)

### Logo Right - Menu Left
When using this style the **Logo Image** and **Logo Text** are positioned on the right side of the header, and the Navbar on the left. On the right side of the Navbar there is the widget position.

![header](assets/images/logo-right-menu-left.png)

### Logo Right - Menu Below
When using this style the **Logo Image** and **Logo Text** are positioned on the right side of the header, and the Navbar below. On the right side of the Navbar there is the widget position.

![header](assets/images/logo-right-menu-below.png)

### Logo Left - Menu Below
When using this style the **Logo Image** and **Logo Text** are positioned on the left side of the header, and the Navbar below. On the right side of the Navbar there is the widget position.

![header](assets/images/logo-left-menu-below.png)

### Logo Center - Menu Below
When using this style the **Logo Image** and **Logo Text** are positioned on the center of the header, and the Navbar below. On the right side of the Navbar there is the widget position.

![header](assets/images/logo-center-menu-below.png)

### Logo Left - Menu Sidebar
When using this style the **Logo Image** and **Logo Text** are positioned on the left side of the header. The Menu pops up inside a sidebar that expands when you click on the expand button on the right side of the navbar. Bellow the menu is the widget position.

![header](assets/images/expand-button.png)
![header](assets/images/logo-left-menu-sidebar.png)

## Menu Site Overrides
Each page separately can have a transparent menu, or hide it completely. 
When editing a page, at the bottom there is a **Site Overrides** option section.
- **Show Menu:** Show or hide the sites top navigation menu (ideal for landing pages).
- **Top Navigation Transparency:** Make the sites top navigation transparent.

![header](assets/images/transparent-menu.png)

---