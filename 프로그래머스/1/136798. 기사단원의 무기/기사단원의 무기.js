function getMeasureCount(num){
    let cnt = 0
    for (let i = 1; i<=Math.sqrt(num); i++){
        if (num%i === 0){
            if (i === num / i) cnt += 1;
            else cnt += 2;
        }
    }
    return cnt
}

function solution(number, limit, power) {
    var answer = 0;
    
    for (let num = 1; num<= number; num++){
        let primes = getMeasureCount(num)
        
        if(primes>limit){
            answer += power
        }
        
        else{
            answer += primes
        }
    }
    return answer;
}