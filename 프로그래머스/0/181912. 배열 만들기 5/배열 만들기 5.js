function solution(intStrs, k, s, l) {
    let nums = [];
    for(let val of intStrs){
        nums.push(Number(val.slice(s, s+l)));
    }
    return nums.filter((ele) => ele > k);
}