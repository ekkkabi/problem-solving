function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => -a+b)
    let left = 0;
    let right = m-1;
    while(right < score.length){
        answer += score[right] * m
        left += m;
        right += m;
    }
    return answer;
}