function findLongestWord(str) {
  str = str.split(" ");
  str.sort(function(a, b) {
    return b.length - a.length;
  });

  return str[0].length;
}



//same with comments
//function to find the longest word inside a given string and return the lenth of it
function findLongestWord(str) {
  //split the string into a array splitted by whithespace
  str = str.split(" ");

  //sort arry by the length of each array piece, from long to short
  str.sort(function(a, b) {
    return b.length - a.length;
  });

  //return the length of the first array entry, which should now be the one with the biggest length
  return str[0].length;
}
