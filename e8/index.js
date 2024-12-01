// Nhập một chuỗi ký tự:
// a) Đếm số nguyên âm.
// b) Đếm số lần xuất hiện của một ký tự.
// c) Tìm ký tự xuất hiện nhiều nhất.

function countVowels(string) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
      if (vowels.indexOf(string[i]) !== -1) {
          count++;
      }
  }
  
  return count;
}

function countCharOccurrences(string, character) {
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
          count++;
      }
  }
  
  return count;
}

function findMostFrequentChar(string) {
  let maxCount = 0;
  let maxChar = '';
  
  for (let i = 0; i < string.length; i++) {
      let currentChar = string[i];
      
      let count = countCharOccurrences(string, currentChar);
      
      if (count > maxCount) {
          maxCount = count;
          maxChar = currentChar;
      }
  }
  
  return maxChar;
}