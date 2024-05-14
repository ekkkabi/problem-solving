function solution(n) {
    let answer = String(n).split('').sort().reverse();
    return  Number(answer.join(''));
}