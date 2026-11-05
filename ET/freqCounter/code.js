function missing(arr) {
    let freq = {}
    for (let num of arr) {
        freq[num]=(freq[num]||0)+1
    }
    for (let i = 1; i <= arr.length; i++){
        if (!freq[i]) {
            return i
        }
    }
}
let arr = [1, 2, 3, 4, 5, 5]
console.log(missing(arr))