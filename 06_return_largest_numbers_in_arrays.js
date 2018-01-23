function largestOfFour(arr) {
  for (var i= 0; i<arr.length; i++){
    var calc = arr[i];
    calc = calc.sort(function(a,b){
      return b-a;
    });
    arr[i] = calc[0];
  }
  return arr;
}



//same with comments
//function to search the sub elements of an array
//return an array of the biggest numbers of each array
function largestOfFour(arr) {
  //iterate through array elements
  for (var i= 0; i<arr.length; i++){
    //store each sub element to an temporary new array
    var calc = arr[i];
    //sort numers inside array from big to small
    calc = calc.sort(function(a,b){
      return b-a;
    });
    //replace sub element with an new element containing only the biggest (=first) number
    arr[i] = calc[0];
  }
  return arr;
}
