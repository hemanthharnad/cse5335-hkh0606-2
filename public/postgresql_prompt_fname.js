/**
 * Created by owner on 11/17/15.
 */


var pg = require('pg');
var client = new pg.Client("postgres://fypgzelzcfbyvu:0C6hO0X-QWFc1Jxt_lcUU2vAWJ@ec2-107-21-219-201.compute-1.amazonaws.com:5432/d5ftk80us4s4st?ssl=true");
client.connect();
var fs  = require("fs");
var prompt = require('prompt');

prompt.start();



prompt.get(['fname'] , function (err, result) {

    console.log('Command-line input received:');
    console.log('  you entered fname ' + result.fname);




    var query = client.query("SELECT * FROM employee4 where fname like '" +result.fname+"'", function(err, results){
        if (err){
            throw err;
        }
        console.log(results.rows);

    });

});





