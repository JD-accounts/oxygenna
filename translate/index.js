var traverse = require('traverse');
var translate = require('yandex-translate');
var fs = require('fs');

const YANDEX_API_KEY = 'trnsl.1.1.20150427T131710Z.f57234d536e7e193.b63a29a71b1f58c6ba0375d74624a6825b517e5a';

var appStringsEnglish = require('../app/src/app/il8n/en.json');

var translateCount = 0;
var appTranslated = traverse(appStringsEnglish).forEach(function(x) {
    if(typeof x !== 'object') {
        var self = this;
        translateCount++;
        translate(x, { to: 'el', key: YANDEX_API_KEY }, function(err, res) {
            self.update(res.text.toString());
            translateCount--;
            if(translateCount === 0) {
                writeTranslation('./el.json', appTranslated);
                console.log('FINISHED');
            }
        });
    }
});

function writeTranslation(filename, data) {
    fs.writeFile(filename, JSON.stringify(data, null, 4), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('JSON saved to ' + filename);
        }
    });
}