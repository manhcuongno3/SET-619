// Nhập một chuỗi ký tự:
// a) Đếm số nguyên âm.
// b) Đếm số lần xuất hiện của một ký tự.
// c) Tìm ký tự xuất hiện nhiều nhất.

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
          count++;
      }
  }
  
  return count;
}

function countCharOccurrences(str, char) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
          count++;
      }
  }
  
  return count;
}

function findMostFrequentChar(str) {
  let maxCount = 0;
  let maxChar = '';
  
  for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
      
      let count = countCharOccurrences(str, currentChar);
      
      if (count > maxCount) {
          maxCount = count;
          maxChar = currentChar;
      }
  }
  
  return maxChar;
}