function solution(arr, queries) {
    let answer = [];
    for(let i = 0; i<queries.length; i++){
        let s = queries[i][0];
        let e = queries[i][1];
        let k = queries[i][2];
        
        let all_i = [...Array(e-s+1)].map((_, j) => j+s);
        let big_k = all_i.map((ele) => arr[ele]).filter((value) => value > k);
        let small_arr = big_k.length > 0 ? Math.min(...big_k) : -1;
        answer.push(small_arr);        
    }
    return answer;
}