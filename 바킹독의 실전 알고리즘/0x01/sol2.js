function solution(input, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < i; j++) {
            if (input[i] + input[j] === 100) return 1;
        }
    }
    return 0;
}

console.log(solution([4, 13, 63, 87], 4));
