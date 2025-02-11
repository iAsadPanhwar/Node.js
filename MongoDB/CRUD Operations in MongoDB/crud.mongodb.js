use("CrudDb")

console.log(db)

db.createCollection("cources")

db.cources.insertOne({
    "name":"Asad's web dev",
    "price":"20000",
    "assignments":"12",
    "projects":"45"
})

// db.cources.insertMany(
//     [
//         {
//           "name": "Ali's Python Bootcamp",
//           "price": "18000",
//           "assignments": "10",
//           "projects": "40"
//         },
//         {
//           "name": "Hassan's JavaScript Mastery",
//           "price": "22000",
//           "assignments": "15",
//           "projects": "50"
//         },
//         {
//           "name": "Sami's C++ Fundamentals",
//           "price": "19000",
//           "assignments": "8",
//           "projects": "30"
//         },
//         {
//           "name": "Sara's Data Science Pro",
//           "price": "25000",
//           "assignments": "20",
//           "projects": "60"
//         },
//         {
//           "name": "Ahmed's Machine Learning",
//           "price": "30000",
//           "assignments": "18",
//           "projects": "55"
//         },
//         {
//           "name": "Bilal's React Developer",
//           "price": "21000",
//           "assignments": "12",
//           "projects": "45"
//         },
//         {
//           "name": "Zain's Full-Stack Course",
//           "price": "28000",
//           "assignments": "25",
//           "projects": "70"
//         },
//         {
//           "name": "Hira's Django Web App",
//           "price": "20000",
//           "assignments": "14",
//           "projects": "48"
//         },
//         {
//           "name": "Farhan's Flutter UI Design",
//           "price": "23000",
//           "assignments": "17",
//           "projects": "52"
//         },
//         {
//           "name": "Noor's Cybersecurity Expert",
//           "price": "26000",
//           "assignments": "22",
//           "projects": "65"
//         }
//       ]
      
// )

// let a = db.cources.find({"name":"Asad's web dev"})

// console.log(a.toArray())

// let a = db.cources.findOne({"name":"Asad's web dev"})

// console.log(a)

// Update

db.cources.updateOne({"name":"Asad's web dev"
}, {$set:{"name":"Asad"}})


db.cources.updateMany({"name":"Asad's web dev"
}, {$set:{"name":"Asad"}})

// Delete
db.cources.deleteMany({"name":"Asad"})
