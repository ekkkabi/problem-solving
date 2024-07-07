function solution(sides) {
    let maxNum = Math.max(...sides);
    let sum = sides.reduce((acc, curr) => acc + curr, 0) - maxNum;
    return sum > maxNum ? 1 : 2;
}