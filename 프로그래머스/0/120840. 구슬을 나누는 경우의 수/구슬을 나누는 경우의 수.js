function solution(balls, share) {
    return (factorial(balls) / (factorial(balls-share) * factorial(share))) ;
}

function factorial(nums){
    let answer = BigInt(1);
    for(let i = nums; i > 0; i--){
        answer *= BigInt(i) 
    }
    return answer;
}