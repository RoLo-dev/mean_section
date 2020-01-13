// Create a database called 'my_first_db'.
use my_first_db

// Create students collection.
db.createCollection("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
// Create 5 students with the appropriate info.
db.students.insert({name: "Rolando", home_state: "California", lucky_number: 2, birthday: {month: 03, day: 02, year: 1992}})
db.students.insert({name: "Natasha", home_state: "Maine", lucky_number: 6, birthday: {month: 07, day: 06, year: 1989}})
db.students.insert({name: "Omar", home_state: "California", lucky_number: 13, birthday: {month: 08, day: 13, year: 2000}})
db.students.insert({name: "Sandra", home_state: "California", lucky_number: 7, birthday: {month: 06, day: 24, year: 1998}})
db.students.insert({name: "Carol", home_state: "Idaho", lucky_number: 12, birthday: {month: 011, day: 09, year: 1986}})
db.students.insert({name: "Angel", home_state: "California", lucky_number: 21, birthday: {month: 04, day: 21, year: 1996}})
db.students.insert({name: "Tim", home_state: "Kentucky", lucky_number: 10, birthday: {month: 02, day: 28, year: 1978}})

// Get all students.
db.student.find()

// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find(sort[{home_state: "California"}])
db.students.find({$or:[{home_state: "California"}, {home_state: "Maine"}]})

// Get all students whose lucky number is:
// greater than 3
db.students.find({lucky_number: {$gt:3}})

// less than or equal to 10
db.students.find({lucky_number: {$lte:10}})

// between 1 and 9 (inclusive)
db.students.find({ $and: [{lucky_number: {$gt: 1}}, {lucky_number: {$lte: 9}}]})

// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. 
// Do this in ONE operation.
db.students.update({}, {$set:{interest: ["coding", "brunch", "MongoDB"]}}, {multi:true})

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name: "Rolando"}, {$push:{interests:"design"}})

// Add the interest 'taxes' into someone's interest array.
db.students.update({name: "Sandra"}, {$push:{interests:"design"}})

// Remove the 'taxes' interest you just added.
db.students.update({name: "Sandra"}, {$pull:{interests:"design"}})

// Remove all students who are from California. I kept students from California and removed everyone else
db.students.remove({$or:[{home_state: "Idaho"}, {home_state: "Maine"}]})

// Remove a student by name. 
db.students.remove({name: "Tim"})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number:{$gt:5}},true)

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.insert({}, {$set: {number_of_belts:0}}, {multi:true})

// Increment this field by 1 for all students in California (Orange County Dojo).
db.students.update({home_state: "California"},{$inc:{number_of_belts:1}},{multi:true})

// Rename the 'number_of_belts' field to 'belts_earned'

// Remove the 'lucky_number' field.
db.students.update({},{$unset:{lucky_number:""}},{multi:true})

// Add a 'updated_on' field, and set the value as the current date.
db.students.update({}, {$currentDate:{"updated_on":{$type:"date"}}},{multi:true})