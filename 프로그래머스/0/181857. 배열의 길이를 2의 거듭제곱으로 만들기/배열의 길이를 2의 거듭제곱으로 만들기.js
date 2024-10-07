function solution(arr) {
    var answer = arr.slice();
    let n = 1;
    let len = arr.length;
    
    while(n<len){
        n *= 2;
    }
    
    for(let i = 0; i<n-len; i++){
        answer.push(0);
    }      
    
    return answer;
}