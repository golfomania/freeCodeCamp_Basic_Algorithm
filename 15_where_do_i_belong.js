function getIndexToIns(arr, num) {
  var arr2 = arr.sort(function(a, b){
    return a-b;
  });

  for (var i=0;i<arr2.length;i++){
    if (num<=arr2[i]){
      return i;
    }
    else if (num>=arr2[arr2.length-1]){
      return arr2.length;
    }
  }
}




//same with comments
//function to find out on wich position given num should be insert in given array of values if this would be sorted
function getIndexToIns(arr, num) {
  //assign sorted arr (from low to high !a, b, function is needed, or 10 will be before 2)
  //to new array
  var arr2 = arr.sort(function(a, b){
    return a-b;
  });

  //iterate wich for loop through arr2
  for (var i=0;i<arr2.length;i++){
    //check if num is less than the actual value in the array
    if (num<=arr2[i]){
      //if yes, than return actual array index
      return i;
    }
    //else if needen, if num is bigger than all values in arr
    else if (num>=arr2[arr2.length-1]){
      //then return last index 
      return arr2.length;
    }
  }
}
