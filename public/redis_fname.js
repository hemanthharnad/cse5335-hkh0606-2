
var redis = require('redis');

var redis_scanner = require('redis-scanstreams')(redis);

var client = redis.createClient(6929, 'ec2-54-83-59-218.compute-1.amazonaws.com');
client.auth('p565hbm4d3fqvi8jmqfq9f12vft');


client.on('connect', function() {
    console.log('Connected to Redis');



    var prompt = require('prompt');

    prompt.start();

    prompt.get(['fname'], function (err, result) {
        console.log(' Results for firstname: ' + result.fname);



        var toArray = require('stream-to-array')

        toArray(client.scan(), function(err, arr) {
            if (err)
                throw err;

            for (key in arr)
            {
                client.hgetall(key, function(err, object) {
                    //console.log(object);

                    for (var key in object) {
                        //console.log(key);
                        var value = object[key];
                        //console.log(object[a]);

                        if(key=="fname" && value==result.fname){
                            console.log(object);
                        }

                    }



                });
            }

            //console.log(arr)
        })

    });
});

