const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Queue {
    constructor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(data) {
        this.arr[this.tail] = data;
        this.tail++;
    }

    dequeue() {
        if (this.head === this.tail) return -1;
        return this.arr[this.head++];
    }

    size() {
        return this.tail - this.head;
    }

    empty() {
        return this.size() === 0 ? 1 : 0;
    }

    front() {
        return this.empty() ? -1 : this.arr[this.head];
    }

    back() {
        return this.empty() ? -1 : this.arr[this.tail - 1];
    }
}

function solution(input) {
    let n = Number(input[0]);
    let arr = input.slice(1, n + 1).map((ele) => ele.trim().split(' '));

    let queue = new Queue(),
        answer = [];
    for (let i = 0; i < n; i++) {
        let [cmd, val] = arr[i];
        switch (cmd) {
            case 'push':
                queue.enqueue(Number(val));
                break;
            case 'pop':
                answer.push(queue.dequeue());
                break;
            case 'size':
                answer.push(queue.size());
                break;
            case 'empty':
                answer.push(queue.empty());
                break;
            case 'front':
                answer.push(queue.front());
                break;
            case 'back':
                answer.push(queue.back());
                break;
        }
    }

    return answer.join('\n');
}

console.log(solution(input));
