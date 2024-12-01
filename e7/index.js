// Nhập một số nguyên dương n, in ra n số đầu tiên của dãy Fibonacci
function printFibonacci(n) {
  if (n <= 0) {
      console.log("n phải là số nguyên dương!");
      return;
  }
  
  let a = 0, b = 1;
  
  console.log(a);
  
  if (n > 1) {
      console.log(b);
  }
  
  for (let i = 2; i < n; i++) {
      let nextTerm = a + b;
      console.log(nextTerm);
      a = b;
      b = nextTerm;
  }
}