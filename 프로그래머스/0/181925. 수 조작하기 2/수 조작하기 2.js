function solution(numLog) {
    let answer = '';
    for(let i = 0; i<numLog.length; i++){
        let mode = numLog[i+1] - numLog[i];
        switch(mode){
            case 1:
                answer += 'w';
                break;
            case -1:
                answer += 's';
                break;
            case 10:
                answer += 'd';
                break;
            case -10:
                answer += 'a';
                break;
        }
    }
    return answer;
}
console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]))