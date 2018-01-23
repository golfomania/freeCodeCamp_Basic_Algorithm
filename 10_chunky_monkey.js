function chunkArrayInGroups(arr, size) {
  var result = [];
  var index = 0;

  while (index < arr.length){
    result.push(arr.slice(index, index+size));
    index +=size;
  }
  return result;
}

//same with comments
//function to group given array elements to given numbers
function chunkArrayInGroups(arr, size) {
  //initalize a new array fo the result
  var result = [];
  //initialize an counting index to iterate through the given array
  var index = 0;

  //while end of array, during iteration, not reached
  while (index < arr.length){
    //slice of given number of array elements and add/push them to the result-array
    result.push(arr.slice(index, index+size));
    //increment the index by the given size
    index +=size;
  }
  //return the new array
  return result;
}
