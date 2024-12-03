//2
db.catalog.books.find()
//3
db.getCollection("catalog.books").find({isbn:"1933988797"});
//4
db.getCollection("catalog.books").find({"title": /java$/i},{name:1});
//5
db.getCollection("catalog.books").find({status:"PUBLISH"}, {title:1},{publishedDate:1},{_id:1});
//6
db.getCollection("catalog.books").find({pageCount:{$gt:100}}, {title:1},{pageCount:1},{isbn:1});
//7
db.getCollection("catalog.books").find({"title": /c#$/i});
//8
db.getCollection("catalog.books").find({"title": /a$/i});
//9
db.getCollection("catalog.books").find({pageCount:{$lt:100, $gt:10}}, {title:1},{pageCount:1});
//10
db.getCollection("catalog.books").find({"title": /r/i}, {title:1});
//11
use catalog--collection
db.getCollection("catalog.books").find({"title": /data/i}, {title:1});
//12
db.getCollection("catalog.books").find({title:/e$/i}, {title:1},{isbn:1});
//13
db.catalog.books.find().sort({title:1});
//14
db.catalog.books.find().sort({title:-1});
//15
db.getCollection("catalog.books").find({title:/^j/i});
//16
db.getCollection("catalog.books").find().sort({pageCount:-1}).limit(5);
//17
db.catalog.books.find({categories:{$exists: false}});
//18
db.catalog.books.find({shortDescription:{$exists: true}});
//19
db.catalog.books.countDocuments({ name: {$type:"ObjectId"} });

