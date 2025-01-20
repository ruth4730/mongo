//1
db.books.update({ pageCount: 1234 },{ $set: { title: "1,2,3,4 to java programing", status: "PUBLISH" }},{ upsert: true })
//2
db.books.updateMany({title:/^b/}, {$unset:{publishedDate:true}})
//3
db.books.updateOne({status:"PUBLISH",publishedDate:{$exists:false}},{$currentDate: {publishedDate: true}})
//4
db.books.updateMany({price:100},{$set:{price:100}},{upsert:true})
//5
db.books.update({categories:{$all:["Java"]}},{$mul:{price:1.1}})
//6
db.books.updateMany({title:/c#/i},{$inc:{pageCount:-20},$currentDate:{lastModified:true}})
//7
db.books.update({},{$max:{pageCount:0},$set:{pageCount:100},$currentDate:{lastModifiedPages:true}})
//8
db.books.update({},{$rename:{lastModifiedPages:lastModified}})
//9
db.books.update({},{$min:{pageCount:1000},$set:{pageCount:230}})
//10
db.books.update({authors:null},{$unset:{authors:true}})
db.books.update({categories:null},{$unset:{categories:true}})