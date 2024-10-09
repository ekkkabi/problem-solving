class Deque {
    constructor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }

    push_front(value) {
        for (let i = this.arr.length; i > 0; i--) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[this.head] = value;
        this.tail++;
    }

    push_back(value) {
        this.arr[this.tail++] = value;
    }

    pop_front() {
        if (this.head >= this.tail) throw new Error();
        return this.arr[this.head++];
    }

    pop_back() {
        if (this.head >= this.tail) throw new Error();
        return this.arr[--this.tail];
    }
}

let deque = new Deque();
deque.push_front(1);
deque.push_back(2);
deque.push_back(6);
console.log(deque);

console.log(deque.pop_front());
console.log(deque.pop_back());
