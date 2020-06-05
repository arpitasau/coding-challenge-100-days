//# Palindrome Detector
// Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).
// Ex:
// Input: "noon"
// Output: true
// Input: "horse"
// Output: false
// Input: "racecar"
// Output: true
   

function palindrome(string){
    var backword = "";
    for (var i = string.length - 1; i >= 0; i--){
       backword += string[i];
       console.log(backword);
    }
    if(string === backword){
       console.log("true");
       return true;
    }
    else{
         console.log("false");
         return false;
    }
     
 };
 palindrome("racecar");