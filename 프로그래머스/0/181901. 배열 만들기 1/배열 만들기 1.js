function solution(n, k) {
    let answer = [];
    for(let i = 1; i<=(Number(n/k)); i++){
        answer.push(i*k);
    }
    return answer;
}