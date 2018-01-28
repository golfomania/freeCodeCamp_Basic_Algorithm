function destroyer() {
  var arr2 = arguments[0];

  for (var i=1;i<arguments.length;i++){
    arr2 = arr2.filter(word => word !== arguments[i]);
  }
  return arr2;
}




//same with comments
//function wich gets an array of valus as first argument
//and then multiple additional arguments wich should be searched and eliminated in the argumnet[0]
function destroyer() {
  //assign the argument[0] to a new array arr2
  var arr2 = arguments[0];

  //iterate with an for loop through the other given arguments
  for (var i=1;i<arguments.length;i++){
    //filter out all values with are identical (because filter() keeps all "true checks" we keep all values NOT equal))
    arr2 = arr2.filter(word => word !== arguments[i]);
  }
  //return the filtered array
  return arr2;
}
