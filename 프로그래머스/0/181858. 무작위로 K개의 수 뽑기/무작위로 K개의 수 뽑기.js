function solution(arr, k) {
    let answer = [];
    let sets = [...new Set(arr)];
    
    if(sets.length < k){
        answer = [...sets];
        for(let i = 0; i<k-sets.length; i++){
            answer.push(-1);
        }
        return answer
    }
    return sets.slice(0, k)
}