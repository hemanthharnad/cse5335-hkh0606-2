/**
 * Created by owner on 11/17/15.
 */
var pg = require('pg');
var client = new pg.Client("postgres://tgodkpzqzmtiwi:pyEETW2RkUV0IKGGxVj2YU59wN@ec2-54-83-53-120.compute-1.amazonaws.com:5432/ddafd0j8q0aud8?ssl=true");
client.connect();
var fs  = require("fs");
var prompt = require('prompt');

prompt.start();



prompt.get(['id'] , function (err, result) {

    console.log('Command-line input received:');
    console.log('  you entered id ' + result.id);




    var query = client.query("SELECT * FROM employee where id like '" +result.id+"'", function(err, results){
        if (err){
            throw err;
        }
        console.log(results.rows);

    });

});





