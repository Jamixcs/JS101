// 練習十：回傳陣列總和
// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

// sum([1, 2, 3]) 預期回傳值：6

// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0

function sum(array) {
  let count = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    count = count + array[i];
  }
  return count;
}

// const result = sum([1, 2, 3]);
const result = sum([-1, 1, 2, -2, 3, -3]);

console.log(result);