function solution(arr, queries) {
    for(let i = 0; i<queries.length; i++){
        let idx1 = queries[i][0];
        let idx2 = queries[i][1];
        
        let tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;    
    }
    return arr;
}