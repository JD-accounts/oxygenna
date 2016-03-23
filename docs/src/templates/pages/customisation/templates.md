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
An example overriding the template used for the left sidebar can be seen below:

Grab the contents of the original sidebar template, which as mentioned above is located under

  app/triangular/components/menu/menu.tmpl.html

and paste it's contents in your own new template - let's call it custom-sidebar.html. Your custom-sidebar.html can be located anywhere inside your app. Once you have created your custom template, change it's contents to your liking. Having done that, you will want to make triangular use your own template instead the original one. This can be achieved by editing <code>config.triangular.layout.js</code> as mentioned above, and adding the following:

    triLayoutProvider.setDefaultOption('sidebarLeftTemplateUrl', 'path/to/your/custom-sidebar.html');

  where path/to/your/ is the path within your app that you placed your template in.
