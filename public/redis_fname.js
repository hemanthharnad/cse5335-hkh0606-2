
var redis = require('redis');

var redis_scanner = require('redis-scanstreams')(redis);

var client = redis.createClient(10899, 'ec2-54-83-59-218.compute-1.amazonaws.com');
client.auth('pe7ap32h1dm66n39n9gsv6b9654');


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

