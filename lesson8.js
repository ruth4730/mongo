db.getCollection("books").find({})
//1
db.books.distinct('title').map(t=>t.toUpperCase());
//2
db.books.distinct('categories').map(c=>{
    let count=db.books.countDocuments({categories:c})
    return c+' : '+count
})
//4
db.books.aggregate([
{$match:{status:'PUBLISH'}},
{$project:{status:0}},
{ $set: { is_publish: true}}
])