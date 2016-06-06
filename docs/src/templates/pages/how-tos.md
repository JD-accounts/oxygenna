---
  title: How Tos
  subtitle: Quick tutorials on everyday angular problems
  layout: docs.hbs
---

# Enable angular html5 mode
This can be achieved with connect-modrewrite


- First install connect-modrewrite
        $ npm install --save-dev connect-modrewrite

- Then edit gulp/server.js

        var modRewrite = require('connect-modrewrite');

        function browserSyncInit(baseDir, files, browser) {
          browser = browser === undefined ? 'default' : browser;

          browserSync.instance = browserSync.init(files, {
            startPath: '/index.html',
            server: {
              baseDir: baseDir,
              middleware: [
                proxyMiddleware,
                modRewrite([
                  '!\\.\\w+$ /index.html [L]'
                ])
              ]
            },
            browser: browser
          });

        }