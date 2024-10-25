const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Deque {
    constructor(nums) {
        this.arr = nums;
        this.head = 0;
        this.tail = nums.length;
        this.isReversed = false;
    }

    push_front(value) {
        if (this.isReversed) {
            this.arr[this.tail++] = value;
        } else {
            this.head--;
            this.arr[this.head] = value;
        }
    }

    push_back(value) {
        if (this.isReversed) {
            this.head--;
            this.arr[this.head] = value;
        } else {
            this.arr[this.tail++] = value;
        }
    }

    pop_front() {
        if (this.size() === 0) throw new Error();
        return this.isReversed ? this.arr[--this.tail] : this.arr[this.head++];
    }

    pop_back() {
        if (this.size() === 0) throw new Error();
        return this.isReversed ? this.arr[this.head++] : this.arr[--this.tail];
    }

    size() {
        return this.tail - this.head;
    }

    R() {
        this.isReversed = !this.isReversed;
    }
}

function solution(input) {
    let t = Number(input[0]);
    let arr = input.slice(1).map((ele) => ele.trim());
    let target = [];
    for (let i = 0; i < arr.length; i += 3) {
        target.push(arr.slice(i, i + 3));
    }

    let answer = [];
    for (let i = 0; i < t; i++) {
        let [cmd, cases, nums] = target[i];
        nums = JSON.parse(nums);
        let deque = new Deque(nums);

        let isError = false;
        for (let ele of cmd) {
            if (ele === 'R') {
                deque.R();
            } else if (ele === 'D') {
                if (deque.size() === 0) {
                    answer.push('error');
                    isError = true;
                    break;
                } else {
                    deque.pop_front();
                }
            }
        }

        if (!isError) {
            let result = deque.isReversed
                ? deque.arr.slice(deque.head, deque.tail).reverse()
                : deque.arr.slice(deque.head, deque.tail);
            answer.push(JSON.stringify(result));
        }
    }

    return answer.join('\n');
}

console.log(solution(input));
