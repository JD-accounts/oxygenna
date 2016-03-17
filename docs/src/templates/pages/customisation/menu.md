---
  title: Modules
  subtitle: How to change remove and create angular modules for triangular
  layout: docs.hbs
  section: customisation
---

# Customizing the side menu

Triangular comes with both a service and a provider for setting the items in the sidemenu.

- **triMenuProvider** - Allows you to set your menu items at the config stage of angularjs.
- **triMenu** - This service allows you to change your sidemenu at runtime in controllers.

# Adding a menu to the sidebar

To add a menu to the sidebar you just need to create a module config and inject the triMenuProvider.

For example create a file like this.

**myapp.config.js**
```
(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {

        // first create a state that your menu will point to .
        $stateProvider
        .state('triangular.admin-default.my-page', {
            url: '/my-page',
            templateUrl: 'app/my-page.tmpl.html'
        });

        // next add the menu item that points to the above state.
        triMenuProvider.addMenu({
            name: 'Parent Menu',
            icon: 'zmdi zmdi-calendar-check',
            type: 'dropdown',
            priority: 1,
            children: [{
                name: 'My Page',
                type: 'link',
                state: 'triangular.admin-default.my-page'
            }]
        });            
    }
})();
```

The code above will make state using UI Router and then add a menu item that will point to that states page.

# Modifying a menu at runtime

In order to modify a menu at runtime you can also inject the triMenu service.

Take the following controller example.

```
(function() {
    'use strict';

    angular
        .module('app')
        .controller('MenuController', MenuController);

    /* @ngInject */
    function MenuController(triMenu) {
        var vm = this;

        ////////////////

        function toggleExtraMenu(showMenu) {            
            // add a menu to the sidebar
            triMenu.addMenu({
                name: 'MENU.MENU.DYNAMIC-MENU',
                icon: 'zmdi zmdi-flower-alt',
                type: 'link',
                priority: 0.0,
                state: 'triangular.admin-default.menu-dynamic-dummy-page'
            });

            // remove a menu from the sidebar
            triMenu.removeMenu('triangular.admin-default.menu-dynamic-dummy-page');
        }
    }
})();
```

The above code will add and remove a menu item from the main menu.
