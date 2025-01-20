use catalog
//1
db.books.find({title:{$in:[/C#/, /Java/, /Python/]}});
//2
db.books.find({isbn:{$nin:[/^19/, /1884777384/, /0/]}});
//3
db.books.find({$nor:[{isbn:/^19/}, {title:/mongo/}, {pageCount:{$gt:600}}]});
//4
//db.books.find({status:{$not:{"PUBLISH"}}});
//5
db.books.countDocuments({pageCount:{$mod:[10,0]}});
//7
db.books.find({$or: [{ thumbnailUrl: { $exists: false } },{ thumbnailUrl: null }]})
