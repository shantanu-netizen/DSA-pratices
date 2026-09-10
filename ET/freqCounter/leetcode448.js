//448. Find All Numbers Disappeared in an Array
function disappear(arr) {
    let freq = {}
    for (let num of arr) {
        freq[num]=(freq[num]||0)+1
    }
    let res = []
    for (let i = 1; i <= arr.length; i++){
        if (!freq[i]) {
            res.push(i)
            freq[i]--
        }
    }
    return res
}
let arr = [1, 1];
console.log(disappear(arr))