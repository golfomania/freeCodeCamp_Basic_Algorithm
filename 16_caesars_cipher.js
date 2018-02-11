function rot13(str) {
  str = str.split("");
  for (var i=0;i<str.length;i++){
    var num = str[i].charCodeAt(0);
    if (num>64 && num<78){
      num +=13;
      str[i] = String.fromCharCode(num);
    }
    else if (num>77 && num<91){
      num -=13;
      str[i] = String.fromCharCode(num);
    }
  }
  str = str.join("");
  return str;
}



//same with comments
//funktion to apply the ROT13 cipher
function rot13(str) {
  //spilt string in an array of single characters
  str = str.split("");

  //iterate through array
  for (var i=0;i<str.length;i++){
    //get charCodeAt integer from character in this array position and assign to num
    var num = str[i].charCodeAt(0);

    //check if charecter = num ist between A and M (see table http://www.asciitable.com/)
    if (num>64 && num<78){
      //if yes, then add 13 for new character
      num +=13;
      //get new character by fromCharCode function and assign back to the current array position
      str[i] = String.fromCharCode(num);
    }
    //check if charecter = num ist between N and Z (see table http://www.asciitable.com/)
    else if (num>77 && num<91){
      //if yes, lower num by 13 for new character
      num -=13;
      //get new character by fromCharCode function and assign back to the current array position
      str[i] = String.fromCharCode(num);
    }
    //if character is not between A and Z nothing will be changed and array will jump to next position
  }

  //If for loop is finished the array is joined back to a string
  str = str.join("");
  //and returned
  return str;
}
