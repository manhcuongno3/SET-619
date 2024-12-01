// Nhập một chuỗi ký tự:
// a) Đảo ngược chuỗi.
// b) Xóa khoảng trắng trong chuỗi.
// c) Kiểm tra chuỗi đối xứng.
// d) Tìm dãy con đối xứng dài nhất.

function reverseString(string) {
  if (string === "") {
      console.log("Chuỗi rỗng!");
      return;
  }

  let reversed = "";
  let i = string.length - 1;

  while (i >= 0) {
      reversed += string[i];
      i--;
  }

  console.log("Chuỗi đảo ngược là:", reversed);
}

function removeSpaces(string) {
  if (string === "") {
      console.log("Chuỗi rỗng!");
      return;
  }

  let stringWithoutSpaces = "";
  
  for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
          stringWithoutSpaces += string[i]
      }
  }

  console.log("Chuỗi sau khi xóa khoảng trắng là:", stringWithoutSpaces);
}

function isPalindrome(string) {
  if (string === "") {
      console.log("Chuỗi rỗng!");
      return;
  }

  let i = 0;
  let j = string.length - 1;

  while (i < j) {
      if (string[i] !== string[j]) {
          console.log("Chuỗi không phải là chuỗi đối xứng!");
          return;
      }
      i++;
      j--;
  }

  console.log("Chuỗi là chuỗi đối xứng!");
}

function findLongestPalindromeSubstring(string) {
  if (string === "") {
      console.log("Chuỗi rỗng!");
      return;
  }

  let maxLength = 1;
  let maxSubstring = string[0];

  for (let i = 0; i < string.length; i++) {
      for (let j = string.length - 1; j >= i; j--) {
          const substring = string.slice(i, j + 1);
          if (isPalindrome(substring) && (j - i + 1) > maxLength) {
              maxLength = j - i + 1;
              maxSubstring = substring;
          }
      }
  }

  console.log("Dãy con đối xứng dài nhất là:", maxSubstring);
}