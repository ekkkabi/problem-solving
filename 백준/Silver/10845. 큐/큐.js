const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input[0]);
    let arr = input.slice(1, n + 1).map((ele) => ele.trim().split(' '));

    let queue = [],
        answer = [];
    for (let i = 0; i < n; i++) {
        let [cmd, val] = arr[i];
        switch (cmd) {
            case 'push':
                queue.push(val);
                break;
            case 'pop':
                if (queue.length > 0) answer.push(queue.shift());
                else answer.push(-1);
                break;
            case 'size':
                answer.push(queue.length);
                break;
            case 'empty':
                if (queue.length > 0) answer.push(0);
                else answer.push(1);
                break;
            case 'front':
                if (queue.length > 0) answer.push(queue[0]);
                else answer.push(-1);
                break;
            case 'back':
                if (queue.length > 0) answer.push(queue[queue.length - 1]);
                else answer.push(-1);
                break;
        }
    }

    return answer.join('\n');
}

console.log(solution(input));
