// find missing number
// return the only num in the range that is missing from the array
// [3,0,1] => missing from [0,3]=> 2

function missingNumber(arr) {
  let n = arr.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([1, 3, 0]));
