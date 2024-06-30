// sum of digits of a number 
// num : 1247 , divide by 10
//     => remainder : 7+4+2+1 

function fun(num){
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(fun(1247))