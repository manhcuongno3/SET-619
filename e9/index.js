// Nhập một chuỗi ký tự hoặc dãy số:
// a) Tìm dãy con tăng/giảm dài nhất.
// b) Sắp xếp ký tự theo thứ tự tăng/giảm và in ra.

function findLongestSubsequence(arr, type) {
  let maxLength = 1;       
  let currentLength = 1;   
  let maxSubsequence = arr[0]; 
  let currentSubsequence = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
      if (type === "tăng" && arr[i] > arr[i - 1]) {
          currentLength++;
          currentSubsequence += arr[i];
      } else if (type === "giảm" && arr[i] < arr[i - 1]) {
          currentLength++;
          currentSubsequence += arr[i];
      } else {
          if (currentLength > maxLength) {
              maxLength = currentLength;
              maxSubsequence = currentSubsequence;
          }
          currentLength = 1;
          currentSubsequence = arr[i];
      }
  }

  if (currentLength > maxLength) {
      maxLength = currentLength;
      maxSubsequence = currentSubsequence;
  }

  return maxSubsequence;
}

function sortString(str, type) {
  let arr = str.split('');
  let n = arr.length;

  for (let i = 0; i < n; i++) {
      let minMaxIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (type === "tăng") {
              if (arr[j] < arr[minMaxIndex]) {
                  minMaxIndex = j;
              }
          } else {
              if (arr[j] > arr[minMaxIndex]) {
                  minMaxIndex = j;
              }
          }
      }

      let temp = arr[i];
      arr[i] = arr[minMaxIndex];
      arr[minMaxIndex] = temp;
  }

  return arr.join('');
}