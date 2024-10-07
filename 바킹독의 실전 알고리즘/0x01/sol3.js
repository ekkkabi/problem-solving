function solution(input) {
    if (Number.isInteger(Math.sqrt(input))) return 1;
    return 0;
}

console.log(solution(9));
console.log(solution(693953651));
console.log(solution(756580036));
