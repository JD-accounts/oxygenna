---
  title: Using Lambda
  subtitle: How to create and modify the theme's content
  layout: docs.hbs
---
# Posts

## Creating posts
The Posts menu option on the left is where you add blog posts. To add a new blog post, select the **Posts > Add New** option from the left hand WordPress menu.


## Post types
When editing a blog post, below the **Update** button you can see the **Format** box. Pick one that suits the type of post you would like to present

![post](assets/images/post-types.png)

1. **Standard:** Used for text only (you may add featured image as well).
2. **Image:**   Used for posts with a featured image.
3. **Gallery:**  Used for posts with a gallery included. If you wish to add a gallery to your post, follow these steps
    - press the **Add Media** button above the editor
    - click on the **Create Gallery** option on the left-side menu
    - pick the images that you wish to add to the gallery by clicking on them
    - click on the **Create a new gallery** button
    - a tag with the ids of the images that you selected should now be inserted in the text
4. **Video:**    Used for posts with a video. If you wish to add a video to your post, add the embed tag with the video URL as content. For example,
**[embed]**http://www.myurlvideo.com**[/embed]**.
5. **Link:**    Used for posts that link to an external URL. Add the link tag with the link URL as content. For example,
**[link]**http://www.mylink.com**[/link]**.
6. **Audio:**   Used for posts with audio. If you wish to add audio to your post, add the audio tag with the source URL of the audio as content. For example,
**[audio src="http://www.myurlaudio.com"]**
7. **Quote:**   Used for posting a quote. The name of the post will be the quote author. There is no single-post page for this post type.

### Post Masonry

