let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102);
console.log(arr);

let arr_ = [11, 12, 13, 14, 15, 16, 17];
arr_.splice(2, 0, 201, 202);
console.log(arr_);

let array = [21, 22, 23, 24, 25, 26, 27];
array.splice(3, 1);
console.log(array);

let arra = [31, 32, 33, 34, 35, 36, 37];
arra.splice(4);
console.log(arra);

/*
Code Analysis:

Part 1: Modifying arr
Initial Array: [1, 2, 3, 4, 5, 6, 7]
splice(2, 2, 101, 102) Explanation:
2: Start at index 2 (the third element, 3).
2: Remove 2 elements (3 and 4).
101, 102: Insert these two values at the same position.
Modified Array: [1, 2, 101, 102, 5, 6, 7]

Part 2: Modifying arr_
Initial Array: [11, 12, 13, 14, 15, 16, 17]
splice(2, 0, 201, 202) Explanation:
2: Start at index 2 (the third element, 13).
0: Remove 0 elements (nothing is removed).
201, 202: Insert these two values at index 2.
Modified Array: [11, 12, 201, 202, 13, 14, 15, 16, 17]

Part 3: Modifying array
Initial Array: [21, 22, 23, 24, 25, 26, 27]
splice(3, 1) Explanation:
3: Start at index 3 (the fourth element, 24).
1: Remove 1 element starting from index 3.
Modified Array: [21, 22, 23, 25, 26, 27]

Part 4: Modifying arra
Initial Array: [31, 32, 33, 34, 35, 36, 37]
splice(4) Explanation:
4: Start at index 4 (the fifth element, 35).
No second parameter is provided, so all elements starting from index 4 to the end of the array are removed.
Modified Array: [31, 32, 33, 34]
*/