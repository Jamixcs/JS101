//練習五：判斷大小寫 
// 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。

// isUpperCase("abcd") 正確回傳值：false

// isUpperCase("Abcd") 正確回傳值：true

// isUpperCase("ABCD") 正確回傳值：true

// isUpperCase("aBCD") 正確回傳值：false

function isUpperCase(string) {
  const array = string.split('');
  if(array[0] >= 'A' && array[0] <= 'Z'){
    return true;
  } else {
    return false;
  }
}

const result = isUpperCase('abcd');
// const result = isUpperCase("Abcd");
// const result = isUpperCase("ABCD");
// const result = isUpperCase("aBCD");

console.log(result);