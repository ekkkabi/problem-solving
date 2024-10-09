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
        if (this.head === this.tail) throw new Error();
        return this.arr[this.head++];
    }
}

let quque = new Queue();
quque.enqueue(1);
quque.enqueue(2);
quque.enqueue(6);
console.log(quque);

console.log(quque.dequeue());
