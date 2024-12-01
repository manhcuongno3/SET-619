// Nhập hai số nguyên dương a và b:
// a) Tìm ước chung lớn nhất.
// b) Tìm bội chung nhỏ nhất.

function findGreatestCommonDivisor(a, b) {
  while (b !== 0) {
      let temp = a % b;
      a = b;
      b = temp;
  }
  return a;
}

function findLeastCommonMultiple(a, b) {
  const greatestCommonDivisor = findGreatestCommonDivisor(a, b);
  return Math.abs(a * b) / greatestCommonDivisor;
}