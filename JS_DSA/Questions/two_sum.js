//? Given an array of numbers [2, 7, 11, 15] and a target sum 9, find the indices of the two numbers that add up to the target.
// input : [2,7,11,15]
// output : [0,1]

function twoSum(arr, target) {
  const numMap = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[arr[i]] = i;
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
