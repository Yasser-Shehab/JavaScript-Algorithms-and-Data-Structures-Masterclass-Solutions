function countUniqueValues(arr) {
  let first = 0;
  let second = 1;

  while (second < arr.length) {
    if (arr[first] === arr[second]) {
      second++;
    } else if (arr[first] !== arr[second]) {
      first++;
      arr[first] = arr[second];
    }
  }

  if (arr.length === 0) {
    return first;
  }

  return first + 1;
}

console.log(countUniqueValues([]));
