function confirmEnding(str, target){
  str = str.substr(-target.length);
  return (str == target);
}

//same with comments
//function to check, if the end of a given strng is equal to a second string
function confirmEnding(str, target){
  //reduce and assign str to the length of the target string
  str = str.substr(-target.length);
  //check if equal and return
  return (str == target);
}
