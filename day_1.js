
// create a function to add two string
   function addString (x,y){
       if(x === ''){
           x === 0;
       }
       else {
           x === parseInt(x);
       }
       if(y === ''){
           y === 0;
       }
       else{
           y === parseInt(y);
       }
   
    var sum = (x + y);
    var sumToString = sum.toString();
    console.log(sumToString)

    return sumToString;
   }

    //calling the function
    var finalResult = addString (6, 8);

