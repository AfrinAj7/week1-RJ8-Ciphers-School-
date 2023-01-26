//javascript, declare a variable by using var
//var myName = "Afrin";
//console.log(myName);

// using const
//const myName = [];
//console.log(myName);
//myName.push("Jamal")
//console.log(myName);

//using let
//let myName = "Afrin";
//console.log(myName);
//myName = 6;
//console.log(myName);

 // default params
  //function addtownumbers(num1, num2) {
   // return num1 + num2;
  //}
  // console.log (addtownumbers(1,2));

  // let addtownumbers = (num1, num2) => {
   //console.log(num1);
   //console.log(num2);
   //return num1 + num2;
//};
//console.log(addtwonumbers(1)); 

// rest and spread operator
//let array = [5,10,15,20,25];
//let newArray = [...array];
//console.log(array);  

 //rest -> ...
 //let maxOfNumbers = (...numbers) => {
   //  console.log(numbers);
   //let maximum = Number.MIN_VALUE;
   //for (let number of numbers) {
   // maximum = Math.max(maximum, number);
   //}
   //return maximum;
   //};
 
 //console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));  

 //for object 
  let object = {
    name : "Afrin",
    age: 21,
    city: "New York",
  };
  let object2 = { ...object, country : "USA"};
  console.log(object2);
    
  


