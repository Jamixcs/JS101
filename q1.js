// 練習一：印出一到九
// 請你分別用 for loop 以及 while 迴圈，印出 1~9。

// 預期輸出：

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
forLoopPrin1To9();

function forLoopPrin1To9() {
  for (let i = 1; i <= 9; i++) {
    console.log(i);
  }
};

whilePrint1To9();

function whilePrint1To9() {
  let i = 1;
  while (i <= 9) {
    console.log(i);
    i++;
  }
}

