// 🟢Easy
// Print All Elements
// Write a function that takes an array of numbers and logs each element to the console.
let printArray = [1,2,3,4,5,6,7];
printArray.forEach(function(val){
    console.log(val);
});


// Sum of Elements
// Create a function that returns the sum of all numbers in an array.
let sum = printArray.reduce(function(accumulator, val){
    return accumulator+ val;
    
},0);
console.log(sum);

// Find Maximum Number
// Write a function that returns the maximum number in an array.
let unsortedArray =[2,15,0,98,67,3,-1];

let sortedArray = unsortedArray.sort(function(a,b){
    return a-b;  
});
let lastElement = sortedArray[sortedArray.length -1]

console.log(lastElement);

// 🟡 Medium
// Remove Duplicates
// Given an array, return a new array with duplicate values removed.
// Example: [1,2,2,3] → [1,2,3]
let duplArray = [1, 2, 2, 3, 3, 4, 6, 7, 8, 8, 9, 10, 1, 11, 3, 0];
let uniqArray = [];

for (let item of duplArray) {
  // If the unique array does NOT already include the item...
  if (!uniqArray.includes(item)) {
    uniqArray.push(item);
  }
}
console.log(uniqArray);
let uniqSorted = uniqArray.sort((a,b) => {
    return a-b;
});
console.log(uniqSorted);


// Reverse an Array
// Write a function that takes an array and returns a new array with the elements in reverse order.
let reverseArray = function(Array){
  let r = Array.reverse();
  console.log(r);
}
reverseArray(printArray);

// Count Occurrences
// Given an array of strings, return an object that shows how many times each string appears.
// Example: ['apple','banana','apple'] → { apple: 2, banana: 1 }
let fruits =['apple','banana','apple'];
let count = {};
for(let fruit of fruits){
  if(count[fruit]){
    count[fruit] +=1;
  }else{
    count[fruit] =1;
  }

}
console.log(count);

// 🔴 Hard
// Flatten a Nested Array
// Write a function that flattens a nested array of any depth.
// Example: [1, [2, [3, [4]]]] → [1, 2, 3, 4]
let nestedArray =  [1, [2, [3, [4]]]];
let flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray);

// Find Pair with Target Sum
// Given an array of numbers and a target sum, return the indices of two numbers that add up to the target.
// Example: [2, 7, 11, 15], target = 9 → [0, 1]

function findPair(nums,target){
  for(let i=0; i<nums.length;i++){
  for(let k=1; k<nums.length; k++){
    if (nums[i]+ nums[k]==target){
      console.log(i,k);
}
  }
}
}
findPair([2, 7, 11, 15],9);


// Group Elements by Type
// Create a function that groups elements of different types into separate arrays.
// Example: [1, 'a', true, 2, 'b'] → { number: [1,2], string: ['a','b'], boolean: [true] }
 function groupByType(arr) {
  const grouped = {};

  for (let item of arr) {
    const type = typeof item;

    if (!grouped[type]) {
      grouped[type] = [];
    }

    grouped[type].push(item);
  }

  return grouped;
}
let gr = groupByType([1, 'a', true, 2, 'b']);
console.log(gr);

// Rotate an Array (in-place)
// Write a function to rotate an array to the right by k steps without using extra space.
// Example: [1,2,3,4,5], k=2 → [4,5,1,2,3]
function rotateArray(array, k) {
  k = k % array.length; // handles cases where k > array length

  reverse(array, 0, array.length - 1);
  reverse(array, 0, k - 1);
  reverse(array, k, array.length - 1);
}

function reverse(array, start, end) {
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]]; // swap
    start++;
    end--;
  }
}
const array = [1, 2, 3, 4, 5];
rotateArray(array, 2);
console.log(array); 
