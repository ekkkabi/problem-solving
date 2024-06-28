function solution(hp) {
    let answer = 0;
    let count = hp; 
    let power = [5,3,1];
    for(let val of power){
        let q = parseInt(count / val);
        answer += q;
        let r = count % val;
        if(r === 0) break;
        count -= q * val;        
    }
    return answer;
}
console.log(solution(24))