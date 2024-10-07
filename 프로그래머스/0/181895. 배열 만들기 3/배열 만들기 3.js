function solution(arr, intervals) {
    let answer = [];
    for(let i = 0; i<intervals.length; i++){
        let s = intervals[i][0];
        let e = intervals[i][1];
        
        let slices = arr.slice(s, e+1);
        answer = answer.concat(slices);
    }
    return answer;
}