//use shoes_storeDB
//show dbs
db.createCollection('shoes')
db.shoes.insert({_id:ObjectId(),short_desc:'very nice shoe',img_url:'https://chat.malkabruk.co.il/',ISBN:'64395840',categories:[sandal,summer],website_id:ObjectId()})
db.website.insert({_id:ObjectId(),name:'next',url:'https://chat.malkabruk.co.il/',arr_shoes:[]})
//show dbs
db.website.drop()
//תרגול 3
//use catalog_books
//2
db.books.find({})
//3
db.books.find({isbn:'1933988797'})
//5
db.books.find({status:'PUBLISH'},{_id:1,title:1,publishedDate:1})
//7
db.books.find({title:/c#/i})
//9
db.books.find({pageCount:{$lte:100,$gte:10}},{title:1,pageCount:1})
//11
db.books.find({title:/data/i},{_id:0,title:1})
//13
db.books.find().sort({title:1})
//15
db.books.countDocuments({title:/^j/i})
//17
db.books.find({categories:{$exists:false}})
//19
db.books.countDocuments({_id:{$type:"objectId"}})
//שאילתות מתקדמות תרגול
//1
db.books.find({title:{$in:[/c#/i,/java/i,/python/i]}})
//3
db.books.find({$nor:[{isbn:/^19/},{title:/mongo/},{pageCount:{$gt:600}}]})
//5
db.books.countDocuments({pageCount:{$mod:[10,0]}})
//7
db.books.find({$or: [{ thumbnailUrl: { $exists: false } },{ thumbnailUrl: null }]})
//9
db.books.find({authors:{$all:[/a/i]}},{_id:0,title:1,longDescription:1})
//11
db.books.find({categories:{$all:['XML','Internet']}})
//12
db.books.countDocuments({authors:{$all:['']}})
//13
db.books.countDocuments({_id:{$not:{$type:7}}})
//תרגול 7
//3
db.books.updateOne({status:'PUBLISH',publishedDate:{$exists:false}},{$currentDate:{publishedDate:true}})
//5
db.books.updateMany({categories:{$all:['Java']}},{$mul:{price:1.1}})
//7
db.books.updateMany({},{$max:{pageCount:0},$currentDate:{lastModifiedPages:true}})
//10
db.books.updateMany({authors:null},{$unset:{authors:true}})
db.books.updateMany({categories:null},{$unset:{categories:true}})
//תרגול 8- פונקציות צבירה
//1
db.books.distinct('title').map(x=>x.toUpperCase())
//3
db.books.aggregate([
    {$match:{title:/^A/}},
    {$project:{title:1,pageCount:1}},
    {$sort:{publishedDate:-1}}
])
//5
db.books.aggregate([
    {$match:{pageCount:{$gt:0}}},
    {$project:{longDescription:0,shortDescription:0}},
    {$skip:10},
    {$limit:100},
    {$out:'book3'}  
])
//7
db.books.aggregate([
    {$group:{
        _id:"$status",
        pageCountAVG:{$avg:'$pageCount'},
        pageCountMAX:{$max:'$pageCount'},
        pageCountMIN:{$min:'$pageCount'},
        pageCountFIRST:{$first:'$pageCount'},
        pageCountLAST:{$last:'$pageCount'},
    }},
    {$project:{
        pageCountAVG:1,
        pageCountMAX:1,
        pageCountMIN:1,
        pageCountFIRST:1,
        pageCountLAST:1
    }}   
])
//9
db.books.aggregate([
    {$unwind:'$authors'},
    {$group:{
        _id:'$outhors',
        booksNames:{$push:'$title'},
        booksAmount:{$sum:1},               
    }},
    {$sort:{booksAmount:-1}}
])
//11
db.books.aggregate([
    {$unwind:'$authors'},
    {$match:{authors:{$ne:''}}},
    {$group:{_id:'%authors'}},
    {$set:{name:'$_id'}},
    {$project: {_id: 0, name: "$_id" }},
    {$sort:{name:1}},
    {$out:'authors'}
])

    
    
    
    


