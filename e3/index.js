// Nhập một số nguyên dương n:
// a) Kiểm tra n có phải là số nguyên tố.
// b) Kiểm tra n có phải là số hoàn hảo.
// c) Kiểm tra n có phải là số chính phương.
// d) In ra tất cả các số nguyên tố nhỏ hơn hoặc bằng n.

function isPrime(n) {
  if (n <= 1) {
      return false;
  }

  let i = 2;
  while (i <= Math.sqrt(n)) {
      if (n % i === 0) {
          return false;
      }
      i++;
  }

  return true;
}

function isPerfectNumber(n) {
  if (n <= 1) {
      console.log("n phải là số nguyên dương lớn hơn 1");
      return false;
  }

  let sum = 0;
  let i = 1;

  while (i < n) {
      if (n % i === 0) {
          sum += i;
      }
      i++;
  }

  if (sum === n) {
      console.log("n là số hoàn hảo");
      return true;
  } else {
      console.log("n không phải là số hoàn hảo");
      return false;
  }
}

function isPerfectSquareNumber(n) {
  if (n <= 0) {
      console.log("n phải là số nguyên dương");
      return false;
  }

  const sqrtN = Math.sqrt(n);

  if (Math.floor(sqrtN) ** 2 === n) {
      console.log("n là số chính phương");
      return true;
  } else {
      console.log("n không phải là số chính phương");
      return false;
  }
}

function printPrimesUpToN(n) {
    if (n <= 1) {
        console.log("n phải là số nguyên dương lớn hơn 1");
        return;
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

