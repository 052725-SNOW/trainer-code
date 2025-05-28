// We could organize the grades as three separate arrays, and use the indexes to keep them orgainized...
// subjects = [subject1, subject2, ...]
// averageGrades = [averateGrade1, averageGrade2, ...]
// numAssignments = [numAssignments1, numAssignments2, ...]

// subject[0]
// averageGrades[0]
// numAssignments[0]

// Array methods:
// push()
// pop()
// shift()
// unshift()
// splice()

// We could also use an array of arrays to keep the subjects and their averages together...
// subject = [<name>, # assignments, average Grade]
// grades = [subject 1, subject2, ...]

// Or we create an array of objects to keep the subjects and their averages together...

// Objects in JavaScript are a collection of key-value pairs,
// where the keys are strings and the values can be any type.

// We've got three main ways to create an object in JavaScript:
// 1. Object Literal Notation
// 2. Constructor Function
// 3. Class Syntax (ES6+) - we skipped this one for now

// Object Literal Notation lets you create an object by defining its properties and values directly.
// We can even cretae an empty object and then add properties to it later.
// subject = { name: "math", assignments: 3, average: .90} <-- literal declaration

// subject = {}; <-- new object!
// subject.name = "Maths";
// subject.assignments = 3;
// subject.average = 0.90;

// Constructor Functions are a way to create objects using a function that acts as a blueprint.
// This can help us create multiple objects with the same structure without repeating code.
function Subject(name, average, assignments) {
    this.name = name;
    this.average = average;
    this.assignments = assignments;

    this.calculateAverage = function(newscore) {
        this.assignments++;
        this.average = (newscore + this.average) / this.assignments;
    }
}

// our array of subject objects
let subjects = [];

function calculateGrade() 
{
    // get the sbject name
    let name = document.getElementById("subject").value;

    // get the new score
    let value = document.getElementById("gradeInput").value;

    // calculate the score for the assignment
    valuearr = value.split("/");
    grade = valuearr[0] / valuearr[1];

    // if the suubjects array is empty, add the first subject
    if( subjects.length == 0 ) {
        console.log("Adding first subject.");
        subjects.push(new Subject(name, grade, 1));
    }
    // if the incoming subject is already in the array, update the average
    else if (subjects.map( (s) => (s.name)).includes(name)) {
//        
// TODO: find the subject in the array and update it by running its calculateAverage method      
//
        console.log("Subject already exists, updating average.");
//
//
    }
    // if the subject is not in the array, add it
    else {
        console.log("Adding new subject.");
        subjects.push(new Subject(name, grade, 1));
    }

    // display the average of the first subject in subjects
    gradeElement = "<p> " + subjects[0].average + "</p>";
    document.getElementById("finalGrade").innerHTML = gradeElement;
}
