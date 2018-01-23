function palindrome(str) {
  str = str.replace(/[^a-z0-9]+/gi, "");
  str = str.toLowerCase();

  var restr = str.split("");
  restr = restr.reverse();
  restr = restr.join("");

  return(str == restr);
}




//same with comments
//function to check if parameter is a palindrome string
function palindrome(str) {
  //replace all leters with are NOT in the group of a-z 0 or 9
  //and search, not only the first match
  //and ignore high or low case
  //replace with emptx string = delete it
  str = str.replace(/[^a-z0-9]+/gi, "");
  //change all to low case letters
  str = str.toLowerCase();

  //create second string to check with
  //to reverse, 1. Split into an array of single letters
  var restr = str.split("");
  //2. reverse the sort of the single pieces inside the array
  restr = restr.reverse();
  //3. join it together (make string from array)
  restr = restr.join("");

  //check if both are identical and return restult (true or false)
  return(str == restr);
}
