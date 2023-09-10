const arr = [8, 6, 9, 2, 4, 7];

const swap = function (num1, num2) {
  const temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
};

for (let i = arr.length; i > 0; i--) {
  for (let j = 0; j < i - 1; j++) {
    // console.log(j, j + 1);
    if (arr[j] > arr[j + 1]) swap(j, j + 1);
  }
}

console.log(`the sorted arr is : ${arr}`);
