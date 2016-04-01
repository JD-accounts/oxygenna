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
    toolbarController: 'NotificationsPanelController',
    footerTemplateUrl: 'app/triangular/components/footer/footer.tmpl.html'

In order to use your own templates instead of the default ones, locate and edit the following file

    /app/config.triangular.layout.js

and override the template/controller you want using the setDefaultOption method.

# Overriding the Sidebar

An example overriding the template used for the left sidebar can be seen below:

1. Grab the contents of the original sidebar template, which as mentioned in the section above is located under

  <code>app/triangular/components/menu/menu.tmpl.html</code>

  and paste it's contents in your own new template - let's call it <code>custom-sidebar.html</code>. Your <code>custom-sidebar.html</code> can be located anywhere inside your app.
2. Once you have created your custom template, change it's contents to your liking.
3. Having added your own contents in your custom sidebar template, you will want to make triangular use this one instead the original. This can be achieved by editing <code>config.triangular.layout.js</code> as mentioned above, and adding the following:

  <code>triLayoutProvider.setDefaultOption('sidebarLeftTemplateUrl', 'path/to/your/custom-sidebar.html');</code>

  where path/to/your/ is the path within your app that you placed your template in.

4. If you also want to modify the sidebar's functionality, you will have to repeat a similar process to the one above, but for the sidebar's controller this time. Grab the contents of the original sidebar controller, which as mentioned in the top section of the page is the <code>MenuController</code> and is located under

  <code>app/triangular/components/menu/menu.controller.js</code>

  and paste it's contents in your own new controller - let's call it <code>custom-menu.controller.js</code>. Your <code>custom-menu.controller.js</code> can be located anywhere inside your app. Let's assume that you named the controller function itself <code>CustomMenuController</code>.
5. Modify the controller code in <code>custom-menu.controller.js</code> to your liking.
6. You now want triangular to use your custom controller instead of the default one. Similarly to step 3, edit <code>config.triangular.layout.js</code> again and add the following:

  <code>triLayoutProvider.setDefaultOption('sidebarLeftController', 'CustomMenuController');</code>

You have now successfully overridden the default sidebar and it's controller!
