// .map() 
//let array = [1,2,3,4,5];
//let newArray = [];
 //for (let i = 0; i < array.length; i++) {
   // newArray[i] = array[i] * array[i];
 //}
 //console.log(newArray);   
 
 //let array = [5,10,15,20]; 
 //function functionForMap(element) {
   // return element * element;
 //}
 //let newArray = array.map(functionForMap);
 //console.log(newArray); 

 //let addTwoNumbers = (a,b) =>  a+b;
 //let num1 = 4;
 //let num2 = 5;
 //addTwoNumbers(num1, num2);

 // in js, a function is also a js object  

 // foreach 

  // let array = [1,2,3,4,5];
   //array.forEach((element, index) => {
    //console.log(element);
   //});

   // .filter()
    let array= [10,20,30,40,50];
   //let newArray = array.filter((element)=> element >= 30);
   //console.log(newArray);
    let temp =  array.find((value) => {
        return value > 20;
     }); 

     console.log(temp);

     
    