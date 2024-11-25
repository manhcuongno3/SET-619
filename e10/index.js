// Nhập hai số nguyên dương a và b:
// a) Tìm ước chung lớn nhất.
// b) Tìm bội chung nhỏ nhất.

function findGCD(a, b) {
  while (b !== 0) {
      let temp = a % b;
      a = b;
      b = temp;
  }
  return a;
}

function findLCM(a, b) {
  const gcd = findGCD(a, b);
  return Math.abs(a * b) / gcd;
}