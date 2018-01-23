function largestOfFour(arr) {

  for (var i= 0; i<arr.length; i++){
    var calc = arr[i];
    calc = calc.sort(function(a,b){
      return b-a;
    });
    arr[i] = calc[0];
  }
  return arr;
}
