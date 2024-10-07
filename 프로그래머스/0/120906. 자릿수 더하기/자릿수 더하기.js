function solution(n) {
    return String(n).split('').map(Number).reduce((acc, curr) => acc + curr);
}