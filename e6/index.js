// Nhập một số nguyên dương n:
// a) Tính và in ra giai thừa của n.
// b) Tính và in ra tổng các chữ số của n.

function factorial(n) {
  if (n <= 0) {
      console.log("n phải là số nguyên dương!");
      return;
  }
  
  let result = 1;
  let i = 1;
  
  while (i <= n) {
      result *= i;
      i++;
  }
  
  return result;
}

function sumOfDigits(n) {
  if (n <= 0) {
      console.log("n phải là số nguyên dương!");
      return;
  }
  
  let sum = 0;
  
  while (n > 0) {
      sum += n % 10; 
      n = Math.floor(n / 10);
  }
  
  return sum;
}