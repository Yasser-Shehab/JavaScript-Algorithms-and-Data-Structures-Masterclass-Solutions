function validAnagram(string1, string2) {
  // add whatever parameters you deem necessary - good luck!
  if (string1.length !== string2.length) {
    return false;
  }
  let stringTwoObject = {};
  for (let letter of string2) {
    if (!stringTwoObject[letter]) {
      stringTwoObject[letter] = 1;
    } else {
      stringTwoObject[letter] += 1;
    }
  }
  for (let letter of string1) {
    if (stringTwoObject[letter] && stringTwoObject[letter] !== 0) {
      stringTwoObject[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("texttwisttime", "timetwisttext"));
