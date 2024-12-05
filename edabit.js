function isSymmetrical(num) {
  // Convert the number to a string
  const strNum = num.toString();
  // Reverse the string and compare it to the original
  return strNum === strNum.split("").reverse().join("");
}

// Examples
console.log(isSymmetrical(121)); // true
console.log(isSymmetrical(123)); // false
console.log(isSymmetrical(1221)); // true
console.log(isSymmetrical(456)); // false
