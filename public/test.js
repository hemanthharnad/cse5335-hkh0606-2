
var pg = require('pg');
var fs = require("fs");

process.env.url1 = "postgres://fypgzelzcfbyvu:0C6hO0X-QWFc1Jxt_lcUU2vAWJ@ec2-107-21-219-201.compute-1.amazonaws.com:5432/d5ftk80us4s4st?ssl=true";

pg.connect(process.env.url1, function(err,client) {


    console.log("connected bro");
    if (err) throw err;
    console.log('Connected to postgres! Getting schemas...');
    console.log("reading the json file now");
    var contents = fs.readFileSync("data.json");
    var data = JSON.parse(contents);
    console.log("this is the contents:" + data.length);
   client.query('CREATE TABLE Employee4(id VARCHAR(10), fname VARCHAR(64), lname VARCHAR(64))');
    data.forEach(insert);

    function insert(element) {
        // console.log("INSERT INTO Employee(id, firstname, lastname) values($1,$2,$3)", [element.id, element.fname, element.lname]);
        client.query("INSERT INTO Employee4(id, fname, lname) values($1,$2,$3)", [element.id, element.fname, element.lname]);

    }

    client.query('SELECT * from Employee4 where id=$1', [100], function (err, result) {

        if (err) {
            return console.error('error running query', err);
        }
        result.rows.forEach(printer);


        function printer(someway) {
            console.log(someway.id, someway.fname, someway.lname);
        }


    });

    client.query('SELECT * from Employee4 where fname= $1', ['Wazir'], function (err, result) {

        if (err) {
            return console.error('error running query', err);
        }
        result.rows.forEach(printer);


        function printer(someway) {
            console.log(someway.id, someway.fname, someway.lname);
        }

        console.log("Insertion successful");
    });

});