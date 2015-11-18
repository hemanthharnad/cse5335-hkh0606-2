/**
 * Created by owner on 11/17/15.
 */



var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://hemanth:hemanth@ds055584.mongolab.com:55584/heroku_w78691p3";
MongoClient.connect(url,function(err,db){
    console.log("connected correctly to server");
    //db.close();
//console.log(db);
    db.createCollection("testdata");
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


            for (var i = 0; i < arr.length; i++) {
                var doc1 = {
                    id: arr[i].id,
                    fname: arr[i].fname,
                    lname: arr[i].lname,


                }

                db.collection('testdata').insertOne(doc1, function(err,result){
                    if(err){

                        console.log('err');
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