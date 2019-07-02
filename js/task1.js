 var firstNumber= prompt("add number");
 var secNumber = prompt("add second number");

 firstNumber= parseInt(firstNumber);
 secNumber= parseInt(secNumber);

 if( firstNumber > secNumber){
     console.log("first number is greater", typeof firstNumber);
 }else if(firstNumber==secNumber){
     console.log("two numbers are equal", typeof secNumber);
 }else{
     console.log("second number is greater");
 }
