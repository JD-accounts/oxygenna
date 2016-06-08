'use strict';
module.exports.register = function(Handlebars, options, params)  {
    function createItem(line, prefix) {
        var text = line.replace(prefix + ' ', '');
        return {
            text: text,
            prefix: prefix,
            id: text.toLowerCase().replace(/ /g, '-').replace(/'/g, '-').replace(/\./g, '-').replace(/\(/g, '').replace(/\)/g, ''),
            children: []
        };
    }

    function createHeading(heading) {
        var html = '<li class="nav-item">';
        html += '<a class="oxy-docs-sidebar-nav__heading oxy-docs-sidebar-nav__heading-js nav-link" href="#' + heading.id + '">' + heading.text + '</a>';
        if(heading.children.length > 0) {
            html += '<ul class="nav">';
            for(var child in heading.children) {
                html += createHeading(heading.children[child]);
            }
            html += '</ul>';
        }
        html += '</li>';
        return html;
    }
    Handlebars.registerHelper('sidecontents', function(filename) {
        var sections = [];
        for (var page in options.pages) {
            if ( filename === options.pages[page].filename) {
                if (options.pages[page].page) {
                    var lines = options.pages[page].page.split('\n');
                    var currentSection = null;
                    var currentHeader = null;
                    for (var i in lines) {
                        if(lines[i].indexOf('# ') === 0) {
                            currentSection = createItem(lines[i], '#');
                            sections.push(currentSection);
                        }
                        else if(lines[i].indexOf('## ') === 0) {
                            currentHeader = createItem(lines[i], '##');
                            if(null != currentSection) {
                                currentSection.children.push(currentHeader);
                            }
                        }
                        else if(lines[i].indexOf('### ') === 0) {
                            var subHeader = createItem(lines[i], '###');
                            if(null != currentHeader) {
                                currentHeader.children.push(subHeader);
                            }
                        }
                    }
                }
            }
        }

        // create toc
        var toc = '<nav role="navigation" class="oxy-docs-sidebar-nav">';
        for (var s in sections) {
            var section = sections[s];
            toc += '<h5 class="oxy-docs-sidebar-nav__section-heading">' + section.text + '</h5>';
            if(section.children.length > 0) {
                toc += '<ul class="nav">';
                for(var h in section.children) {
                    toc += createHeading(section.children[h]);
                }
                toc += '</ul>';
            }
        }
        toc += '</nav>';
        return new Handlebars.SafeString(toc);
    });

};
