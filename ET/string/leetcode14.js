function prefix(str) {
    let pre = str[0]
    for (let i = 1; i < str.length; i++){
        while (pre !== "" && !str[i].startsWith(pre)) {
            pre=pre.substring(0,pre.length-1)
        }
    }
    return pre
}
let str = ["flower", "flow", "flight"];
prefix(str)
console.log(prefix(str))