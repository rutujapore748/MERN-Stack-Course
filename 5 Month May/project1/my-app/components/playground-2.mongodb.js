// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('ecommerace');

// Create a new document in the collection.
db.students.insertMany([
  { name: "Alice", age: 20, marks: 85, subject: "Math", city: "Delhi" },
  { name: "Bob", age: 22, marks: 75, subject: "Science", city: "Mumbai" },
  { name: "Charlie", age: 23, marks: 90, subject: "Math", city: "Delhi" },
  { name: "David", age: 21, marks: 60, subject: "History", city: "Pune" },
  { name: "Eva", age: 20, marks: 95, subject: "Science", city: "Mumbai" }
]);

db.students.aggregate([
  // 10. Out: write results to a new collection
  { $out: "students_summary" }
 
]);

