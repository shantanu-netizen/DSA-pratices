function recursion(start, end) {
    if (start > end) {
        return
    }
    console.log(start)
    start++
    recursion(start,end)
}
recursion(1,5)