- **Masonry Image:** An image that will be used for this post in the masonry list view.
- **Masonry Image Width:** Select the width that the masonry portfolio shortcode will use for this item (normal 1 column wide 2 columns).

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to use custom posts : [post and post types video](http://youtu.be/oNlB8F1L7X4)
</div>

---

## Blog settings
Lambda has loads of options about the set up of your blog pages. These options can be found in **Lambda>Blog**.

To customize the blog pages headers the options are

###Blog Header Options
- **Show Header:** Show or hide the header at the top of the page.
- **Show Breadcrumbs:** Show or hide the breadcrumbs in the header.

###Blog Header Heading
- **Header Text:** Text that will be used for the header.
- **Header Type:** Choose the type of header you want to use.
- **Header Font Size:** Choose size of the font to use in your header.
- **Header Font Weight:** Choose weight of the font to use in the header.
- **Header Alignment:** Align the text shown in the header left, right or center.
- **Extra Classes:** Space separated extra classes to add to the heading.
- **Margin Top:** Amount of space to add above this element.
- **Margin Bottom:** Amount of space to add below this element.

###Blog Header Section
- **Text Shadow:** Adds a text shadow to all the text in this row.
- **Inner Shadow:** Adds an inner shadow to the inside of this row.
- **Section Width:** Choose between padded-non padded section.
- **Optional class:** Add an optional class to the section (separated with spaces).
- **Optional id:** Add an optional id to the section.
- **Overlay Colour:** Set the colour of the video & image overlay.
- **Overlay Opacity:** Set the opacity of the video & image overlay.
- **Overlay Grid:** Adds an overlay pattern image.
- **Background Video mp4:** Enter url of an mp4 video to use for this rows background.
- **Background Video webm:** Enter url of a webm video to use for this rows background.
- **Background Image:** Choose an image to use for this rows background.
- **Image Background Size:** Set how the image will fit into the section.
- **Image Background Repeat:** Set how the image will be repeated.
- **Background Position vertical:** Set the vertical position of background video and image. 0 value represents the top horizontal edge of the section. Positive values will push the background down.
- **Image Background Parallax:** Set the way the background scrolls with the page. Scroll = normal Fixed = Parallax effect.
- **Section Height:** Section will vertically cover the entire viewport if Full Height is selected.

### General Blog Options
To setup the blog options that are used on all the main blog list pages.

- **Blog Style:** Select a layout style to use for your blog pages.
- **Show Post Icons:** Where to allow comments. All (show all), Pages (only on pages), Posts (only on posts), Off (all comments are off).
- **Show Comments On:** Where to allow comments. All (show all), Pages (only on pages), Posts (only on posts), Off (all comments are off)
- **Show Read More:** Show or hide the "read more" link in list view
- **Blog read more link:** The text that will be used for your read more links
- **Read more style:** Display the readmore as button or simple link.
- **Strip teaser:** Strip the content before the <--more--> tag in single post view
- **Pagination Style:** How your pagination will be shown.


### Masonry Blog Page
To set up how your masonry blog page will look.

- **Use Masonry On Posts Page:** Blog list pages will use a masonry style.
- **Masonry Items Padding:** Space to add between blog items in pixels.
- **Masonry Section Background Image:** Upload an image as your masonry blog section background.

### Blog Single Page

To set up how your single post will look.

- **Display categories:** Toggle categories on/off in post.
- **Display tags:** Toggle tags on/off in post.
- **Author bio:** Display/hide the authors bio after the post.
- **Display avatar in Author bio:** Toggle avatars on/off in Author Bio Section.
- **Display comment count:** Show the number of comments.
- **Social Networks:** Select which social networks you would like to share posts on.
- **Show related posts:** Show Related Posts in a slider after the post content.
- **Number of related posts:** The total number of related posts.
- **Open Featured Image in Magnific Popup :** Featured image in single post view will open in a large preview popup.

# Pages

---

## Creating new page
The Pages menu option on the left is where you add pages. To add a new page, select the **Pages > Add New** option from the left hand WordPress menu.

After typing your page's title you can select the page template and start adding your content (see following paragraphs).

Lambda comes bundled with **[Visual composer](http://demo.wpbakery.com/?theme=visual-composer)**. Visual Composer is the most famous drag and drop page builder. You can take full control over your WordPress site, build any layout you can imagine without any programming knowledge required.

![pages](assets/images/pages.png)

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to setup a page with sidebar: [Setting up a page with sidebar](http://youtu.be/e2PcuWzV31s)
</div>

---

## Adding Sections
One of the great features of Lambda theme is the use of multiple **page sections**. Think of a section as a partial in your page that you can add any type of content:

![pages](assets/images/sections.png)

Each section can host its own content.

Before adding content to a new page, make sure you have created a new row.
Turn the **Visual composer** on by clicking on the  **Backend editor** button:
![composer](assets/images/composer.png)

Then you can start adding content inside a row(section). Press the **Add row** button.

You have created an empty section. Before adding new elements to that section, try to edit it by clicking on the small pencil icon that is located on the upper right corner of the newly created row.
![composer](assets/images/section.png)

 A list of options should now appear

![composer](assets/images/section-options.png)

- **Text Shadow:** Adds a text shadow to all the text in this row.
- **Inner Shadow:** Adds an inner shadow to the inside of this row.
- **Section Width:**    Choose between padded or full width section. If you want to have the content of the section extending to the edge of the screen use the full width section.
- **Optional class:** Add an optional class to the section (separated with spaces).
- **Optional id:** Add an optional id to the section.
- **Optional label:** Add an optional label for this section, used in bullet nav tooltips.
- **Overlay Color:**    Set the color of a layer that overlays the video & image background.
- **Overlay Opacity:**  Set the opacity of the overlay layer.
- **Overlay Grid:**  Adds an overlay grid image in the overlay layer.
- **Background Video mp4:** Enter url of an mp4 video to use for this row's background.
- **Background Video webm:** Enter url of a webm video to use for this row's background.
- **Background Image:**  Click on the plus sign in the middle of the frame. Add an image from the **Media Library** or upload a new one. This image will appear as the background view of your section. Once added, you can see the preview icon in the options of the section. If you want to remove it, click on the **x** icon on the top right side of the image. You can only add one image background per section.
- **Image Background Size:**    Set how the image will fit into the section.
- **Image Background Repeat:**  Set how the image will be repeated.
- **Background Position vertical:** Set the vertical position of background video and image. 0 value represents the top horizontal edge of the section. Positive values will push the background down.
- **Background Image Attachment:** Set the way the background image is attached to the page. Scroll = normal Fixed = The background is fixed with regard to the viewport.
- **Background Image Parallax Effect:** Toggles the background image parallax effect.
- **Parallax Effect Start Position:** Sets the position of the image in pixels that the parallax effect will start from.
- **Parallax Effect End Position:** Sets the percentage of the image in pixels that the parallax effect will end up at.
- **Background Color Animation Bundle:** Choose a color bundle used to animate the section backgrounds.
- **Background Color Animation Speed:** Set the speed that the colors will change, in milliseconds.
- **Background Color Animation Duration:** Set the length of time each color will stay active between changes, in milliseconds.
- **Section Height:** Section will vertically cover the entire viewport if Full Height is selected.
- **Section Transparency:** Section will be tranparent if On is selected.
- **Setion Content Vertical Alignment:** Align the content of the section vertically.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to setup page sections: [Setting up page sections](http://youtu.be/Z0rk8mxVKxw)
</div>

---

## Parallax Effect
In order to enable the **Parallax effect** on the background image of a section, you have to set the **Background Image Parallax Effect** option to **On**. Then, you should set the position of the image in pixels that the parallax effect will start from and where it will end up at, by setting the **Parallax Effect Start Position** and **Parallax Effect End Position** respectively. This effect will add an extra sense of interactivity between the user and your fabulous content!

---

## Content Vertical Alignment
A new option of Lambda that makes content building easier is the **Section Content Vertical Alignment** option. You can edit that option from the row options. Make you content stay at the top of the section by selecting **Top**,
align at the center by selecting **Middle** or at the bottom by selecting **Bottom**. That way you no longer have to worry about realigning your content every time you add or remove an element, this will automatically be taken care of by this option.

<div class="alert alert-info">
    Keep in mind that the alignment will be applied to <strong>all</strong> the elements of that section.
</div>

![section](assets/images/section-align.png)

---

## Columns Layout
When building a section, before adding any content you should decide on how many columns you want to use.
![page](assets/images/columns.png)
Then, click on the small pencil icon as pointed out in the image above to edit the Columns. You should now see the options below
![page](assets/images/column-options.png)

- **Column Alignment:**   Sets the alignment items in the column.
- **Small screens Column Alignment:** Overrides the alignment in the column on small screens.
- **Extra Classes:** Add any extra classes you need to add to this column. ( space separated )
- **Scroll Animation:**    Animation that will occur when the user scrolls onto the element.
- **Animation Delay:** Delay after scrolling onto the element before animation starts.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to use the section Columns : [How to setup the columns](http://youtu.be/Xtc4GnXaEFA)
</div>

---

## Page templates
When editing a page, below the **Update** button you can see the **Page Attributes** box. From there you can pick the template that you want your page to be styled with. Choose **Right Sidebar** or **Left Sidebar**, if you have defined any widgets for the sidebar. If you want to use a full-width template, the **Default Template** is suitable.
Alternatively, a **Fullwidth Padded** template is provided for some padding on the left and right side of the page.

<div class="alert alert-info">
    It is recommended to use the **Default Template**, if you do not plan to use sidebars.
 </div>

![page-template](assets/images/page-template.png)

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to use the page templates : [page templates video](http://youtu.be/QwT7MMbj08g)
</div>



---

## Bullet Navigation
A new feature of Lambda that offers easier and smoother navigation from one section to another on every page is **Bullet navigation**. When enabled, every section of a page that has an **id** is assigned a bullet. The bullet list shows on the right side of the page. When a bullet is clicked, the user navigates with a smooth scrolling effect to the section that this bullet is assigned to. In addition, if the user has set an **Optional label** when editing the section, this label will show as a tooltip when the user hovers on the bullet.
![page](assets/images/bullets.png)

To enable bullet navigation, do the following:

1. Edit the page.
2. At the bottom of the page locate the options **Extra Page Options**.
3. Choose **show** for the **Bullet Navigation** and for the **Bullet Show Tooltips** if you want the tooltips to be shown.
![page](assets/images/bullet-options.png)
4. When editing a section, add an id in the **Optional id** and a label in the **Optional label** field. That's all!
![page](assets/images/bullets-row.png)

---

## Page Overrides
For more flexibility Lambda gives you a set of options to override some general settings:

![page](assets/images/page-overides.png)

- **Show Top Navigation:** Show or hide the site's top navigation (ideal for landing pages or specific pages like maintenance mode page).
- **Top Navigation Transparency:** Make the sites top navigation transparent.

## Header Options
- **Show Header:** Show or hide the header at the top of the page. If **Show** is selected, the options below will define the header of the portfolio item's single page.
- **Header Text:** Text that will be used for the header.
- **Header Type:** Choose the type of header you want to use.
- **Header Font Size:** Choose size of the font to use in your header.
- **Header Font Weight:** Choose weight of the font to use in the header.
- **Header Alignment:** Align the text shown in the header left, right or center.
- **Fade out when leaving page:** Fades the heading out when the heading leaves the page.
- **Extra Classes:** Space separated extra classes to add to the heading.
- **Margin Top:** Amount of space to add above this element.
- **Margin Bottom:** Amount of space to add below this element.

## Header Section Options
- **Text Shadow:** Adds a text shadow to all the text in this row.
- **Inner Shadow:** Adds an inner shadow to the inside of this row.
- **Section Width:** Choose between padded-non padded section.
- **Optional class:** Add an optional class to the section (separated with spaces).
- **Optional id:** Add an optional id to the section.
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
- **Background Color Animation Bundle:** Choose a color bundle used to animate the section backgrounds.
- **Background Color Animation Speed:** Set the speed that the colors will change, in milliseconds.
- **Background Color Animation Speed:** Set the speed that the colors will change, in milliseconds.
- **Background Color Animation Duration:** Set the length of time each color will stay active between changes, in milliseconds.
- **Section Height:** Section will vertically cover the entire viewport if Full Height is selected.
- **Section Transparency:** Section will be tranparent if On is selected.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to set up the page header : [Setting up the page headers](http://youtu.be/owWzu8zTgIY)
</div>
<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add an image background to the page header  : [Adding an image background to the page header](http://youtu.be/EzTy7s2eo7A)
</div>
<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a video background to the page header : [Adding a video background to the page header](http://youtu.be/u-QU4izmcP0)
</div>

---

# Portfolios

---

## Adding portfolio items
The Portfolio Items menu option on the left is where you add portfolio items. To add a new portfolio item, select the **Portfolio Items > Add New** option from the left hand WordPress menu. The format of each portfolio item that you wish to create, follows the same rules as the post types. Take a look at the next section for more info.
When you create a new portfolio item, you need to setup a few more options.
![logo](assets/images/portfolio-item.png)

- **Main Content:** The content that you add in the editor of the portfolio item will be the single portfolio page that the item will link to, if the **Default Link** option is selected in the **Link** section below, along with the **Hover Overlay Link Type** option set to **Link** in the shortcode.
- **Excerpt:**  The summary of your portfolio item's content that will be shown when you add it as content to your pages.

## Portfolio Post Type
Lambda supports the following three portfolio item types:

1. **Standard Post:** Used for text only (you should add featured image as well. All portfolio items should have a featured image).
2. **Video Post:**    Used for posts with a video. When selected,
the **Popup Video Link** option will show up. Enter a youtube, vimeo or custom link to a video here. This will appear in the item's "view larger" popup.
3. **Gallery Post:**  Used for portfolio items with a gallery included. When selected, the **Popup Gallery** option will show up. If you wish to add a gallery to your post, follow these steps
    - press the **Add Media** button above the editor
    - click on the **Create Gallery** option on the left-side menu
    - pick the images that you wish to add to the gallery by clicking on them
    - click on the **Create a new gallery** button

## Header Options
You can find out how to setup the **Header Options** in the **Pages** section [here](#header-options).

## Link
- **Link Type:** Your portfolio item can link to a
1. **Default Link:**    the single portfolio page.
2. **Page:** a page that you have created.
3. **Post:** a post that you have posted.
4. **Portfolio:**   another portfolio item that you have created.
5. **Category:** a category of posts.
6. **URL:** an external URL.
7. **No Link:** the portfolio item is not linkable.
- **Open Link In:** Where the link will open.

---

## Portfolio Masonry Options
- **Masonry Image Width:** Select the width that the masonry portfolio shortcode will use for this item (normal 1 column wide 2 columns).

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> The following video will show you how to create different portfolio type items<br>
      - [How to create portfolio items](http://youtu.be/NTYbbOaCEjA)<br>
</div>

## Portfolio Shortcode
One of the most advanced features of **Lambda** is the portfolio post type. You have numerous choices on how to make your work look spectacular. Take advantage of Lambda's huge variety of layouts for your portfolio items. Here is a step-by-step guide on how to create a portfolio section in a page( following the shortcode options from top to bottom):

1. Pick a category of the portfolio items you want to show( or more than one is possible if you hold down the **Ctrl** key and click on the categories that you want ).
2. Choose what filter you would like to use( or no filter ).
3. Pick how many items you would like to show.
4. As you might know, portfolio items appear in a page organized as columns. Your next move is to set into how many columns you would like your portfolio section to be divided. This, along with the previous option will affect your layout the most.
What is really cool about **Lambda** at this point is that you can set a different amount of columns for different devices/screens. For e.g
you can set a 6-column layout for really big screens, whereas show a 2-column layout on small devices like tablets or mobile phones at the same time. Make your website responsive as you want it!
5. Choose the padding that your items will have.
6. Set the pagination to be **on** or **off**, with numbers or next/previous buttons. Only the number of items that you set on **Step 3** will be shown on each pagination.
7. Pick the size of each portfolio item.
8. Decide on the type of overlay when hovering on the items.
- If you want only an icon, pick the **Show Icon** option and set it some options later in **Item Overlay Icon**.
- Pick **Show Title & Caption** if you want the title and the captions of the portfolio item. Remember, the captions are the **Excerpt** metabox that you fill in with text when you edit each portfolio item(go [here](#portfolios) to read more about **how to create a portfolio item**).
- Pick **Show Title & Buttons** if you would like only the title and the buttons **View Larger**, **More Details** to become visible on hover.
- Pick **Buttons Only** if you would like only the buttons mentioned above to be visible on hover.
- Pick **No Hover Overlay** if you would not like to have an overlay effect on hover.
9. Pick the type of the hover ovelay link. The first choice is **Magnific**, which will open a magnific popup of your portfolio item view, an image(for Standard Post), a gallery(for Gallery Post) or a video(for Video Post). The second choice is **Link**, which will link the item to whatever is set to be the target when editing each portfolio item(go [here](#portfolios) to read more about **how to create a portfolio item**). The third choice is **No Link**, when you do not want the items to be linkable.
10. Decide if you want your captions to be visible only when hovering on the image of each portfolio item, or always **under** the image.
11. According to the previous option, if your captions and title are visible below the image, you can now set a different link for them, the same way as in **step 9**.
12. Set the caption's horizontal and vertical alignment.
13. Pick what type of hover animation your overlay will have, as long as you have something other than **No Hover Overlay** selected in the **Hover Overlay Type** option above( step 8 ).
14. Choose what type of effect filter you would like to apply( or none ) and when to apply that filter( when you hover **in** or **out** of the image ).
15. Set an Item Overlay Grid ( the highest-the more visible )
16. Set your animation options.
17. Set the top/bottom margins for the section.

## Masonry Portfolio Shortcode
The Masonry Portfolio Shortcode follows almost the same procedure as described for the simple portfolio shortcode. The main difference is that we dont set a number of columns for different screen resolutions. When editing a Portfolio Item, at the bottom of the page we have an option called **Masonry Image Width**. If you choose **Normal**, the item will use one column, whereas if you choose **Wide**, it will use two columns.

![portfolio](assets/images/masonry-portfolio.png)

## Adding portfolios to a page
If you wish to add a portfolio section to your page, once you have created an empty row, follow these steps

- press the **Add element** button of the Visual Composer and choose the **Portfolio** element. Now you can edit the portfolio

![portfolio](assets/images/portfolio.png)

- **Category:** The categories of the portfolios that you wish to be shown(to pick more than one, hold down the **ctrl** button while clicking on the categories).
- **Portfolio Filters:** Select which filters to show above the portfolio.
- **Portfolio items count:** Number of portfolio items to display ( 0 for all ).
- **Mobile Columns:** Number of columns to use on mobile sized displays (<768px).
- **Tablet Columns:** Number of columns to use on tablet sized displays (>768px <992px).
- **Desktop Columns:** Number of columns to use on regular desktop displays (>992px <1200px).
- **Large Desktop Columns:** Number of columns to use on large desktop displays (>1200x).
- **Portfolio Items Padding:** Space to add between portfolio items in pixels.
- **Pagination:** Select type of pagination to use for this portfolio list.
- **Item image size:** Choose the size of images that will be loaded in the portfolio (Portfolio Size can be changed on Theme Portfolio Options Page).
- **Hover Overlay Type:** Choose the type of hover overlay you would like to appear.
- **Hover Overlay Link Type:** Select the link type to use for the item.
- **Open Link In:** Where the link will open.
- **Item Show Captions Below:** Select a portfolio style to use for the portfolio items.
- **Link Caption Title Below:** Makes the Captions Below Title a link.
- **Item Caption Horizontal Alignment:** The text alignment of the caption text / title.
- **Item Overlay Caption Vertical Alignment:** Vertical alignment of the caption title and text.
- **Item Overlay Hover Animation:** What animation will be used to reveal the image hover overlay.
- **Image Hover Effects Filter:** Effects filter to apply to the image on hover.
- **Hover Effects Filter Behaviour:** When to apply the Hover Effects Filter.
- **Item Overlay Grid:** Grid pattern to apply over the image on hover.
- **Item Overlay Icon:** Icon to show on the hover overlay.
- **Scroll Animation:** Animation that will occur when the user scrolls onto the element.
- **Animation Delay:** Delay after scrolling onto the element before animation starts.
- **Animation Timing:** Will load all portfolio items at once or each one individually.
- **Margin Top:** Amount of space to add above this element.
- **Margin Bottom:** Amount of space to add below this element.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a portfolio to a page : [How to add portfolios to a page](http://youtu.be/GdFTgBmvc6Q)
</div>


### Masonry portfolio
If you wish to add a **masonry** portfolio section to your page, once you have created an empty row, follow these steps

- press the **Add element** button of the Visual Composer and choose the **Masonry Portfolio** element. Now you can edit the portfolio

![portfolio](assets/images/masonry-portfolio.png)

- **Category:** The categories of the portfolios that you wish to be shown(to pick more than one, hold down the **ctrl** button while clicking on the categories).
- **Portfolio Filters:** Select which filters to show above the portfolio.
- **Portfolio items count:** Number of portfolio items to display ( 0 for all ).
- **Portfolio Items Padding:** Space to add between portfolio items in pixels.
- **Pagination:** Select type of pagination to use for this portfolio list.
- **Item image size:** Choose the size of images that will be loaded in the portfolio (Portfolio Size can be changed on Theme Portfolio Options Page).
- **Hover Overlay Type:** Choose the type of hover overlay you would like to appear.
- **Hover Overlay Link Type:** Select the link type to use for the item.
- **Open Link In:** Where the link will open.
- **Image Hover Effects Filter:** Effects filter to apply to the image on hover.
- **Hover Effects Filter Behaviour:** When to apply the Hover Effects Filter.
- **Item Caption Overlay Horizontal Alignment:** The text alignment of the caption text / title.
- **Item Overlay Caption Vertical Alignment:** Vertical alignment of the caption title and text.
- **Item Overlay Hover Animation:** What animation will be used to reveal the image hover overlay.
- **Item Overlay Grid:** Grid pattern to apply over the image on hover.
- **Item Overlay Icon:** Icon to show on the hover overlay.
- **Scroll Animation:** Animation that will occur when the user scrolls onto the element.
- **Animation Delay:** Delay after scrolling onto the element before animation starts.
- **Animation Timing:** Will load all portfolio items at once or each one individually.
- **Margin Top:** Amount of space to add above this element.
- **Margin Bottom:** Amount of space to add below this element.

---

## Portfolio Options
The general settings for the portfolios can be found in **Lambda>Portfolio**

![logo](assets/images/portfolio-options.png)

- **Zoom Button Text:** This text will be shown in the portfolio item zoom button.
- **Link Button Text:** This text will be shown below the portfolio item link button.
- **Portfolio Page:** Make all your portfolio single pages link back to a main portfolio list page.

## Portfolio Image Sizes
- **Image Width:** Width of each portfolio item image (default 800px).
- **Image Height:** Height of each portfolio item image (default 600px).
- **Image Cropping:** Option to crop images to the exact proportions.

# Services

---

## Adding Services
The Services menu option on the left is where you add services. To add a new service, select the **Services > Add New** option from the left hand WordPress menu. When you create a new service, you need to setup a few more options.
![logo](assets/images/single-service.png)

- **Title and main content** the main service title and content as it will appear in the single service page.
- **Excerpt:**  the summary of your service's content that will be shown in the services list when you add it as content to your pages.
- **Font Awesome Icon:** Select a font awesome icon that will appear in your service shape.
- **SVG Icon:** Select a svg icon that will appear in your service shape.

## Header Options
You can find out how to setup the **Header Options** in the **Pages** section [here](#header-options).

## Link
- **Link Type:** Your service item can link to a
1. **Default Link:**    the single service page.
2. **Page:** a page that you have created.
3. **Post:**    a post that you have posted.
4. **Portfolio:**   a portfolio item that you have created.
5. **Category:** a category of posts.
6. **URL:** an external URL.
7. **No Link:** the service item is not linkable.
- **Open Link In:** Where the link will open.


## Service Template
- **Service Page Template:** select a page template to use for this service.

---

- **Categories:** Services can be grouped into categories.
- **Featured image:** featured image of the service.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to create a new service : [How to create a new service](http://youtu.be/VefNT7W3n7c)
</div>

---

## Adding services to a page
If you wish to add a services section to your page, once you have created an empty row, follow these steps

- press the **Add element** button of the Visual Composer and choose the **Services** element. Now you can edit the services

![logo](assets/images/services.png)

- **Choose a category:**    the category of the services that you wish to be shown.
- **Services Count:**   the number of services to show.
- **Columns (horizontal style):**   number of columns to show the services in.
- **Image Shape:**  the shape of the service's image.
- **Shape Size:**   the size of the service's shape.
- **Icon Color:**   set the color of the icon ( svg & font awesome icons ).
- **Icon Animation:**   icon animation that will occur when you hover over the service shape.
- **Hover effect:**   change the icon/background colors on hover.
- **Background Color:**   set the color shape background.
- **Shape Background Grid:** adds a grid pattern to the shape background.
- **Show Image:**   show or hide the images.
- **Link Image:**   linkable images.
- **Show Titles:**  show or hide the services' titles.
- **Link Title:**   linkable titles.
- **Link Font Size:** choose the size of the font to use in the title.
- **Title font Weight:** choose the weight of the font to use in the title.
- **Show Excerpt:** show or hide the excerpts.
- **Excerpt & More Text Alignment:** sets the text alignment of the excerpt text and the read more link.
- **Show Readmore Link:**   show or hide the readmore link.
- **Readmore Link Text:**   customize your readmore link.
- **Margin Top:** Amount of space to add above this element.
- **Margin Bottom:** Amount of space to add below this element.
- **Scroll Animation:** Animation that will occur when the user scrolls onto the element.
- **Animation Delay:** Delay after scrolling onto the element before animation starts.
- **Extra Classes:** Add any extra classes you need to add to this element. ( space separated ).

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a list of services to a page : [How to add a service to a page](http://youtu.be/BowvaIsdh28)
</div>


## Single Service Shortcode
Follow these steps to create a single-service view.

1. Choose which service you want to display.
2. Pick the image shape and the shape size of the image.
3. Choose a color for the font awesome or SVG icon of the service.
4. Set an animation for the icon.
5. Decide whether you want to have a hover effect.
6. Set a background color for the service shape.
7. Add a grid pattern to the shape background.
8. Decide whether you want to show an image and if that image is linkable.
9. Decide whether you want to show a title and if that title is linkable.
10. Set the font size, font weight of the title.
11. If you have added an excerpt text to the single service when you created it, now you can show or hide that excerpt. If you show it, pick your alignment.
12. Show or hide a Readmore link, and set the text of that link.
13. Set the global options as described [here](#global-options).

---

# Staff members

---

## Adding Staff members
The Staff menu option on the left is where you add staff members. To add a new staff member, select the **Staff > Add New** option from the left hand WordPress menu. When you create a new staff member, you need to setup a few more options.
![logo](assets/images/staff-member.png)

- **Title and main content:** the title and main content of the Staff Member single page.
- **Excerpt:**  the summary of your staff member's content that will be shown when you add it as content to your pages.

## Header Options
You can find out how to setup the **Header Options** in the **Pages** section [here](#header-options).

- **Link Type:** same as [Portfolio Items](#link).
- **Job Title:**    sub header that is shown below the staff members name.
- **Personal Moto Title:**  the cheeky title that pops up when a staff member image is hovered over.
- **Personal Moto Text:**   the cheeky text that pops up when a staff member image is hovered over.
- **Social Icon 1:**  social Network Icon to show for this Staff Member.
- same for the rest of the social icons.
- **Departments:** staff members can be grouped in departments.
- **Feature image:**  feature image of the staff member.

## Link
- **Link Type:** Your service item can link to a
1. **Default Link:**    the single service page.
2. **Page:** a page that you have created.
3. **Post:**    a post that you have posted.
4. **Portfolio:**   a portfolio item that you have created.
5. **Category:** a category of posts.
6. **URL:** an external URL.
7. **No Link:** the service item is not linkable.
- **Open Link In:** Where the link will open.


## Personal Details
- **Job Title:** Sub header that is shown below the staff members name.

## Social
- **Social Icon 1:** Social Network Icon to show for this Staff Member.
- **Social Link 1:** Add the url to the staff members social network here.

Same for all the social icons in this section.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a staff member : [How to add a staff member](http://youtu.be/y7lNUwZnfdI)
</div>

---

## Adding staff members to a page
If you wish to add a staff section to your page, once you have created an empty row, follow these steps

- press the **Add element** button of the Visual Composer and choose the **Staff List** element. Now you can edit the staff list

![stafflist](assets/images/staff-list.png)

- **Choose a department:**  populate your list from a department.
- **Number of members:**    number of members to display.
- **List Columns:** number of columns to show staff in.
- **Show Position:**   Display the staff position below the name.
- **Shadow:**   show or hide shadows.
- **Image Shape:**  the shape of the member's image.
- **Show Social Links:**   show or hide the social links.
- **Item image size:**   Choose the size of images that will be loaded in the staff list.
- **Hover Overlay Type:**   Choose the type of hover overlay you would like to appear.
- **Hover Overlay Link Type:**   Select the link type to use for the item.
- **Item Show Captions Below:**   Select a style to use for the staff list items.
- **Link Caption Title Below:**   Makes the Captions Below Title a link.
- **Item Caption Horizontal Alignment:**   The text alignment of the caption text / title.
- **Item Overlay Caption Vertical Alignment:**   Vertical alignment of the caption title and text.
- **Item Overlay Hover Animation:**   What animation will be used to reveal the image hover overlay.
- **Image Hover Effects Filter:**   Effects filter to apply to the image on hover.
- **Hover Effects Filter Behaviour:**   When to apply the Hover Effects Filter.
- **Item Overlay Grid:**   Grid pattern to apply over the image on hover.
- **Item Overlay Icon:**   Icon to show on the hover overlay.
- **Animation Timing:**   Will animate all staff at once or each one individually.
- **Margin Top:**   Amount of space to add above this element.
- **Margin Bottom:**   Amount of space to add below this element.
- **Scroll Animation:**   Animation that will occur when the user scrolls onto the element.
- **Animation Delay:**   Delay after scrolling onto the element before animation starts.
- **Extra Classes:**   Add any extra classes you need to add to this element. ( space separated )

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a list of staff members to a page : [How to add staff members to a page](http://youtu.be/DFOw3werBjw)
</div>

---

## Adding single staff member to a page
If you wish to add a single staff section to your page, once you have created an empty row, follow these steps

- press the **Add element** button of the Visual Composer and choose the **Single Staff** element. Now you can edit the Single Staff member

![featured staff](assets/images/single-staff.png)

- **Featured member:**  select the staff member that will be featured.
- **Show Position:**   Display the staff position below the name.
- **Show Social Links:**   show or hide the social links.
- **Item image size:**   Choose the size of the image that will be loaded in the single-staff.
- **Hover Overlay Type:**   Choose the type of hover overlay you would like to appear.
- **Hover Overlay Link Type:**   Select the link type to use for the item.
- **Item Show Captions Below:**   Select a style to use for the single-staff item.
- **Link Caption Title Below:**   Makes the Captions Below Title a link.
- **Item Caption Horizontal Alignment:**   The text alignment of the caption text / title.
- **Item Overlay Caption Vertical Alignment:**   Vertical alignment of the caption title and text.
- **Item Overlay Hover Animation:**   What animation will be used to reveal the image hover overlay.
- **Image Hover Effects Filter:**   Effects filter to apply to the image on hover.
- **Hover Effects Filter Behaviour:**   When to apply the Hover Effects Filter.
- **Item Overlay Grid:**   Grid pattern to apply over the image on hover.
- **Item Overlay Icon:**   Icon to show on the hover overlay.
- **Margin Top:**   Amount of space to add above this element.
- **Margin Bottom:**   Amount of space to add below this element.
- **Scroll Animation:**   Animation that will occur when the user scrolls onto the element.
- **Animation Delay:**   Delay after scrolling onto the element before animation starts.
- **Extra Classes:**   Add any extra classes you need to add to this element. ( space separated )

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a featured staff member to a page : [How to add a Single Staff Member to a page](http://youtu.be/LVksRISmqa0)
</div>

## Staff List Shortcode
If you want to add to your content a staff members list, this is the shortcode that you want.

1. Pick the department that you want to show staff members from.
2. Select the number of the staff members you want to show.
3. Select the number of columns that you wish to show them by.
4. Decide whether you want to show the position and the social links for each of the staff members.
5. Set the size of the image.
6. Decide on the type of overlay when hovering on the items.
- If you want only an icon, pick the **Show Icon** option and set it some options later in **Item Overlay Icon**.
- Pick **Show Title & Caption** if you want the title and the captions of the staff member. Remember, the captions are the **Excerpt** metabox that you fill in with text when you edit each staff member(go [here](#adding-staff-members) to read more about **how to add a staff member**).
- Pick **No Hover Overlay** if you would not like to have an overlay effect on hover.
7. Pick the type of the hover ovelay link. The first choice is **Magnific**, which will open a magnific popup of your staff member image. The second choice is **Link**, which will link the item to whatever is set to be the target when editing each staff member(go [here](#adding-staff-members) to read more about **how to add a staff member**). The third choice is **No Link**, when you do not want the items to be linkable.
10. Decide if you want your captions to be visible only when hovering on the image of each staff member, or always **under** the image.
11. Make the captions linkable the same way as in **step 7**.
12. Align your captions vertically and horizontally.
13. Pick the type of the hover animation and the hover effects filter that you want. Also, decide on when you want the effect to take place.
14. Set the grid pattern to be applied when hovering on the image and the overlay icon, if you have chosen **Show Icon** on **step 6**.
15. Set the animation to take place simultaneously for all the staff members or with a staggering effect, if a **Scroll Animation** is set in the global options to follow.
16. Set the global options as described [here](#global-options).

## Single Staff Shortcode
If you want to add a single staff member view anywhere in your page, this is the shortcode that you want. It follows the same procedure as the **Staff List** shortcode above, the only differnce being that instead of picking a category, you pick a single staff member.

---

# Slideshows

---

## Creating a slideshow
The Slider Images menu option on the left is where you create a Slideshow. To add a new Slideshow, select the **Slider Images > Slideshows** option from the left hand WordPress menu. When you create a new Slideshow, you need to specify the **Name**, **Slug**, **Parent** and **Description** of the slideshow. Then, you can add **Slider Images** to it.


---

## Adding slideshow items
The Slider Images menu option on the left is where you add Slider Images. To add a new Slider Image, select the **Slider Images > Add New** option from the left hand WordPress menu. When you create a new Slider Image, you need to setup two more options.

![slideshow](assets/images/addslideshow.png)

- **Link Type:** same as [Portfolio Items](#link).
- **Slideshow Image:**  set the featured image to be used as a slider image.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to create a slider image : [How to create a slider image](http://youtu.be/LQ2xbkzWHqg)
</div>

---

## Adding Slideshows to a page
If you wish to add a slideshow to your page, once you have created an empty row, follow these steps

- press the **Add element** button of the Visual Composer and choose the **Slideshow** element. Now you can edit the Slideshow

![slideshow](assets/images/slideshow.png)

- **Choose a Flexslider:**  populate your slider with one of the slideshows you have created.
- **Animation style:**  select how your slider animates.
- **Direction:**    Select the direction your slider slides.
- **Speed:**    set the speed of the slideshow cycling, in milliseconds.
- **Duration:** set the speed of animations.
- **Auto start:**   start slideshow automatically.
- **Show navigation arrows:**   show or hide the navigation arrows.
- **Item width:**   set the width of the slider items( leave blank for full ).
- **Show controls:**    show or hide the controls.
- **Choose the place of the controls:** **Inside** or **Outside** the slider images.
- **Choose the alignment of the controls:** sets the alignment of the controls.
- **Controls Vertical Position:** sets the vertical position of the controls.
- **Show Captions:**  show or hide the captions.
- **Captions Horizontal Position**  sets the horizontal position of the captions.
- **Show Tooltip:** show or hide the tooltip.
- **Margin Top:** amount of space to add above this element.
- **Margin Bottom:** amount of space to add below this element.
- **Scroll Animation:** animation that will occur when the user scrolls onto the element.
- **Animation Delay:** Delay after scrolling onto the element before animation starts.
- **Extra Classes:** Add any extra classes you need to add to this element. ( space separated )

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a slideshow to a page: [How to add a slideshow to a page](http://youtu.be/Hzg6_JkszEc)
</div>

---

## Revolution Slider
Lambda uses **Revolution Slider**, it is also included in the theme.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a revolution slider to a page: [How to add a Revolution Slider to a page](http://youtu.be/BG6quGNXtYE)
</div>


---

## Layer Slider
Lambda uses **Layer Slider**, it is also included in the theme.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add a Layer Slider to a page: [How to add a Layer Slider to a page](http://youtu.be/4zC8-UeTbMs)
</div>


# Testimonials

---

## Adding testimonials
The Testimonials menu option on the left is where you add testimonials. To add a new testimonial, select the **Testimonials > Add New** option from the left hand WordPress menu. When you create a new testimonial, you need to setup one more option.

- **Citation:** reference to the source of the quote.
- **Feature image:** (optional) feature image for the testimonial.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to create a testimonial : [How to create a testimonial](http://youtu.be/0tLRQgP8FTU)
</div>

---

## Adding testimonials to a page
If you wish to add testimonials to your page, you can show them as a slideshow, or as a list. If you want to have a slideshow of the testimonials, follow these steps. Once you have created an empty row,

- press the **Add element** button of the Visual Composer and choose the **Testimonials** element. Now you can edit the Testimonials

![logo](assets/images/testimonial.png)

- **Choose a group:**   group of testimonials to show.
- **Number Of Testimonials:**   number of Testimonials to display.
- **Show avatars:** display the featured image as avatar.
- **Display as Slideshow:** display the testimonials as a slideshow.
- **Randomize:** randomize the ordering of the testimonials.
- **Text Align:** sets the text alignment of the blockquote and citation of the testimonial.
- **Margin Top:** amount of space to add above this element.
- **Margin Bottom:** amount of space to add below this element.
- **Scroll Animation:** animation that will occur when the user scrolls onto the element.
- **Animation Delay:** delay after scrolling onto the element before animation starts.
- **Extra Classes:** Add any extra classes you need to add to this element. ( space separated )

In case you want to have the testimonials show as a list, once you have created an empty row, choose the **Testimonials List** element and edit the options below to set up the list.
![logo](assets/images/testimonial-list.png)

The extra options that appear on this shortcode are

- **List Columns:** number of columns to show testimonials in.
- **Show avatars:** display the featured image as avatar.
- **Animation Timing:** will animate all testimonials at once or each one individually .

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to add testimonials to a page: [How to add testimonials to a page](http://youtu.be/QFh6SA0ToZ0)
</div>

---

# Contact page

A contact page in Lambda requires the **Contact Form 7** plugin to be activated, in order to be able to create a contact form. Make sure you have downloaded and installed the correct plugin from  [here](http://wordpress.org/plugins/contact-form-7/).

## Adding a contact form
The Contact menu option on the left is where you add contact forms. To add a new contact form, select the **Contact > Add New** option from the left hand WordPress menu. From the next screen press the blue **Add New** button if you want to use the default **English** language, or choose one from the dropdown menu and press the **Add New** button next to it.
![logo](assets/images/contact-form.png)

When you get to the next page, paste the following code into the **Form** field, after you have set a name for the contact form in the **Untitled** field.

    <div class="form-group form-icon-group">
          <i class="fa fa-user"></i> [text* your-name class:form-control placeholder "Your name *"]
    </div>
    <div class="form-group form-icon-group">
        <i class="fa fa-envelope" > </i> [email* your-email class:form-control placeholder"Your email *"]
    </div>
    <div class="form-group form-icon-group">
          <i class="fa fa-pencil"></i> [textarea your-message class:form-control placeholder "Your message"]
    </div>
    <div class="text-center">
    [submit class:btn class:btn-primary"Send email"]
     </div>

![logo](assets/images/form.png)

For the next options, in the **Mail** panel, fill the **To:** field with the email account that you want the emails to be redirected to. Every time the contact form gets filled by a user and sent, this email account will be receiving an email according to the format defined in the **Mail** panel. For the rest of the fields, you can leave the default values.
![logo](assets/images/contact-mail.png)

Now press **Save**. As you can see in the image below, you should now have a shortcode to paste in your page's content, which will add the contact form you just created.
![logo](assets/images/contact-save.png)

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to create your contact page : [contact page video](http://youtu.be/QBPhPwS0E6w)
</div>

---

# Setting the 404 page
In Lambda theme you can create a page and set it to be your **404** page. To do that go to **Lambda->General** and set the **Page Link** option to the page that you want.That's all!

---

# One page version
In Lambda theme it is easy to create a **one page template** version. All you have to do is create sections and assign a unique id to each.

After creating the sections add a menu using the section id's in the menu elements.

<div class="alert alert-success">
    <i class="fa fa-youtube-play"></i> Take a look at the video on how to create a one page template : [one page version video](http://youtu.be/mc8lwTsrMLo)
</div>

---

# Gravity Forms

Lambda now is compatible with the **Gravity Forms** plugin, which is pretty easy to install. Download the plugin from the official [website](http://www.gravityforms.com/) and install it.
After you have installed the plugin, there will be a new menu item on the wordpress menu called **Forms**. Go to **Forms->Settings** and set the **Output CSS** option to **No**.

![gravity forms](assets/images/gravity-settings.png)

In order to add a form to a page, you need to use the **Gravity Form** shortcode and you are done!

# Shortcodes

Lambda comes with a wide variety of cool shortcodes, easily inserted with the **Visual Composer** editor, without having to edit the code or any text at all!

## Global Options
All the shortcodes share these options, which mainly add padding and animation to almost anything!
![shortcodes](assets/images/global-options.png)

- **Margin Top:**   Amount of space to add above this element.
- **Margin Bottom:** Amount of space to add below this element.
- **Scroll Animation:**  Animation that will occur when the user scrolls onto the element.
- **Animation Delay:**  Delay after scrolling onto the element before animation starts.
- **Extra Classes:**  Add any extra classes you need to add to this element. ( space separated )

## Image Shortcode
Setting up the image shortcode should include the following:

1. Choose the image that you want to use.
2. Set the link type to be either **Magnific**( showing the image zoomed ), **Link**( linking to a URL on the next step ) or **No Link**.
3. Set the URL that the image will link to ( if previous option is set to **Link** ).
4. Set if you want the link to open in the same or new tab.
5. Set an alternative text, in case the visitor has images disabled.
6. Set the global options as described [here](#global-options).

## Shaped Image Shortcode
Follows almost the same rules as the **Image Shortcode**, but with an extra option to choose the shape of the image to be either **Circle** or **Square**.

## Bootstrap Shortcodes
We have implemented many cool bootstrap components as shortcodes, such as **Tabs**, **Accordion**, **Panel**, **Alert**, **Jumbotron**, **Progress Bars**, **Carousel**, **Buttons** etc.
You can get an idea of how to use the bootstrap shortcodes by visiting the **Bootstrap** website [here](http://getbootstrap.com/).

## Heading Shortcode
If you want to add a header anywhere in your content, this is the shortcode that you want.
Follow these simple steps to do so.

1. Set the header text.
2. Set the text color of the heading.
3. Pick your header type ( i.e h1 ).
4. Pick the Header font size.
5. Pick the header's font weight and alignment.
6. Set the global options as described [here](#global-options).

## Features List Shortcode
If you want to display a list of features, this is the shortcode that you want.

1. When you pick the **Features List** shortcode from Visual Composer, an empty container will be added in your content. If you click inside it to add content, you will see a **Feature** element.
2. If you choose to show an icon, pick a Font Awesome or a Feather icon.
3. Set the icon and background shape color.
4. Set the hover animation.
5. Set the Title and the content for your featured item.
6. Set the global options as described [here](#global-options).
7. Repeat the steps from **2** to **6** for every featured icon that you wish to add.

## Pricing Column Shortcode
Follow these steps to create a Pricing Column.

1. Set a heading for the column.
2. Decide whether this column will be a **featured** one. A featured column stands out from the rest.
3. Set the background and foreground colors.
4. Decide whether you want to show a price and pick its colors.
5. Set a price and pick a price currency( or set a custom one ).
6. Add some text after the price.
7. Add items in the list that will be displayed in the column. Separate the list items with linebreaks(Enter).
8. Decide if you want a button to be shown, and set a text, a link, a background color and a text color for it.
9. Set the global options as described [here](#global-options).

## Recent Posts(Masonry) Shortcode
If you want to display your recent posts anywhere in your pages, this is the shortcode that you want.

1. Set the number of posts that you wish to be displayed.
2. Choose a specific category that you want the posts to be shown from.
3. Set the padding that you want your post items to have with each other.
4. Set the animation timing, if you set a scroll animation in the global options to follow.
The animation can take place at the same time for all the items, or for each one individually at different times. Feel free to play around with this awesome effect!
5. Set the global options as described [here](#global-options).

## Google Map Shortcodes
If you want to show a **Google Map** anywhere inside your page this is the shortcode that you want.

1. Choose the type of map you want **Roadmap**, **Satellite**, **Terrain**, **Hybrid**.
2. Set the zoom of the map.
3. Pick a map style, **Black&White** or **Regular**.
4. Decide if you want the map to be scrollable and if you want a marker to be visible.
5. Set the label, address, Latitude, Longitude and Section Height of the marker. There is no need to set both address and Latitude-Longitude.
6. Set the global options as described [here](#global-options).

## Pie Chart Shortcode
Here is how to create an awesome pie chart anywhere in your page.

1. Pick a color for the track of the chart.
2. Pick a color for the bar of the chart.
3. Choose an icon for the chart that shows in the middle of the track.
4. Set an icon animation.
5. Set the percentage of the chart that you want to fill.
6. Set the size and the line width of the chart.
7. Set the global options as described [here](#global-options).

## Scroll to button Shortcode
The scroll-to button is really useful when you want to navigate fast and with a smooth effect inside your page's sections. Before you set the options for this shortcode, you need to **assign an id** to the section that you want the button to take you to. Read [here](#adding-sections) to find out more on how to setup a section. Once you have done that, follow these steps.

1. Type the id of the section that you want to go to( e.g #link ).
2. Pick an arrow that you wan to use as an icon for the button.
3. Decide if you want the button to go to the bottom of the section.
4. Set the global options as described [here](#global-options).

## Social Sharing Icons Shortcode
If you are creating a page that you want to share with friends in social media, this is the shortcode that you are looking for. It can be easily confused with the **Social Icons Shortcode**.

1. Set a title that will appear above the social share icons.
2. Select which social networks you would like to share on.
3. Pick the size of the icons.
4. Decide whether you want to have a background and set its shape and color.
5. Set the global options as described [here](#global-options).

## Social Icons Shortcode
The Social Icons shortcode is useful when you want to guide the visitors to your social media profile. **It can be easily confused with the Social Sharing Icons Shortcode, which is only used when you want to post a page on your profile**. When using this shortcode follow these steps.

1. Set a title that will appear above the social share icons.
2. Pick the size of the icons.
3. Decide whether you want to have a background and set its shape and color.
4. Decide where the social links will open to.
5. Set the URLs for each social media website you want to link to.
6. Set the global options as described [here](#global-options).

## Divider Shortcode
Use this shortcode when you want to add vertical space between your elements.

1. Decide whether you want the divider to be visible or not. If you do, pick a backround color.
2. Set the height of the space you want to add, one for each screen resolution.

## Audio Player Shortcode
If you want to add an audio player anywhere in your page, this is the shortcode that you want.

1. Add a link to the audio that you want to play.
2. Set the loop to **on** or **off**.
3. Set the autoplay to **on** or **off**.
4. Specify whether you want the audio to load when the page loads.
5. Set the global options as described [here](#global-options).

# Theme options
Lambda has even more options so that you can have the complete control over your webpages.

## Default colours
Here you can customize the colours for elements like the bootstrap button styles, portfolio hover colours, etc. The complete list of options include

### Button Colours
You can set up the text colour, background colour, hover background colour and icon button colours for each of the supported bootstrap [button styles](http://getbootstrap.com/css/#buttons)

![buttons](assets/images/buttons.png)

### Overlay Colours
Set the colours used in overlay areas.

![overlay](assets/images/overlay.png)

### Magnific (image lightbox) Colours
Set the colours used in overlay when an image preview is clicked.

![magnific](assets/images/magnific.png)

### Portfolio Hover Colours
Set the colours used in portfolios when you hover over an item.

![portfolio-colours](assets/images/portfolio-colours-1.png)
![portfolio-colours](assets/images/portfolio-colours-2.png)

### Go to top button Colours
Set the colours of the go to top button.  The go to top button will appear when you scroll down the page and allows users to navigate back to the top of the page.

![gotop](assets/images/gotop.png)

## Flexslider
Here are the options that apply to the elements that use flexslider, like the gallery post types and portfolios.

![flexslider](assets/images/flexslider.png)

You can read more about **flexslider** [here](http://flexslider.woothemes.com/)

## Woocommerce
The **Lambda->WooCommerce** option on the left hand WordPress menu is where you set all the options of WooCommerce
![woocommerce](assets/images/woocommerce.png)

---

###Shop Page
Change the look of your shop page with these options.

- **Shop Layout:**  layout of your shop page. Choose among right sidebar, left sidebar, fullwidth layout.
- **Shop Page Columns:**  number of columns to use for the products on the main shop page.

---

###Product Details
Setup your products page details

- **Social Networks:**  Select which social networks you would like to share products on.

###Product Slideshow
Setup your product page flexslider options.

- **Animation style:**  Select how your slider animates.
- **Speed:**  Set the speed of the slideshow cycling, in milliseconds.
- **Duration:**  Set the speed of animations.
- **Auto start:**  Start slideshow automatically.
- **Show navigation arrows:**  Shows the navigation arrows at the sides of the flexslider.
- **Navigation arrows type:**  Type of the direction arrows, fancy (with bg) or simple.
- **Show controls:**  If you choose hide the option below will be ignored.
- **Choose the place of the controls:**  Choose the position of the navigation controls.
- **Choose the alignment of the controls:**  Choose the alignment of the navigation controls.

###Cart Popup
Change the way your cart popup behaves with these options.

- **Cart Popup:**  If you choose show, cart popup will display when you click on the cart widget.


## Advanced options
Here you can find the advanced options for Lambda theme:

- **CSS:** Here you can save some custom CSS that will be loaded in the header. This will allow you to override some of the default styling of the theme.
- **Site Fav Icon:** Here you can set up the favicons for all different devices.
- **Mobile:** Here you can configure settings targeted at mobile devices. For now, the only option available is to turn off mobile videos, as that will consume a lot of bandwidth.
- **Google Analytics:** Set your Google Analytics Tracker and keep track of visitors to your site.
