
var pg = require('pg');
var fs = require("fs");

process.env.url1 = "postgres://tgodkpzqzmtiwi:pyEETW2RkUV0IKGGxVj2YU59wN@ec2-54-83-53-120.compute-1.amazonaws.com:5432/ddafd0j8q0aud8?ssl=true";

pg.connect(process.env.url1, function(err,client) {


    console.log("connected bro");
    if (err) throw err;
    console.log('Connected to postgres! Getting schemas...');
    console.log("reading the json file now");
    var contents = fs.readFileSync("data.json");
    var data = JSON.parse(contents);
    console.log("this is the contents:" + data.length);
   client.query('CREATE TABLE employee(id VARCHAR(10), fname VARCHAR(64), lname VARCHAR(64))');
    data.forEach(insert);

    function insert(element) {
        // console.log("INSERT INTO Employee(id, firstname, lastname) values($1,$2,$3)", [element.id, element.fname, element.lname]);
        client.query("INSERT INTO employee(id, fname, lname) values($1,$2,$3)", [element.id, element.fname, element.lname]);

    }

    client.query('SELECT * from employee where id=$1', [100], function (err, result) {

        if (err) {
            return console.error('error running query', err);
        }
        result.rows.forEach(printer);


        function printer(someway) {
            console.log(someway.id, someway.fname, someway.lname);
        }


    });

    client.query('SELECT * from employee where fname= $1', ['Wazir'], function (err, result) {

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