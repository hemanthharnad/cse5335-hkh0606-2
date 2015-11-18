

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://hemanth:hemanth@ds033484.mongolab.com:33484/heroku_h3hg10mv";
MongoClient.connect(url,function(err,db){
    console.log("connected correctly to server");


    var getByName = function(db, callback) {
        var cursor =db.collection('testdata').find({"city":"New York"});
        cursor.each(function(err, doc) {
            assert.equal(err, null);
            if (doc != null) {
                console.dir(doc);
            } else {
                callback();
            }
        });

    }




    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        getByName(db, function() {
            db.close();
        });
    });

});