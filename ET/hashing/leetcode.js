//2418 Sort the People
var sortPeople = function (names, heights) {
    let map=new Map()
    for(let i=0;i<names.length;i++){
        map.set(heights[i],names[i])
    }
    heights.sort((a,b)=>b-a)
    for(let i=0;i<heights.length;i++){
        names[i]=map.get(heights[i])
    }
    return names
};

//349 . Intersection of Two Arrays
function Intersection(nums1, nums2) {
    let set1 = new Set(nums1)
    let result = new Set()
    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num)
        }
    }
    return [...result]
}