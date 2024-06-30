// count the number of digits in a number 
// 345 => 3 digits 

function fun(num){
    num = Math.abs(num);
    let count = 0;
    // ---------------do-while loop ----------------
    // do{
    //     count ++;
    //     num = Math.floor(num/10);
    // }while(num>0);
    // return count;

    // ---------------while loop ----------------
    while(num>0){
        count ++;
        num = Math.floor(num/10);
    }
    return count;
}

console.log(fun(345))