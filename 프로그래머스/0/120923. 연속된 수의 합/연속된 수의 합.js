function solution(num, total) {
    var answer = [];
    let r = parseInt(total / num);
    let size = parseInt((num-1)/2);
    
    if(num % 2 !== 0){
        for(let i = r - size; i<= r + size; i++){
            answer.push(i);
        }
    }
    else{
        for(let j = r - size; j<= r + size; j++){
            answer.push(j);
        }
        let sum = answer.reduce((acc, curr) => acc + curr);
        let len = answer.length;
        if(sum += (1+answer[len-1])) answer.push(1+answer[len-1]);
        else answer.push(answer[0] -1);        
    }
    
    return answer.sort((a,b) => a-b);
}
