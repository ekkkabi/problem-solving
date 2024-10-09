function solution(input, n) {
    let arr = input.sort((a, b) => a - b);
    let freq = Array(100).fill(0);

    for (let i = 0; i < n; i++) {
        if (freq[99 - arr[i]] !== 0) return 1;
        freq[arr[i] - 1] = 1;
    }

    return 0;
}

console.log(solution([1, 52, 48], 3));
console.log(solution([50, 42], 2));
console.log(solution([4, 13, 63, 87], 4));
console.log(solution([1, 23, 53, 77, 60], 5));
