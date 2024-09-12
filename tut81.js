//Inserting data in mongo db

use-poluKart
db.item.insertOne({name:"IQOO Z3 5G",price:18000,rating:4.1,qty:233,sold:98})

db.item.insertMany([{name:"IQOO Z3 5G",price:18000,rating:4.1,qty:233,sold:98},{name:"Readmi",price:13000,rating:3.1,qty:133,sold:158},{name:"Oppo",price:11000,rating:2.1,qty:33,sold:18}])