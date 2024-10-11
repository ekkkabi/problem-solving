const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input[0]);
    let arr = input.slice(1, n + 1).map((ele) => ele.trim().split(' '));

    let deque = [],
        answer = [];
    for (let i = 0; i < n; i++) {
        let [cmd, val] = arr[i];
        switch (cmd) {
            case 'push_front':
                deque.unshift(val);
                break;
            case 'push_back':
                deque.push(val);
                break;
            case 'pop_front':
                if (deque.length > 0) answer.push(deque.shift());
                else answer.push(-1);
                break;
            case 'pop_back':
                if (deque.length > 0) answer.push(deque.pop());
                else answer.push(-1);
                break;
            case 'size':
                answer.push(deque.length);
                break;
            case 'empty':
                if (deque.length > 0) answer.push(0);
                else answer.push(1);
                break;
            case 'front':
                if (deque.length > 0) answer.push(deque[0]);
                else answer.push(-1);
                break;
            case 'back':
                if (deque.length > 0) answer.push(deque[deque.length - 1]);
                else answer.push(-1);
                break;
        }
    }

    return answer.join('\n');
}

console.log(solution(input));
