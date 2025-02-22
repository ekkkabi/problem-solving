function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b) => a-b)

    for (let ele of d){
        budget -= ele
        if(budget < 0)
            break
        answer += 1        
    }
    
    return answer;
}