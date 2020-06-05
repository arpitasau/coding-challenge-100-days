// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];



function removeEveryOther(arr){
    //creating a new var to hold the even array
    var evenarry = [];
    //loop through the array to find the even numvered element
    for (var i = 0; i < arr.length; i++){
      if( i % 2 === 0){
      evenarry.push(arr[i])
      };
    };    
      return evenarry;
  };