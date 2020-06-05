// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr){
    //we need a variable to hold the sum of positive numbers
    var sum = 0;
    //loop through the array
    for(var i = 0; i < arr.length; i++){ 
        //taking the positive numbers only
       if(arr[i]> 0){
          console.log(arr[i])
          //adding the positive number to sum
          sum += arr[i];
          console.log (sum);
       };
    };
    return sum;
};   
