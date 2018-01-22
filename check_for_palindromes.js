function palindrome(str) {
  // Good luck!
  str = str.replace(/\W+/gi, '');
  str = str.toLowerCase();
  var restr = [];
  restr =    str.split();
  restr = restr.reverse();
  restr = restr.join('');
return(str == restr);
}



palindrome("eye");
