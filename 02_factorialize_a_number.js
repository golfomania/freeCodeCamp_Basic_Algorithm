//function to factorialize a number e.g. 5! = 5*4*3*2*1
function factorialize(num) {
    //check if given number is zero, then the answer is set to 1
    if (num == 0 ){
    return 1;
    }

    //all other numbers where calculated using a for loop
    //taking care not to decrease till zero
    else{
    var result = num;
        for (var i=num; i>1;i--){
        result *= (i-1);
        }
    return result;
    }
}
