function truncateString(str, num){
  if (num < str.length){
    if (num >=3){
      str = str.slice(0,num-3);
      return str.concat("...");
    }
    else{
      str = str.slice(0,num);
      return str.concat("...");
    }
  }
  else{
    return str;
  }
}




//same with comments
//function to truncat a given string to a given length with added ...
function truncateString(str, num){
  //check if wanted new stinglength is shorter than the current string
  if (num < str.length){
    //if new length is longer than 3 characters
    if (num >=3){
      //extract the new length mins 3 characters for the ...
      str = str.slice(0,num-3);
      //add ... and return
      return str.concat("...");
    }
    //if new length is shorter than 3 characters
    else{
      //extract new length
      str = str.slice(0,num);
      //add ... and return
      return str.concat("...");
    }
  }
  //if wanted new stringlength is not shorter than old one, return unchanged string
  else{
    return str;
  }
}
