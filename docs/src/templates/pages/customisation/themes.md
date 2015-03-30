---
  title: Colors & Themes
  subtitle: How to change the admin template colors
  layout: docs.hbs
  section: customisation
---

# Changing the admin themes

To change the colors that are used in triangular edit <code>app.js</code>

You will find a config block that handles how the default themes are used for the various themable elements used in the template.

    // set the default themes for each of the themeable elements
    triThemeProvider.setThemeableElements({
        mainTheme: 'default',
        logoTheme: 'default',
        toolbarTheme: 'default',
        sidebarTheme: 'default'
    });

As you can see all the themable elements are set to use the default theme.  If you want to change this just edit the property with the element name you want to change and modify it to use a valid theme name.

For example to change the sidebar to use a theme called "Green" you would do the following.

    // set the default themes for each of the themeable elements
    triThemeProvider.setThemeableElements({
        mainTheme: 'default',
        logoTheme: 'default',
        toolbarTheme: 'Green',
        sidebarTheme: 'default'
    });

From now the template will use the Green theme to color the sidebar.

You can find more information about the themes available on the [themes page of the demo site](http://triangular.oxygenna.com/#/ui/themes).

Or to create your own themes read the next section.

# Creating your own themes

You can also create your own themes using combinations of the available Material Design palettes or create your own custom palette.

Edit the <code>app.js</code> file and find the following lines

    // Create some themes for the template
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink')
    .warnPalette('orange');

Here you can see a theme being created, you can create your own theme by copy / pasting the above code and changing the names of the palettes to [some of the available angular material palettes](https://material.angularjs.org/#/Theming/01_introduction).

For example

    // Create some themes for the template
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('teal')
    .warnPalette('grey');


# Creating your own palettes

If you don't want to use the palettes provided by material design, you can also create your own.  Just add a config function that injects the <code>$mdThemeingProvide</code> and define the colors you want to use.

    angular.module('triangular', ['ngMaterial'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50': 'ffebee',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': 'e57373',
            '400': 'ef5350',
            '500': 'f44336',
            '600': 'e53935',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
             '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });
        $mdThemingProvider.theme('default')
        .primaryPalette('amazingPaletteName');
    });