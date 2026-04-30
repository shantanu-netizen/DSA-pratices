/*
function selection(arr) {
  let n = arr.length;
  for (let i = 0; i < n ; i++) {
    small = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
      }
       let temp = arr[small];
       arr[small] = arr[i];
       arr[i] = temp;
  }
}
let arr = [5, 4, 3, 2, 1];
selection(arr);
console.log(arr);
*/
function remove(s) {
    let result = []
    for (let i = 0; i < s.length; i++){
        let found = false
        for (let j = 0; j < result.length; j++){
            if (s[i] === result[j]) {
                found = true
                break
            }
        }
        if(!found) result.push(s[i])
    }
    return result
}
console.log(remove([4, 5, 5, 2, 1, 7]));