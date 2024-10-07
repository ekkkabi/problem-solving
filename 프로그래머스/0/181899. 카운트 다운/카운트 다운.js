function solution(start_num, end_num) {
    let answer = [];
    for(let i = end_num; i <= start_num; i++) {
        answer.push(i);
    }
    return answer.reverse();
}