/*


console.log(mergeList([2, 14, 99, 100], [1, 10, 50]));

*/

function mergeList(list1, list2) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      result.push(list1[i]);
      i++;
    } else {
      result.push(list2[j]);
      j++;
    }
  }

  if (i === list1.length) {
    for (j; j < list2.length; j++) {
      result.push(list2[j]);
    }
  } else {
    for (i; i < list1.length; i++) {
      result.push(list1[i]);
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  console.log(left, right);

  return mergeList(left, right);
}

console.log(mergeSort([3, 5, 1, 4, 2]));
