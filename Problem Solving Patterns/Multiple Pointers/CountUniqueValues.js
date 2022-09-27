//Solution Using While loop
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
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

  return first + 1;
}

function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([]));
