function sameFrequency(num1, num2) {
  let numOneString = num1.toString();
  let numTwoString = num2.toString();
  if (numOneString.length !== numTwoString.length) {
    return false;
  }
  let lookup = {};
  for (let number of numTwoString) {
    if (!lookup[number]) {
      lookup[number] = 1;
    } else {
      lookup[number] += 1;
    }
  }

  for (let number of numOneString) {
    if (lookup[number] && lookup[number] !== 0) {
      lookup[number] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(34, 14));
