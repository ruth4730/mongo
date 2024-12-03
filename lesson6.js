use catalog
//6
db.books.remove({categories:{$size: 0}});
//8
db.books.find({"authors":"Robi Sen"},{title:1},{longDescription:1});
//9
db.books.find({"authors":{$all:[/a/]}},{title:1},{longDescription:1});
//10
db.books.find({categories:['XML','Internet']});
//11
db.books.find({categories:{$all:['XML','Internet']}});
//12
db.books.find({authors:{$all:[""]}});
//13
db.books.find({"authors.2":{$all:[""]}});
//14
db.books.find({"_id":{$not:{$type:"objectId"}}});