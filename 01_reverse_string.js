function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");

  return str;
}




//same with comments
//function to reverse a string given by parameter
function reverseString(str) {
  //split the string into an array with single letters / Split at each "" = everywhere
  str = str.split("");
  //reverse the order of the array (it is not possible to use reverse() direct on a string)
  str = str.reverse();
  //join the array back to a single string
  str = str.join("");

  //return the reversed string
  return str;
}
