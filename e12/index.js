// Nhập một mảng 2 chiều số nguyên:
// a) Tìm số lớn nhất trong mảng.
// b) Tìm số nhỏ nhất trong mảng.
// c) Tính tổng các phần tử trên hàng hoặc cột thứ k.
// d) Tìm và in ra tất cả các số nguyên tố trong mảng.

function findMaxIn2DArray(n) {
  let max = n[0][0];
  let i = 0;
  let j = 0;

  while (i < n.length) {
      while (j < n[i].length) {
          if (n[i][j] > max) {
              max = n[i][j];
          }
          j++;  
      }
      j = 0;
      i++;    
  }

  return max;
}

function findMinIn2DArray(n) {
  let min = n[0][0];
  let i = 0;
  let j = 0;

  while (i < n.length) {
      while (j < n[i].length) {
          if (n[i][j] < min) {
              min = n[i][j];
          }
          j++;  
      }
      j = 0;
      i++;    
  }

  return min;
}

function sumRowOrColumn(n, k, type) {
  let sum = 0;

  if (type === 'row') {
      for (let i = 0; i < n[k].length; i++) {
          sum += n[k][i];
      }
  }
  else if (type === 'column') {
      for (let i = 0; i < n.length; i++) {
          sum += n[i][k];
      }
  }

  return sum;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function findPrimesIn2DArray(n) {
  let primes = [];
  let i = 0;
  let j = 0;

  while (i < n.length) {
      while (j < n[i].length) {
          let num = n[i][j];
          if (isPrime(num)) {
              primes.push(num);
          }
          j++;
      }
      j = 0;
      i++;
  }

  return primes;
}