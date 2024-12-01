// Nhập một chuỗi ký tự:
// a) Đảo ngược chuỗi.
// b) Xóa khoảng trắng trong chuỗi.
// c) Kiểm tra chuỗi đối xứng.
// d) Tìm dãy con đối xứng dài nhất.

function reverseString(str) {
  if (str === "") {
      console.log("Chuỗi rỗng!");
      return;
  }

  let reversed = "";
  let i = str.length - 1;

  while (i >= 0) {
      reversed += str[i];
      i--;
  }

  console.log("Chuỗi đảo ngược là:", reversed);
}

function removeSpaces(str) {
  if (str === "") {
      console.log("Chuỗi rỗng!");
      return;
  }

  let strWithoutSpaces = "";
  
  for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
          strWithoutSpaces += str[i]
      }
  }

  console.log("Chuỗi sau khi xóa khoảng trắng là:", strWithoutSpaces);
}

function isPalindrome(str) {
  if (str === "") {
      console.log("Chuỗi rỗng!");
      return;
  }

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
      if (str[i] !== str[j]) {
          console.log("Chuỗi không phải là chuỗi đối xứng!");
          return;
      }
      i++;
      j--;
  }

  console.log("Chuỗi là chuỗi đối xứng!");
}

function findLongestPalindromeSubstring(str) {
  if (str === "") {
      console.log("Chuỗi rỗng!");
      return;
  }

  let maxLength = 1;
  let maxSubstring = str[0];

  for (let i = 0; i < str.length; i++) {
      for (let j = str.length - 1; j >= i; j--) {
          const substring = str.slice(i, j + 1);
          if (isPalindrome(substring) && (j - i + 1) > maxLength) {
              maxLength = j - i + 1;
              maxSubstring = substring;
          }
      }
  }

  console.log("Dãy con đối xứng dài nhất là:", maxSubstring);
}