function solution(k, score) {
    var answer = [];
    
    let honor = []
    // 초기 k 개의 명당
    for (let i = 0; i<score.length && i<k; i++){
        honor.push(score[i])
        honor.sort((a,b) => a-b)
        answer.push(honor[0])
    }
    
    // 이후 명당 변화
    for(let i = k; i<score.length; i++){
        if (score[i]>honor[0]){
            honor.push(score[i]);
            honor.sort((a, b) => a - b);
            honor.splice(0, honor.length -k);
        }
        answer.push(honor[0])        
    }
    
    return answer;
}
