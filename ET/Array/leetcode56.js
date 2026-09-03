//56. Merge Intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let results=[intervals[0]]
    for(let i=1;i<intervals.length;i++){
        let current=intervals[i]
        let last=results[results.length-1]
        if(current[0]<=last[1]){
            last[1]=Math.max(current[1],last[1])
        }else{
            results.push(current)
        }
    }
    return results
};