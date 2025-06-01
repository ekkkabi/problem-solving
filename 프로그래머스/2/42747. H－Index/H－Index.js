function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => -a+b);
    
    for(let i = 1; i<= Math.max(...citations); i++){
        let isCorrect = citations.filter((num) => num >= i).length;
        let isNot = citations.length - isCorrect;
        
        if(isCorrect >= i && isNot<=i)
            answer = Math.max(answer, i)        
    }
    return answer;
}