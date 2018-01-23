function titleCase(str) {
  str = str.split(" ");

  for (var i = 0; i<str.length;i++){
    var arr = str[i].toLowerCase();
    arr = arr.split("");
    arr[0] = arr[0].toUpperCase();
    str[i] = arr.join("");
  }

  return str.join(" ");
}
