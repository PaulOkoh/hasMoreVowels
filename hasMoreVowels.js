// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
// // true

// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         vowelsCount++;
//       }
//     }
//   }

//   return vowelsCount > str.length / 2;
// }

// console.log(getCount("graph"));

function getCount(word) {
  word = word.toLowerCase();
  let vowelCount = 0;
  for (letter in word) {
    switch (word[letter]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelCount++;
        break;
    }
  }

  return vowelCount > word.length / 2;
}

console.log(getCount("moose"));
console.log(getCount("mice"));
console.log(getCount("graph"));
console.log(getCount("yay"));
console.log(getCount("Aal"));
