function mutation(arr) {
  var str = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();

  for (var i=0;i<str2.length;i++){
    if (str.indexOf(str2[i]) === -1){
      return false;
    }
  }
  return true;
}



//same with comments
//function to check, if all characters of one worde are part of another word
function mutation(arr) {
  //str = first given paremater / word & made lower Case
  var str = arr[0].toLowerCase();
  //str2 = second given paremeter / word & made lower case
  var str2 = arr[1].toLowerCase();

  //for loop to iterate through characters from second ward to check one by one
  for (var i=0;i<str2.length;i++){
    //on first charecter which is not part of str, return false
    if (str.indexOf(str2[i]) === -1){
      return false;
    }
  }
  //if not stopped (by return) during for loop means, that all characters where found
  return true;
}
