function solution(n) {
    let num = Math.sqrt(n)
    return Number.isInteger(num) ? 1 : 2;
}