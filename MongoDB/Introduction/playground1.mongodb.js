use('Sigma');

// Insert a few documents into the Courses collection.
db.getCollection('Courses').insertMany([
    [
        {
          "name": "Python",
          "Price": "15000",
          "Instructor": "Ali"
        },
        {
          "name": "JavaScript",
          "Price": "18000",
          "Instructor": "Hassan"
        },
        {
          "name": "C++",
          "Price": "22000",
          "Instructor": "Sami"
        },
        {
          "name": "Data Science",
          "Price": "25000",
          "Instructor": "Sara"
        },
        {
          "name": "Machine Learning",
          "Price": "30000",
          "Instructor": "Ahmed"
        },
        {
          "name": "React",
          "Price": "17000",
          "Instructor": "Bilal"
        },
        {
          "name": "Node.js",
          "Price": "20000",
          "Instructor": "Zain"
        },
        {
          "name": "Django",
          "Price": "19000",
          "Instructor": "Hira"
        },
        {
          "name": "Flutter",
          "Price": "21000",
          "Instructor": "Farhan"
        },
        {
          "name": "Cybersecurity",
          "Price": "28000",
          "Instructor": "Noor"
        }
      ]
      
]);



// Print a message to the output window.
console.log(`Done inserting data in Cources Collection.`);

