db.getCollection("books").find({})
//1
db.books.distinct('title').map(t=>t.toUpperCase());
//2
db.books.distinct('categories').map(c=>{
    let count=db.books.countDocuments({categories:c})
    return c+' : '+count
})
//3
db.books.aggregate([
    {$match:{title:/^A/}},
    {$set:{title:"$title"}},
    {$set:{pageCount:'$pageCount'}},
    {$sort:{publishedDate:-1}}
])
//4
db.books.aggregate([
{$match:{status:'PUBLISH'}},
{$project:{status:0}},
{ $set: { is_publish: true}}
])
//5
db.books.aggregate([
    {$match:{pageCount:{$gt:0}}},
    {$project:{longDescription:0}},
    {$project:{shortDescription:0}},
    {$skip:10},
    {$limit:100},
    {$out:'books2'}
])
//6
db.books.aggregate([
    {$group:{
        _id:'$pageCount',
        booksAmount:{$sum:1}       
    }},
     {$addFields:{pageCount:'$_id'}},
     {$project:{_id:0}},
     {$sort:{booksAmount:1}}
     
])
//7
db.books.aggregate([
    { $group: {
        _id: '$status',
        pageCountAvg:   { $avg: '$pageCount' },
        pageCountMax:   { $max: '$pageCount' },
        pageCountMin:   { $min: '$pageCount' },
        pageCountFirst: { $first: '$pageCount' },
        pageCountLast:  { $last: '$pageCount' }
    } }
])
//8
db.books.aggregate([
    {$group:{
        _id: '$status',
        bookNames:{$push:'$title'},
        disBookName:{$addToSet:'$title'}
    }}
])
//9
db.books.aggregate([
    {$unwind:'$authors'},
    {$group:{
        _id:'$authors',
        bookNames:{$push:'$title'},
        booksAmount:{$sum:1}
    }},
    {$sort:{booksAmount:-1}}
])
//10
db.books.aggregate([
{$unwind:'$categories'},
    {$group:{
        _id:'$categories',
        booksAmount: {$sum:1}
    }},
    {$sort:{booksAmount:-1}}
])
//11
db.books.aggregate([
    {$match:{authors:{$ne:''}}},
    {$group:{_id:'$authors'}},
    {$addFields:{name:'$_id'}},
    {$project:{_id:0}},
    {$sort:{name:1}},
    {$out:'authors'}    
])