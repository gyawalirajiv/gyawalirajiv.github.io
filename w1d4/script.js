// 1. Create Array empty/some elements
let arr1 = [];
let arr2 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(arr2);

// 2. Update Array - change the value of element at nth position,
arr2[3] = "new value";
console.log(arr2);

// 3. Delete Item - remove the element at nth position
arr2.splice(3, 1);
console.log(arr2);

// 4. Delete Array/Empty Array/Copy Array/Clone Array( Both arrays
    // should be changed independently without changing the Others)
let arr3 = arr2.slice(); //COPY ARRAY
arr3 = []; // EMPTY ARRAY
console.log(arr2, arr3);
arr3 = null; // DELETE ARRAY
arr3 = [...arr2]; //CLONE ARRAY
console.log(arr2, arr3);

// 5. Get subset of array
let arr4 = arr2.slice(1, 3);
console.log(arr2, arr4);

// 6. Length of array
console.log(arr2.length)

// 7. Splice/slice/concat
console.log(arr4.splice(1, 1)); //SPLICE
let arr5 = arr2.slice(1, 3); //SLICE
console.log(arr5);
arr2.concat(arr5); //CONCAT
console.log(arr2.concat(arr5));