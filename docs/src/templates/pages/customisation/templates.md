---
  title: Templates
  subtitle: How to override the default templates
  layout: docs.hbs
  section: customisation
---

# Overriding the Templates


Using the triLayoutProvider you can override the tempates as well as their associated controllers for the left sidebar, the right sidebar, the content, the toolbar and the footer. The default values can be seen in

    /app/triangular/layouts/layouts.provider.js

and are the following:

    contentTemplateUrl: 'app/triangular/layouts/default/default-content.tmpl.html',
    sidebarLeftTemplateUrl: 'app/triangular/components/menu/menu.tmpl.html',
    sidebarLeftController: 'MenuController',
    sidebarRightTemplateUrl: 'app/triangular/components/notifications-panel/notifications-panel.tmpl.html',
    sidebarRightController: 'NotificationsPanelController',
    toolbarTemplateUrl: 'app/triangular/components/toolbars/toolbar.tmpl.html',
    toolbarController: 'DefaultToolbarController',
    footerTemplateUrl: 'app/triangular/components/footer/footer.tmpl.html'

In order to use your own templates instead of the default ones, locate and edit the following file

    /app/config.triangular.layout.js

and override the template/controller you want using the setDefaultOption method.

# Overriding the Left Sidebar

## Overriding the left sidebar template

An example overriding the template used for the left sidebar can be seen below:

1. Grab the contents of the original sidebar template from the triangular module.

  <code>app/triangular/components/menu/menu.tmpl.html</code>

2. Copy the file somewhere into your app, for example:

    <code>app/module/my-menu.html</code>

3. Now you will want to make triangular use your version of the template instead the original.
  To do this edit <code>config.triangular.layout.js</code> and change the sidebarLeftTemplateUrl option to point to your new template.

  <pre><code>triLayoutProvider.setDefaultOption('sidebarLeftTemplateUrl', 'app/module/my-menu.html');</code></pre>

4. You can now modify the markup in your version of the menu <code>app/module/my-menu.html</code>

## Overriding the left sidebar controller

If you also want to modify the sidebar's functionality you can override it's controller.

1. Grab the contents of the original controller from

  <code>app/triangular/components/menu/menu.controller.js</code>

2. Copy the file somewhere in your app for example.

  <code>app/module/my-menu-controller.controller.js</code>

3. Rename the controller in your new copy of the js file.

  <pre><code>.controller('MyMenuController', MenuController);</code></pre>

4. Now you want triangular to use your custom controller instead of the default one.
  Edit <code>config.triangular.layout.js</code> and change sidebarLeftController to use your new controller name.

  <pre><code>triLayoutProvider.setDefaultOption('sidebarLeftController', 'MyMenuController');</code></pre>

5. Modify the controller js code to your liking.

# Overriding the Right Sidebar

## Overriding the right sidebar template

An example overriding the template used for the right sidebar can be seen below:

1. Grab the contents of the original sidebar template from the triangular module.

  <code>app/triangular/components/notifications-panel/notifications-panel.tmpl.html</code>

2. Copy the file somewhere into your app, for example:

    <code>app/module/my-notifications-panel.html</code>

3. Now you will want to make triangular use your version of the template instead the original.
  To do this edit <code>config.triangular.layout.js</code> and change the sidebarRightTemplateUrl option to point to your new template.

  <pre><code>triLayoutProvider.setDefaultOption('sidebarRightTemplateUrl', 'app/module/my-notifications-panel.html');</code></pre>

4. You can now modify the markup in your version of the template <code>app/module/my-notifications-panel.html</code>

## Overriding the right sidebar controller

If you also want to modify the sidebar's functionality you can override it's controller.

1. Grab the contents of the original controller from

  <code>app/triangular/components/notifications-panel/notifications-panel.controller.js</code>

2. Copy the file somewhere in your app for example.

  <code>app/module/my-notifications-panel.controller.js</code>

3. Rename the controller in your new copy of the js file.

  <pre><code>.controller('MyNotificationsPanelController', MyNotificationsPanelController);</code></pre>

4. Now you want triangular to use your custom controller instead of the default one.
  Edit <code>config.triangular.layout.js</code> and change sidebarRightController to use your new controller name.

  <pre><code>triLayoutProvider.setDefaultOption('sidebarRightController', 'MyNotificationsPanelController');</code></pre>

5. Modify the controller js code to your liking.

# Overriding the Toolbar

## Overriding the toolbar template

An example overriding the template used for the toolbar can be seen below:

1. Grab the contents of the original sidebar template from the triangular module.

  <code>app/triangular/components/toolbars/toolbar.tmpl.html</code>

2. Copy the file somewhere into your app, for example:

    <code>app/module/my-toolbar.html</code>

3. Now you will want to make triangular use your version of the template instead the original.
  To do this edit <code>config.triangular.layout.js</code> and change the toolbarTemplateUrl option to point to your new template.

  <pre><code>triLayoutProvider.setDefaultOption('toolbarTemplateUrl', 'app/module/my-toolbar.html');</code></pre>

4. You can now modify the markup in your version of the template <code>app/module/my-toolbar.html</code>

## Overriding the toolbar controller

If you also want to modify the toolbar's functionality you can override it's controller.

1. Grab the contents of the original controller from

  <code>app/triangular/components/toolbars/toolbar.controller.js</code>

2. Copy the file somewhere in your app for example.

  <code>app/module/my-toolbar-controller.controller.js</code>

3. Rename the controller in your new copy of the js file.

  <pre><code>.controller('MyDefaultToolbarController', MyDefaultToolbarController);</code></pre>

4. Now you want triangular to use your custom controller instead of the default one.
  Edit <code>config.triangular.layout.js</code> and change toolbarController to use your new controller name.

  <pre><code>triLayoutProvider.setDefaultOption('toolbarController', 'MyDefaultToolbarController');</code></pre>

5. Modify the controller js code to your liking.


# Overriding the Footer

## Overriding the footer template

An example overriding the template used for the footer can be seen below:

1. Grab the contents of the original footer template from the triangular module.

  <code>app/triangular/components/footer/footer.tmpl.html</code>

2. Copy the file somewhere into your app, for example:

    <code>app/module/my-footer.html</code>

3. Now you will want to make triangular use your version of the template instead the original.
  To do this edit <code>config.triangular.layout.js</code> and change the footerTemplateUrl option to point to your new template.

  <pre><code>triLayoutProvider.setDefaultOption('footerTemplateUrl', 'app/module/my-footer.html');</code></pre>

4. You can now modify the markup in your version of the menu <code>app/module/my-footer.html</code>

## Overriding the footer controller

If you also want to modify the sidebar's functionality you can override it's controller.

1. Grab the contents of the original controller from

  <code>app/triangular/components/footer/footer.controller.js</code>

2. Copy the file somewhere in your app for example.

  <code>app/module/my-footer.controller.js</code>

3. Rename the controller in your new copy of the js file.

  <pre><code>.controller('MyFooterController', MyFooterController);</code></pre>

4. Now you want triangular to use your custom controller instead of the default one.
  Edit <code>app/module/my-footer.html</code> and change ng-controller to use your new controller name.

  <pre><code>ng-controller="MyFooterController as vm"</code></pre>

5. Modify the controller js code to your liking.

