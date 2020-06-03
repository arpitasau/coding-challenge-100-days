
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
