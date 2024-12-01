// Nhập một dãy số nguyên dương n (n > 100000) vd 123123123
// ' a) Tìm và in ra số lớn nhất.
// ' b) Tìm và in ra số lớn thứ hai.
// ' c) Tìm và in ra số nhỏ nhất.
// ' d) Tìm và in ra tất cả các số nguyên tố trong dãy.

function findLargestDigit(n) {
  if (n <= 100000) {
      console.error("n phải là số nguyên dương lớn hơn 100000");
      return;
  }

  let maxDigit = 0;

  while (n > 0) {
      let digit = n % 10;
      if (digit > maxDigit) {
          maxDigit = digit;
      }
      n = Math.floor(n / 10);
  }

  console.log(`Chữ số lớn nhất của dãy số đã nhập là: ${maxDigit}`);
  return maxDigit;
}

function findSecondLargestDigit(n) {
  if (n <= 100000) {
      console.error("n phải là số nguyên dương lớn hơn 100000");
      return;
  }

  let maxDigit = 0;
  let secondMaxDigit = 0;

  while (n > 0) {
      let digit = n % 10;
      if (digit > maxDigit) {
          secondMaxDigit = maxDigit;
          maxDigit = digit;
      } else if (digit > secondMaxDigit && digit < maxDigit) { // Nếu lớn hơn secondMaxDigit nhưng nhỏ hơn maxDigit
          secondMaxDigit = digit;
      }
      n = Math.floor(n / 10);
  }

  if (secondMaxDigit === 0) {
      console.log("Không có số lớn thứ hai.");
  } else {
      console.log(`Số lớn thứ hai của dãy số đã nhập là: ${secondMaxDigit}`);
  }
  return secondMaxDigit;
}

function findSmallestDigit(n) {
    if (n <= 100000) {
        console.error("n phải là số nguyên dương lớn hơn 100000");
        return;
    }

    let minDigit = 9;

    while (n > 0) {
        let digit = n % 10;
        if (digit < minDigit) {
            minDigit = digit;
        }
        n = Math.floor(n / 10);
    }

    console.log(`Số nhỏ nhất của dãy số đã nhập là: ${minDigit}`);
    return minDigit;
}

function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeDigits(n) {
    if (n <= 100000) {
        console.error("n phải là số nguyên dương lớn hơn 100000");
        return;
    }

    let primeNumbers = [];

    while (n > 0) {
        let digit = n % 10;
        if (digit > 1 && isPrime(digit)) {
            primeNumbers.push(digit);
        }
        n = Math.floor(n / 10);
    }

    if (primeNumbers.length === 0) {
        console.log("Không có số nguyên tố trong dãy số.");
    } else {
        console.log(`Các số nguyên tố trong dãy số đã nhập là: ${primeNumbers.join(', ')}`);
    }

    return primeNumbers;
}
