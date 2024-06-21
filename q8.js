// 練習八：回傳陣列裡面所有小於 n 的數的總和
// 請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。

// findSmallerTotal([1, 2, 3], 3) 正確回傳值：3

// findSmallerTotal([1, 2, 3], 1) 正確回傳值：0

// findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值：25

// findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值：0

function findSmallerTotal(array, n) {
  countSum = 0;
  for(let i = 0; i <= array.length -1; i++) {
    if(array[i] < n) {
      countSum = countSum + array[i];
    }
  }
  return countSum;
}

// const result = findSmallerTotal([1, 2, 3], 3);
// const result = findSmallerTotal([1, 2, 3], 1);
// const result = findSmallerTotal([3, 2, 5, 8, 7], 999);
const result = findSmallerTotal([3, 2, 5, 8, 7], 0);

console.log(result);