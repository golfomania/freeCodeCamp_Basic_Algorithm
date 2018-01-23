function repeatStringNumTimes(str, num) {
  if (num>=0){
      return str.repeat(num);
  }
  else{
    return "";
  }
}


//same with comments
//function to repaet a string a given number of times
function repeatStringNumTimes(str, num) {
  //check number is positiv
  if (num>=0){
      //return the strung num-times
      return str.repeat(num);
  }
  //if num not positive repeat an empty string
  else{
    return "";
  }
}
