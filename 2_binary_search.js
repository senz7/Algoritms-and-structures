const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    middle = Math.floor(start + end) / 2;
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(array, 14));
console.log(count);

function recursiveBinartSearch(array, item, start, end) {
  let middle = Math.floor(start + end / 2);
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinartSearch(array, item, start, middle - 1);
  } else {
    return recursiveBinartSearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinartSearch(array, 12, 0, array.length));
