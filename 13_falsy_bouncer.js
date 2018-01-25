function bouncer(arr) {
  return arr.filter(function(el){
    return Boolean(el);
  });
}




//same with comments
//function to sort out any falsy (false, null, 0, "", undefined, and NaN)
//elements out of an given array
function bouncer(arr) {
  //returning the filtered array by using a inline callback function, which uses
  //Boolean() to return true or false depending on the actual element checked by filter()
  return arr.filter(function(el){
    return Boolean(el);
  });
}
