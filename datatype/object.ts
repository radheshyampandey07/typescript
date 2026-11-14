var student: {
    name: string,
    age: number,
    address: string,
    email ?: any

}  = {
    name: "John Doe",
    age: 25,
    address: "123 Main St, Anytown, USA",
    }

console.log("Student name is: " + student.name);
console.log("Student age is: " + student.age);
console.log("Student address is: " + student.address);

console.log("Student details are: " + JSON.stringify(student));