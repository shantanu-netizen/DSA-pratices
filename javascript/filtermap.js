let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr1 = arr.map((i) => {
  return i * i;
});
console.log(arr1);
let arr2 = arr.filter((i) => {
  return i < 5;
});
console.log(arr2);
let arr3 = arr.filter((i) => {
  return i != 6;
});
console.log(arr3);
let arr4 = arr.filter((i) => {
  return i % 2 == 0;
});
console.log(arr4);
let arr5 = arr.filter((i) => {
  return i % 2 != 0;
});
console.log(arr5);