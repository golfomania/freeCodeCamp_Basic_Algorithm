function palindrome(str) {
  str = str.replace(/[^a-z1-9]+/gi, "");
  str = str.toLowerCase();

  var restr = str.split("");
  restr = restr.reverse();
  restr = restr.join("");
return(str == restr);
}
