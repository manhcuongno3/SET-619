// Nhập một số nguyên dương n (n<1000)

// a) Tính và in ra tổng từ 1 đến n.

// b) Tính tổng các ước số của n.

// c) Tính tổng các chữ số của n.

// d) Tìm chữ số lớn nhất của n.

function sumUpToN(n) {
  if (n < 1 || n >= 1000) {
      console.error("n phải là số nguyên dương nhỏ hơn 1000");
      return;
  }

  let total = 0;
  for (let i = 1; i <= n; i++) {
      total += i;
  }

  console.log(`Tổng từ 1 đến ${n} là: ${total}`);
  return total;
}

function sumOfDivisors(n) {
  if (n < 1 || n >= 1000) {
      console.error("n phải là số nguyên dương nhỏ hơn 1000");
      return;
  }

  let total = 0;

  for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
          total += i;
      }
  }

  console.log(`Tổng các ước số của ${n} là: ${total}`);
  return total;
}

function sumOfDigits(n) {
  if (n < 1 || n >= 1000) {
      console.error("n phải là số nguyên dương nhỏ hơn 1000");
      return;
  }

  let total = 0;

  while (n > 0) {
      let digit = n % 10;
      total += digit;
      n = Math.floor(n / 10);
  }

  console.log(`Tổng các chữ số của số đã nhập là: ${total}`);
  return total;
}

function largestDigit(n) {
  if (n < 1 || n >= 1000) {
      console.error("n phải là số nguyên dương nhỏ hơn 1000");
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

  console.log(`Chữ số lớn nhất của số đã nhập là: ${maxDigit}`);
  return maxDigit;
}