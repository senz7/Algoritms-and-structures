let array = [3, 1, 2, 55, 23, 11, 9, 5, 7, 7, 3, 2, -1, -5, 43];

function bubleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

console.log(bubleSort(array));
