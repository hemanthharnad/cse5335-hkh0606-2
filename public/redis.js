var redis = require('redis');
var client = redis.createClient(6929, 'ec2-54-83-59-218.compute-1.amazonaws.com');
client.auth('p565hbm4d3fqvi8jmqfq9f12vft');


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
