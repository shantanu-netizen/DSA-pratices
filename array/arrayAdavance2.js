/*
//Left rotation by 1 element
let arr = [1, 2, 3, 4, 5]
let copy = arr[0]
for (let i = 0; i < arr.length - 1; i++){
    arr[i]=arr[i+1]
}
arr[arr.length - 1] = copy
console.log(arr)

//Right rotation
let arr = [1, 2, 3, 4, 5]
let copy = arr[arr.length-1]
for (let i = arr.length-1; i>0; i--){
    arr[i]=arr[i-1]
}
arr[0] = copy
console.log(arr)

//Nested loop
for (let i = 1; i <= 4; i++){
    console.log(i + "excutions")
    for (let j = 1; j <= 3; j++){
        console.log("hello")
    }
}

//Rotataion with target
let arr = [1, 2, 3, 4, 5]
let tar = 5
let k=tar%arr.length
for (let j = 0; j < k; j++){
    let copy = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = copy;
}

console.log(arr)

//LEETCODE

//189. Rotate Array
function rotation(nums, k) {
  let n = nums.length;
  k = k % n;
  for (let j = 0; j < k; j++) {
    let copy = nums[n - 1];
    for (let i = n - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = copy;
  }
  return nums;
}
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotation(nums, k));

//26. Remove Duplicates from Sorted Array IN LEETCODE
function Remove(nums) {
    let j=1
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]!=nums[i+1]){
            nums[j]=nums[i+1]
            j++
        }
    }
    return j
};
//Merge Two Sorted Array
let arr1 = [2, 5, 6]
let arr2 = [1, 3, 4, 8]
let merge = new Array(arr1.length + arr2.length)
let i = j = k = 0
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        merge[k++]=arr1[i++]
    } else {
        merge[k++]=arr2[j++]
    }
}
while (j < arr2.length) {
    merge[k++]=arr2[j++]
}
while (i < arr1.length) {
  merge[k++] = arr1[i++];
}
console.log(merge)
*/

// 88. Merge Sorted Array
function twoArray(nums1, m, nums2, n) {
    let merge=[]
    let i=j=k=0
    while(i<m&&j<n){
        if(nums1[i]<nums2[j]){
            merge[k++]=nums1[i++]
        }else{
            merge[k++]=nums2[j++]
        }
    }
    while(j<n){
        merge[k++]=nums2[j++]
    }
    while(i<m){
        merge[k++]=nums1[i++]
    }
    for(let i=0;i<merge.length;i++){
        nums1[i]=merge[i]
    }
    return
};
