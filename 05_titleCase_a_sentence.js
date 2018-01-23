//function to change all letters in a given sentence to lower case
//but change the first letter of each word to a capital one
function titleCase(str) {
  //split sentence up into an array of elements at each whitespace
  str = str.split(" ");

  //iterate through the different array elements with an for loop
  for (var i = 0; i<str.length;i++){
    //take one element and lower all letters
    var arr = str[i].toLowerCase();
    //split the word into a new array with seperate letters
    arr = arr.split("");
    //take first array element = first letter and make it capital
    arr[0] = arr[0].toUpperCase();
    //join the array back to a word/string with no seperator
    str[i] = arr.join("");
  }
  //join the main array back to a string with whitespaces as seperators
  return str.join(" ");
}
