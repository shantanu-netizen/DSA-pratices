let str = "abc bca abc"
let arr = str.split(" ")
let freq = new Map()
for (let i = 0; i < arr.length; i++){
    if (freq.has(arr[i])) {
        freq.set(arr[i],freq.get(arr[i])+1)
    } else {
        freq.set(arr[i],1)
    }
}
let res = ""
let maxfreq=0
for (let [word,count] of freq){
    if (count > maxfreq) {
        maxfreq=count
        res=word
    }
}
console.log(res)