"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// equality and inequality with strings
console.log("Equality Test 1: Is 'apple' equal to 'apple'? Prediction: True");
console.log('apple' == 'apple');
console.log("Equality Test 2: Is 'fruit' not equal to 'fruit'? Prediction: False");
console.log('fruit' != 'fruit');
// using the lower case function
console.log("Lowercase Test 1: Is 'HELLO' equal to 'hello'? Prediction: True");
console.log('Hello' == 'hello');
console.log("Lowercase Test 2: Is 'WORLD' equal to 'world' after converting to lowercase? Prediction: False");
console.log('WORLD'.toLowerCase() == 'world');
// Numerical tests
console.log("Numerical Test 1: Is 5 greater than 3? Prediction: True");
console.log(5 > 3);
console.log("Numerical Test 2: Is 10 less than or equal to 8? Prediction: False");
console.log(10 <= 8);
// Tests using "and" and "or" operators
console.log("Logical Test 1: Is 6 greater than 4 and less than 10? Prediction: True");
console.log(6 > 4 && 6 < 10);
console.log("Logical Test 2: Is 7 less than 5 or greater than 10? Prediction: True");
console.log(7 < 5 || 7 > 10);
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Array Test 1: Is 'banana' in the array? Prediction: True");
console.log(fruits.includes('banana'));
console.log("Array Test 2: Is 'apple' not in the array? Prediction: False");
console.log(!fruits.includes('apple'));
