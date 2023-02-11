/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  let result = arr.map(function(marksover50) {
    console.log(marksover50);
  });
}

function PrintStudentsbyForEach() {
  arr.forEach(function(number) {
    console.log(number);
  });
}

function addData() {
  arr.push(4,"susan","20",45);
  arr.forEach(function(number) {
    console.log(number);
  });
}

function removeFailedStudent() {
  arr.shift();
  arr.forEach(function(number) {
    console.log(number);
  });
}

function concatenateArray() {
  //Write your code here, just console.log
}
