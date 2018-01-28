function destroyer() {
  var arr2 = arguments[0];

  for (var i=1;i<arguments.length;i++){
    arr2 = arr2.filter(word => word !== arguments[i]);
  }
  return arr2;
}
