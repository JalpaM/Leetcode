// Input: 10
// Output: {count: 4, primes[2, 3, 5, 7]}
function primeNumbers(n) {
  let count = 0;
  let primes = [];

  for(let i = 2; i < n; i++) {
    let flag = true;

    // 2 is prime so increase count
    if(i === 2) {
      count++;
      primes.push(i);
      continue;
    }

    for(let j = 2; j <= i - 1; j++) {
      if(i % j === 0) {
        flag = false;
        break;
      }
    }

    if(flag) {
      count++;
      primes.push(i);
    }
  }

  return {count, primes};
}
