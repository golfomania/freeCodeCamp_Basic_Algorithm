
function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");

  return str;
}


//same with comments
//funktion to reverse a string given by parameter
function reverseString(str) {
  //split the string into a array with single letters / Split at each "" = everywhere
  str = str.split("");
  //reverse the order of the array (this is not possible to use direct on a string)
  str = str.reverse();
  //join the array back to an single string
  str = str.join("");

  //return the reversed string
  return str;
}
