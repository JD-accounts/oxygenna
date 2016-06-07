'use strict';
module.exports.register = function(Handlebars, options, params)  {
    function createHeader(line, prefix) {
        var text = line.replace(prefix + ' ', '');
        return {
            text: text,
            prefix: prefix,
            id: text.toLowerCase().replace(/ /g, '-').replace(/'/g, '-').replace(/\./g, '-').replace(/\(/g, '').replace(/\)/g, ''),
            children: []
        };
    }
    Handlebars.registerHelper('sidecontents', function(filename) {
        // create nested header objects
        var headers = [];
        for (var page in options.pages) {
            if ( filename === options.pages[page].filename) {
                if (options.pages[page].page) {
                    var lines = options.pages[page].page.split('\n');
                    var currentHeader = null;
                    for (var i in lines) {
                        if(lines[i].indexOf('# ') === 0) {
                            if (null !== currentHeader) {
                                headers.push(currentHeader);
                            }
                            currentHeader = createHeader(lines[i], '#');
                        }
                        else if(lines[i].indexOf('##### ') === 0) {
                            if (null !== currentHeader) {
                                headers.push(currentHeader);
                            }
                            currentHeader = createHeader(lines[i], '#####');
                        }
                        else if(lines[i].indexOf('## ') === 0) {
                            var subHeader = createHeader(lines[i], '##');
                            currentHeader.children.push(subHeader);
                        }
                    }
                    if (null !== currentHeader) {
                        headers.push(currentHeader);
                    }
                }
                break;
            }
        }
        // create toc
        var toc = '<ul class="nav">';
        for (var h in headers) {
            if (headers[h].prefix === '#####' && headers[h].children.length == 0) {
                toc += '<li class="oxy-docs-sidebar-subheading nav-subheading-level-one">' + headers[h].text + '</li>'
                continue;
            }
            else if (headers[h].prefix === '#') {
                toc += '<li class="nav-item">';
                toc += '<a class="oxy-docs-sidebar-nav-link-js nav-link" href="#' + headers[h].id + '">' + headers[h].text + '</a>';
            }
            if (headers[h].children.length > 0) {
                toc += '<ul class="nav">';
                for (var c in headers[h].children) {
                    if (headers[h].prefix === '#####') {
                        toc += '<li class="nav-subheading-level-two">' + headers[h].text + '</li>'
                    }
                    toc += '<li class="nav-item">';
                    toc += '<a class="oxy-docs-sidebar-nav-link-js nav-link" href="#' + headers[h].children[c].id + '">' + headers[h].children[c].text + '</a>';
                    toc += '</li>';
                }
                toc += '</ul>';
            }
            toc += '</li>';
        }
        toc += '</ul>';
        return new Handlebars.SafeString(toc);
    });

};
