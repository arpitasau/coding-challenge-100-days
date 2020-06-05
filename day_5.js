//      Average: Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4
// Input: [ 10, 5 ]
// Output: 7.5
// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2

function avarageNum (arr){
    total = 0;
    for(var i = 0; i < arr.length; i ++){
       total += arr[i];
       console.log(total);
    };
    return total / arr.length;
};
var result = avarageNum ([1, 4, 7]);
console.log(result);