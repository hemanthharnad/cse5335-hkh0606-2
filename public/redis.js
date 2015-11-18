var redis = require('redis');
var client = redis.createClient(10899, 'ec2-54-83-59-218.compute-1.amazonaws.com');
client.auth('pe7ap32h1dm66n39n9gsv6b9654');


client.on('connect', function() {
    console.log('Connected to Redis');

    var fs  = require("fs");
    fs.readFile('./data.json', 'utf8', function(err,data){

        if(err)
        {
            console.log('err');
        }

        else {


            var arrObj = JSON.parse(data);


            for (var i = 0; i < arrObj.length; i++) {

                var obj = arrObj[i];

             //   console.log(obj);

                client.hmset(''+obj.id, obj, function(err, object) {
                    console.log(object);
                });
            }


            client.quit(function (err, res) {
                console.log('Exiting from quit command.');
            });







        }
    });








});
