function solution(my_string, m, c) {
    let answer = '';
    for(let i = 1; i<=Number(my_string.length/m); i++){
        let n = (c-1) + (i-1)*m;
        answer += my_string[n];
    }
    return answer;
}