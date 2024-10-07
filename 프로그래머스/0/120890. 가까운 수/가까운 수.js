function solution(array, n) {
    var answer = [];
    let minDiff = Math.abs(n - array[0]); 
    for(let ele of array){
        let diff = Math.abs(n-ele);
        if(diff < minDiff){
            minDiff = diff;
            answer = [ele];
        }
        else if(diff===minDiff){
            answer.push(ele)
        }
    }
    return answer.sort((a,b)=>a-b)[0];
}