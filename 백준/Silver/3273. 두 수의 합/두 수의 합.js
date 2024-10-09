const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input[0]),
        x = Number(input[2]);
    let arr = input[1]
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);

    let head = 0,
        rear = n - 1,
        answer = 0;
    while (head < rear) {
        let sum = arr[head] + arr[rear];
        if (sum === x) {
            answer++;
            head++;
            rear--;
        } else if (sum < x) head++;
        else rear--;
    }

    return answer;
}

console.log(solution(input));
