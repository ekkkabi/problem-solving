const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Queue {
    constructor(size) {
        this.arr = Array(size)
            .fill()
            .map((_, i) => i + 1);
        this.head = 0;
        this.tail = size;
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

    next() {
        return this.arr[this.head++];
    }
}

function solution(input) {
    const N = parseInt(input[0]);
    let queue = new Queue(N);

    while (queue.size() > 1) {
        queue.next();
        queue.enqueue(queue.next());
    }
    return queue.arr[queue.head];
}

console.log(solution(input));
