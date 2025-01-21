//1
use bookDB
//2
show dbs
//3
db.createCollection('books')
db.createCollection('sites')
db.books.insert({sort_desc:"intresting book",name:"shomeret hashearim",img_url:"file:///H:/%D7%A9%D7%A0%D7%94%20%D7%91/mongo/", book_url:"file:///H:/%D7%A9%D7%A0%D7%94%20%D7%91", ISBM:1234, price:54.8, categories:["adults","children","cook"], website_id:'67053e47dd86d6918b072f8a'})
db.sites.insert({name:"yefe-nof", url:"file:///H:/%D7%A9%D7%A0%D7%94%20%D7%91/mongo/", booksId:[]})
//4
show collections
//5
db.sites.drop()
//6
db.books.insert({sort_desc:"childish book",name:"dadi gamadi",img_url:"file:///H:/%D7%A9%D7%A0%D7%94%20%D7%91/mongo/", book_url:"file:///H:/%D7%A9%D7%A0%D7%94%20%D7%91", ISBM:1235, price:10.9, categories:["adults","children","cook"], website_id:'67053e47dd86d6918b072f8a'})
db.books.insert({sort_desc:"intresting book",name:"shomeret hashearim",img_url:"file:///H:/%D7%A9%D7%A0%D7%94%20%D7%91/mongo/", book_url:"file:///H:/%D7%A9%D7%A0%D7%94%20%D7%91", ISBM:1234, price:54.8, categories:["adults","children","cook"], website_id:'67053e47dd86d6918b072f8a'})
