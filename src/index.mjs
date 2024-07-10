// 😁😁 generate all combinations 😁😁 ⭐️
// let combinationsRecursive = (str, index = 0, current = "") => {
//   if (index === str.length) {
//     console.log(current); // Output each combination
//     return;
//   }

//   // Include the character at the current index
//   combinationsRecursive(str, index + 1, current + str[index]);

//   // Exclude the character at the current index
//   combinationsRecursive(str, index + 1, current);
// };

// console.log(combinationsRecursive("dog"));

// 😁😁 STRING IS A PALINDROME 😁😁
// function isPalindrome(str) {
//   // Convert the string to lowercase and remove all non-alphanumeric characters
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   let left = 0;
//   let right = cleanedStr.length - 1;

//   while (left < right) {
//     // Compare characters at left and right pointers
//     if (cleanedStr[left] !== cleanedStr[right]) {
//       console.log(
//         `Mismatch found: ${cleanedStr[left]} !== ${cleanedStr[right]}`,
//       );
//       return false;
//     }
//     // Move pointers towards each other
//     left++;
//     right--;
//   }

//   // If we complete the loop without finding mismatches, it's a palindrome
//   return true;
// }

// // Test cases
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("No 'x' in Nixon")); // true

// 😁😁 FIND THE LARGEST WORD 😁😁
// function longest(str) {
//   // Split the string into array
//   str = str.split(" ");

//   // Get the index of largest item of the array
//   let index = str.reduce((acc, curr, i) => {
//     console.log(curr, "::: curr");
//     console.log(i, "::::: iiii");
//     console.log(acc, "::::: acc");
//     if (curr.length > str[acc].length) {
//       return i;
//     }
//     return acc;
//   }, 0);

//   return str[index];
// }

// console.log(
//   longest(
//     "Hello guys this is geeksforgeeks" + " where students learn programming",
//   ),
// );

// 😁😁 FIND THE UNIQUE CHARACTERS IN STRING 😁😁
// const findUniqureChar = (str) => {
//   const toArr = str.split("");
//   const uniqureSet = new Set(toArr);

//   return [...uniqureSet].join("");
// };

// console.log(findUniqureChar("Geeksforgeeks"));
// console.log(findUniqureChar("Geeksforgeeks Is a great site"));

// function findUnique(str) {
//   let unique = {};
//   for (let char of str) {
//       unique[char] = true;
//   }
//   return Object.keys(unique).join('');
// }

// console.log(findUnique("Geeksforgeeks"));
// console.log(findUnique("Geeksforgeeks is a great site"));

// 😁😁 convert long number into abbreviated string 😁😁
// function abbreviateNumber(number) {
//   if (number === null || number === undefined) return null;

//   // Handle zero
//   if (number === 0) return "0";

//   // Handle negative numbers
//   const isNegative = number < 0;
//   number = Math.abs(number);

//   // Define the units
//   const units = ["", "k", "M", "B", "T"];
//   const unit = Math.floor((number.toString().length - 1) / 3);
//   const abbreviatedNumber = (number / Math.pow(1000, unit)).toFixed(2);

//   console.log(abbreviatedNumber, "::: abbreviatedNumber");

//   return `${isNegative ? "-" : ""}${abbreviatedNumber}${units[unit]}`;
// }

// // Test cases
// console.log(abbreviateNumber(1234)); // Output: 1.23k
// console.log(abbreviateNumber(1234567)); // Output: 1.23M
// console.log(abbreviateNumber(1234567890)); // Output: 1.23B
// console.log(abbreviateNumber(1234567890123)); // Output: 1.23T
// console.log(abbreviateNumber(-1234)); // Output: -1.23k
// console.log(abbreviateNumber(0)); // Output: 0
