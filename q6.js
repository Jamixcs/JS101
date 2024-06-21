// 練習六：回傳第一個大寫字母以及它的 index
// 請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。

// position("abcd") 正確回傳值：-1

// position("AbcD") 正確回傳值：A 0

// position("abCD") 正確回傳值：C 2

function position(string) {
  let array = string.split('');
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] >= 'A' && array[i] <= 'Z') {
      return `${array[i]} ${i}`;
    } 
  }
  return -1;  // 如果循环结束后没有找到大写字母，则返回 -1
}

const abcdResult = position("abcd");
const AbcdResult = position("AbcD");
const abCDResult = position("abCD");

console.log(abcdResult);
console.log(AbcdResult);
console.log(abCDResult);