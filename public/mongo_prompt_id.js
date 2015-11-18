/**
 * Created by owner on 11/17/15.
 */






var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://hemanth:hemanth@ds055584.mongolab.com:55584/heroku_w78691p3";
MongoClient.connect(url,function(err,db){
    console.log("connected correctly to server");


    var prompt = require('prompt');

    prompt.start();

    prompt.get(['id'], function (err, result) {
        //console.log('Command-line input received:');
        console.log(' Results for id: ' + result.id);


        var getById = function(db, callback) {
            var cursor =db.collection('testdata').find({"id":parseInt(result.id)});
           // var cursor =db.collection('employees').find(['id']);

            cursor.each(function(err, doc) {
                assert.equal(err, null);
                if (doc != null) {

                    console.log(doc);
                } else {
                    callback();

                }
            });

        }


        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            getById(db, function() {
                db.close();
            });
        });

    });

});