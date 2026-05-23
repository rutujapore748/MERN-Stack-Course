db.students.insertMany([
  { name: "Alice", age: 20, marks: 85, subject: "Math", city: "Delhi" },
  { name: "Bob", age: 22, marks: 75, subject: "Science", city: "Mumbai" },
  { name: "Charlie", age: 23, marks: 90, subject: "Math", city: "Delhi" },
  { name: "David", age: 21, marks: 60, subject: "History", city: "Pune" },
  { name: "Eva", age: 20, marks: 95, subject: "Science", city: "Mumbai" }
]);


db.students.aggregate([
  // 1. Match: filter students with marks > 70
  { $match: { marks: { $gt: 70 } } },

  // 2. Project: select specific fields
  { $project: { name: 1, subject: 1, marks: 1, city: 1 } },

  // 3. Sort: order by marks descending
  { $sort: { marks: -1 } },

  // 4. Limit: top 3 students
  { $limit: 3 },

  // 5. Skip: skip the first student
  { $skip: 1 },

  // 6. Group: average marks by subject
  { $group: { _id: "$subject", avgMarks: { $avg: "$marks" } } },

  // 7. AddFields: add a grade field
  { $addFields: { grade: { $cond: [{ $gte: ["$avgMarks", 80] }, "A", "B"] } } },

  // 8. Lookup: join with another collection (cities info)
  { $lookup: {
      from: "cities",
      localField: "_id",
      foreignField: "subject",
      as: "cityInfo"
    }
  },

  // 9. Unwind: flatten cityInfo array
  { $unwind: { path: "$cityInfo", preserveNullAndEmptyArrays: true } },

  // 10. Out: write results to a new collection
  { $out: "students_summary" }
]);
