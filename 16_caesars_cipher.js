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
