function getIndexToIns(arr, num) {
  var arr2 = arr.sort(function(a, b){
    return a-b;
  });
  console.log(arr2);

  for (var i=0;i<arr2.length;i++){
    if (num<=arr2[i]){
      return i;
    }
    else if (num>=arr2[arr2.length-1]){
      return arr2.length;
    }
  }
}
