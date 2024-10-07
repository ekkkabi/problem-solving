function solution(input) {
    let ele = 1;
    while (ele * 2 <= input) {
        ele *= 2;
    }
    return ele;
}

console.log(solution(5));
console.log(solution(97615282));
console.log(solution(1024));
