 var firstNumber= prompt("add number");
 var secNumber = prompt("add second number");

 firstNumber= parseInt(firstNumber);
 secNumber= parseInt(secNumber);
 
 console.log("given message is", typeof firstNumber);
 console.log("given message is", typeof secNumber);

 if( firstNumber > secNumber){
     console.log("first number is greater", typeof firstNumber);
 }else if(firstNumber==secNumber){
     console.log("two numbers are equal", typeof secNumber);
 }else if(firstNumber < secNumber){
     console.log("second number is greater");
 }else{
     console.log("The input is not a number")
 }
