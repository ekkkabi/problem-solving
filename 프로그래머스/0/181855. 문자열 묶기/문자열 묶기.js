function solution(strArr) {
    let sets = {};
    strArr.forEach((ele) => {
        let len = ele.length;
        if(sets[len] === undefined)
            sets[len] = 0;
        sets[len] += 1;
    })
    return Math.max(...(Object.values(sets)));
}