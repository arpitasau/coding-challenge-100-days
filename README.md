# coding-challenge-100-days
# Day-1
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


# Day-2
 //Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

        //Function performing the logic
        function sheep(num){
         
          //Variable assignment
          var resultStr = " ";
          var i;

          //for loop  
          for(i = 1; i <= num; i++) {
           resultStr += i + ' sheep...';
          } 
          console.log(resultStr);
          return resultStr;
        }
        //Caller of the above function and var sheepStr holds the returned value of the above function which is in this case a concatenated string.
        var sheepStr = sheep(4);
 
# Day 3
 //wrire a function that adds two arrays
   function arrayPlusArray(arr1, arr2){
      var totalArray = arr1.concat(arr2);
      var a = 0;
      for(i = 0; i < totalArray.length; i++){
          a += totalArray[i];
      }
      console.log(a);
      return a;
  }
    arrayPlusArray([1, 2, 3], [5, 6, 7]);

# Day 4

//Output Max
 Write a function that takes in an array of numbers and outputs the maximum number.
 
/*Ex:
Input: [ 1, 2, 3 ]
Output: 3
Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6
Input: [ 3, 3, 3 ]
Output: 3 */

const inputArray = [ 1, 3, 4, 50];
const maxNumber = Math.max(...inputArray);
console.log(maxNumber);

# Day 5
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