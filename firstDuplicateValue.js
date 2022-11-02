// Given an array of integers between *1* and *n*, inclusive, where *n* is the
// length of the array, write a function that returns the first integer that
// appears more than once (When the array is read from left to right).

// In other words, out of all the integers that might occur more than once in the
// input array, your function should return the one whose first duplicate value has
// the minimum index.

// If no integer appears more than once, your function should return *-1*.

// Note that you're allowed to mutate the input array.

// Sample input #1:
// array = [2, 1, 5, 2, 3, 3, 4]

// Sample output #1:
// 2
// (2 is the first integer that appears more than once. 3 also appears more than
// once, but the second 3 appears after the second 2 does.)

// Sample input #2:
// array = [2, 1, 5, 3, 3, 2, 4]

// Sample output #2:
// 3
// (3 is the first integer that appears more than once. 2 also appears more than
// once, but the second 2 appears after the second 3 does.)

//naive approach: We can loop through the array and by using a hash table, we can
//check if the value at current index is in the hash map. It is isn't, we can add
//it as a key and increment it's value by 1. If it IS in the hash map, we've found
//our solution and we can just return that number. We also need to write in the
//conditional that if no duplicates are found in the array OR if the array's length
//is less than 2, we return -1.

//After reviewing my approach, using a set while still using the same approach is
//the most efficient way to solve this problem. By using a set, we can just check
//at every value of the array whether the number exists in the set. If it does, we
//just return that value. If it doesn't, we add that value to the set. If none are
//found to exist as duplicates in the set before the loop is completed, we just
//return -1.

//Time complexity: As mentioned above, using a loop and a set we are able to
//optimize our solution down to O(n) runtime, where *n* is the length of the input
//array.

//Space complexity:  The set allows us to, worst case scenario, use O(n) space
//if we loop through the entire array and there are no duplicates. However, to
//look and return a value from the set requires just O(1) constant space.

//O(n) time | O(n) space complexity
function firstDuplicateValue(array) {
  // Write your code here.
  const seenNumbers = new Set();
  for (const value of array) {
    if (seenNumbers.has(value)) return value;
    seenNumbers.add(value);
  }
  return -1;
}
