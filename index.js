const input_arr = [10,25,20,35,30];

/** Question 1: write a function in JavaScript to calculate the cumulative sum of an array. */
const cumulative_sum = (arr) => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num],[]);

// console.log(`Output--> ${cumulative_sum(input_arr)}`);


/** Question 2: write a function in JavaScript to split an array into chunks of a specified size. */ 
const chunkArray = (input_arr, size) => Array.from({length: Math.ceil(input_arr.length/size)}, (_, i) => input_arr.slice(i * size, i * size + size));

// console.log(chunkArray(input_arr, 2));
