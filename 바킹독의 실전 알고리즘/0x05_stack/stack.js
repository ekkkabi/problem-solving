class Stack {
    constructor() {
        this.arr = [];
        this.pos = 0;
    }

    push(data) {
        this.arr.push(data);
        this.pos++;
    }

    pop() {
        if (this.pos === 0) throw new Error('스택이 비어있습니다');
        this.pos--;
        return this.arr.pop();
    }

    top() {
        if (this.pos === 0) throw new Error('스택이 비어있습니다');
        return this.arr[this.pos - 1];
    }

    size() {
        return this.arr.length;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(6);
console.log(stack);

console.log(stack.pop());
console.log(`size : ${stack.size()}`);
console.log(stack.top());
