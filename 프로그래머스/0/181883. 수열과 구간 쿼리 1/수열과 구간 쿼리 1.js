function solution(arr, queries) {
    let answer = arr.slice();
    
    for(let i = 0; i<queries.length; i++){
        let s = queries[i][0];
        let e = queries[i][1];
        
        for(let j = s; j< e+1; j++)
            answer[j] += 1;
    }
    return answer;
}