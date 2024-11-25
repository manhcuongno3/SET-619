// Nhập một mảng 1 chiều số nguyên n:
// a) Tìm vị trí của số lớn nhất.
// b) Tìm vị trí của số nhỏ nhất.
// c) Tìm và in ra tổng các phần tử trong mảng.

function findMaxPosition(n) {
  let max = n[0];
  let index = 0;
  let i = 1;

  while (i < n.length) {
    if (n[i] > max) {
      max = n[i];
      index = i;
    }
    i++;
  }
  return index;
}

function findMinPosition(n) {
  let min = n[0];
  let index = 0;
  let i = 1;

  while (i < n.length) {
    if (n[i] < min) {
      min = n[i];
      index = i;
    }
    i++;
  }
  return index;
}

function sumArray(n) {
  let sum = 0;
  let i = 0;

  while (i < n.length) {
      sum += n[i];
      i++;          
  }

  return sum;
}