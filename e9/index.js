// Nhập một chuỗi ký tự hoặc dãy số:
// a) Tìm dãy con tăng/giảm dài nhất.
// b) Sắp xếp ký tự theo thứ tự tăng/giảm và in ra.

function findLongestSubsequence(array, type) {
  let maxLength = 1;       
  let currentLength = 1;   
  let maxSubsequence = array[0]; 
  let currentSubsequence = array[0];
  
  for (let i = 1; i < array.length; i++) {
      if (type === "incresase" && array[i] > array[i - 1]) {
          currentLength++;
          currentSubsequence += array[i];
      } else if (type === "decrease" && array[i] < array[i - 1]) {
          currentLength++;
          currentSubsequence += array[i];
      } else {
          if (currentLength > maxLength) {
              maxLength = currentLength;
              maxSubsequence = currentSubsequence;
          }
          currentLength = 1;
          currentSubsequence = array[i];
      }
  }

  if (currentLength > maxLength) {
      maxLength = currentLength;
      maxSubsequence = currentSubsequence;
  }

  return maxSubsequence;
}

function sortString(string, type) {
  let array = string.split('');
  let n = array.length;

  for (let i = 0; i < n; i++) {
      let minMaxIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (type === "incresase") {
              if (array[j] < array[minMaxIndex]) {
                  minMaxIndex = j;
              }
          } else {
              if (array[j] > array[minMaxIndex]) {
                  minMaxIndex = j;
              }
          }
      }

      let temp = array[i];
      array[i] = array[minMaxIndex];
      array[minMaxIndex] = temp;
  }

  return array.join('');
}