function pivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[end];
  let i = start;
  let j = end - 1;
  // console.log("Start : ", arr[i], arr[j], i, j);

  while (i <= j) {
    // console.log("looping", i, j);
    if (arr[i] < pivot) {
      i++;
    } else {
      while (j >= i && arr[j] >= pivot) {
        j--;
      }
      // console.log("arr of j is ", arr[j]);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
      // console.log(arr[i], pivot, "ayouaoudfajkl");
    }
  }
  [arr[i], arr[end]] = [arr[end], arr[i]];
  // console.log(arr, "pivot is :", pivot);
  console.log(arr, "pivot", pivot);
  return i;
}
// console.log(pivot([5, 4, 9, 8, 6, 0, -3, 2, 7]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log("answer ", quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
