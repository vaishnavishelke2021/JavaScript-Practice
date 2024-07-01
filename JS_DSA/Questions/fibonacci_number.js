// fibonacci number
// 0 1 1 2 3 5

function fibonacci(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;

  let prev = 0;
  let curr = 1;
  let next;
  for (let i = 2; i <= num; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return next;
}

console.log(fibonacci(5));
console.log(fibonacci(10));
