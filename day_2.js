
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
 
