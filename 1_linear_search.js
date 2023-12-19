const array = [1, 4, 5, 8, 2, 1, 6, 11, 7, 2];

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
    return null;
  }
}
console.log(linearSearch(array, 8));
