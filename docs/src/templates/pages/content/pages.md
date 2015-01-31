---
  title: Pages
  subtitle: How to setup your pages
  layout: docs.hbs
  section: content
---

# Visual Composer
{{theme.name}} uses the visual composer to easily allow you to create stunning sites.  We recommend <a href="install.html#install-plugins-instructions">installing the Visual Composer plugin</a> if you are creating complex pages like in our demo sites.

## Creating a page with the Visual Composer
The Pages menu option on the left is where you add pages. To add a new page, select the **Pages > Add New** option from the left hand WordPress menu.
After typing your page's title you can select the page template and start adding your content.<br> 
{{theme.name}} comes bundled with **[Visual composer](http://demo.wpbakery.com/?theme=visual-composer)**. Visual Composer is the most famous drag and drop page builder. You can take full control over your WordPress site, build any layout you can imagine without any programming knowledge required.

In order to enable visual composer, make sure you click on the button below the title, switching to <mark>backend editor</mark> mode.
<img src="assets/images/content/pages.png" alt="Page Options">

# Page Content

## Changing the page header
In order to change the look of the page header, or disable it, you need to <mark>edit</mark> that page and scroll down to the option metaboxes. Setup the following options
<img src="assets/images/content/pages-metaboxes.png" alt="Page Options">

- **Show Header:** Show or hide the header at the top of the page.
- **Header Text:** Text that will be used for the header.
- **Text Color:** Set the text color of the heading.
- **Header Type:** Choose the type of header you want to use.
- **Header Font Size:** Choose size of the font to use in your header.
- **Header Font Weight:** Choose weight of the font to use in the header.
- **Header Alignment:** Align the text shown in the header left, right or center.
- **Fade out when leaving page:** Fades the heading out when the heading leaves the page.
- **Extra Classes:** Space separated extra classes to add to the heading.
- **Margin Top:** Amount of space to add above this element.
- **Margin Bottom:** Amount of space to add below this element.
- **Text Shadow:** Adds a text shadow to all the text in this row.
- **Inner Shadow:** Adds an inner shadow to the inside of this row.
- **Section Width:** Choose between padded-non padded section.
- **Optional class:** Add an optional class to the section (separated with spaces).
- **Optional id:** Add an optional id to the section.
- **Optional label:** Add an optional label for this section, used in bullet nav tooltips.
- **Overlay Colour:** Set the colour of the video & image overlay.
- **Overlay Opacity:** Set the opacity of the video & image overlay.
- **Overlay Grid:** Adds an overlay pattern image.
- **Background Video mp4:** Enter url of an mp4 video to use for this rows background.
- **Background Video webm:** Enter url of a webm video to use for this rows background.
- **Background Image:** Choose an image to use for this rows background.
- **Image Background Size:** Set how the image will fit into the section.
- **Image Background Repeat:** Set how the image will be repeated.
- **Background Position vertical:** Set the vertical position of background video and image. 0 value represents the top horizontal edge of the section. Positive values will push the background down.
- **Background Image Attachment:** Set the way the background scrolls with the page. Scroll = normal Fixed = Parallax effect.
- **Background Image Parallax Effect:** Toggles the background image parallax effect.
- **Parallax Effect Start Position:** Sets the position of the image in pixels that the parallax effect will start from.
- **Parallax Effect End Position:** Sets the percentage of the image in pixels that the parallax effect will end up at.
- **Section Height:** Section will vertically cover the entire viewport if Full Height is selected.
- **Section Content Vertical Alignment:** Align the content of the section vertically.

## Removing the page menu
In order to remove the Page Menu, simply select <mark>Hide Top Nav</mark> from the <mark>Show Menu</mark> option of the <mark>Site Overrides</mark> metabox, located at the bottom of the page.
<img src="assets/images/content/page-overrides.png" alt="Page Overrides">
- **Show Menu:** Show or hide the sites top navigation menu (ideal for landing pages).

## Creating a transparent header page
Similarly, if you want the Page Header to become transparent, select the <mark>On(Transparent)</mark> from the <mark>Top Navigation Transparency</mark> option of the <mark>Site Overrides</mark> metabox, located at the bottom of the page.

- **Top Navigation Transparency:** Make the sites top navigation transparent.

<img src="assets/images/content/transparent-menu.png" alt="Page Templates">

# Page Templates
When editing a page, below the <mark>Update</mark> button you can see the <mark>Page Attributes</mark> box. From there you can pick the template that you want your page to be styled with.  If you want to use a full-width template, the <mark>Default Template</mark> is suitable.
<div class="row">
    <div class="col-md-4">
        <img src="assets/images/content/page-template.png" alt="Page Templates">
    </div>
    <div class="col-md-8">
        <h2 style="padding-top:0px;"> Default template </h2>
        Choose this layout if you want to use a full-width template.
        <h2 style="padding-top:0px;"> Left Sidebar </h2>
        Adds a sidebar to the left side of the page. Choose this layout if you have defined any widgets for the sidebar.
        <h2 style="padding-top:0px;"> Right Sidebar </h2>
        Adds a sidebar to the right side of the page. Choose this layout if you have defined any widgets for the sidebar.
    </div>
</div>

<div class="alert alert-info">
    It is recommended to use the **Default Template**, if you do not plan to use sidebars.
 </div>
