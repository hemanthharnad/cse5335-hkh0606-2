var fs = require('fs');
var obj;
fs.readFile('data.json', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
    var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    var random = JSON.stringify(obj);
    console.log("this is the random" + random);
});

