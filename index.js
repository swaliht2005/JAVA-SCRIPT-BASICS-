const student = [
    { name: "Smith", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "John", rollNumber: 16, marks: 35 },
    { name: "Tiger", rollNumber: 7, marks: 55 }
  ];
  
 const  tatalmarck = student.reduce((val,student)=> val+student.marks,0);
console.log(tatalmarck)
