function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  for (const letter of word.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word.toLowerCase() === reversed.toLowerCase();
}

const input = prompt("Enter a word:");
const numVowels = countVowels(input);
const palindrome = isPalindrome(input);

console.log(
  `${input} contains ${numVowels} vowels and is ${
    palindrome ? "" : "not "
  }a palindrome`
);
