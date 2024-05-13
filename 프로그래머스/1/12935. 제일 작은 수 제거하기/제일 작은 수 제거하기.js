function solution(arr) {
    let min = Math.min(...arr);
    let answer = arr.filter((num) => num !== min)
    return (answer.length > 0) ? answer : [-1];
}