function solution(a, b) {
    let answer = 0;
    let AisEven = a % 2 == 0 ? true : false;
    let BisEven = b % 2 == 0 ? true : false;
    
    if(!AisEven && !BisEven)
        answer += (a**2) + (b**2);
    else if(AisEven && BisEven)
        answer += Math.abs(a-b);
    else
        answer += 2 * (a+b);
    return answer;
}