
//var uristring= 'mongodb://testdata@ds033484.mongolab.com:33484/heroku_h3hg10mv';

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://employees:123@ds033484.mongolab.com:33484/heroku_h3hg10mv";
MongoClient.connect(url,function(err,db){
    console.log("connected correctly to server");
    //db.close();

    //db.createCollection("employees");
    console.log('Table created!');

    var fs  = require("fs");
    fs.readFile('./data.json', 'utf8', function(err,data){

        if(err)
        {
            console.log('err');
        }
        else
        {

            var arr = JSON.parse(data);

            console.log(arr);


           for (var i = 0; i < arr.length; i++) {
                var doc1 = {
                    id: arr[i].id,
                    first_name: arr[i].fname,
                    last_name: arr[i].lname,


                }

               console.log(doc1);

                db.collection('employees').insertOne(doc1, function(err,result){
                    if(err){

                        console.log(err);
                    }

                    else{
                        //console.log(result);
                        console.log("Successfully inserted");
                    }
                });
            }
        }
    });
});