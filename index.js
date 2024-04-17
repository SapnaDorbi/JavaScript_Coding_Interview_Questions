// Question 1: write a function in JavaScript to calculate the cumulative sum of an array?

const input_arr = [10,25,20,35,30];
const cumulative_sum = (arr) => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num],[]);

console.log(`Output--> ${cumulative_sum(input_arr)}`);