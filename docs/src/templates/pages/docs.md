---
  title: Support
  subtitle: How to get support from Oxygenna
  layout: docs.hbs
---

##### Shortcodes

# Creating A Shortcode

# Model

## Attributes

| Parameter     | Type   | Description                                                                                             |
|:--------------|:-------|:--------------------------------------------------------------------------------------------------------|
| name          | string | Name of the shortcode                                                                                   |
| category      | string | Grouping category of shortcode                                                                          |
| icon          | string | Icon to use for the shortcode element                                                                   |
| description   | string | Short description of the shortcode                                                                      |
| option_groups | array  | Array of groups of options for this shortcode [See Option Groups](#option-groups)                       |
| container     | array  | Allow other shortcodes to be placed inside this one [See Container](#container)                         |
| columns       | array  | Special option for rows to tell PagePress how to deal with columns [See Columns](#columns)              |
| templates     | array  | Define templates that the shortcode should use when being added to the page [See Templates](#templates) |

## Option Groups

## Container

## Columns

## Example Model


# View

# Controller

##### Codex

# WordPress Filters

## pagepress-devices

This filter allows you to change the list of devices shown in the device switcher button of PagePress.

### Example Code

    function pp_add_my_devices($devices) {
        $devices = array(
            array(
                'Device Name' => 'Samsung Ativ S',
                'Platform' => 'WP8',
                'OS Version' => '8.0',
                'Portrait Width' => '320',
                'Landscape Width' => '480',
                'Release Date' => '2012-12'                
            );
        );
        return $devices;
    }
    add_filter('pagepress-devices', 'pp_add_my_devices')
