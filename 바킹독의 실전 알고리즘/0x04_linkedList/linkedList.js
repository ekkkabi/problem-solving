class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 모든 데이터 출력
    printAll() {
        let curr = this.head;
        let output = '[ ';

        while (curr !== null) {
            output += curr.data;
            curr = curr.next;

            if (curr !== null) output += ', ';
        }

        output += ' ]';
        console.log(output);
    }

    // 모든 데이터 제거
    clear() {
        this.head = null;
        this.size = 0;
    }

    // 인덱스 삽입 기능
    insertAt(index, data) {
        if (index < 0 || index > this.size) {
            throw new Error('유효하지 않은 인덱스입니다');
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            newNode.next = curr.next;
            curr.next = newNode;
        }

        this.size++;
    }

    // 마지막에 데이터 삽입
    insertLast(data) {
        this.insertAt(this.size, data);
    }

    // 원하는 인덱스의 데이터를 삭제
    deleteAt(index) {
        if (index >= this.size || index < 0) throw new Error('제거할 수 없습니다');

        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            removeNode = curr.next;
            curr.next = curr.next.next;
        }

        this.size--;
        return removeNode;
    }

    // 마지막 데이터 제거
    deleteLast() {
        this.deleteAt(this.size - 1);
    }

    // 원하는 인덱스에 있는 데이터 읽기
    getNodeAt(index) {
        if (index >= this.size || index < 0) throw new Error('해당 인덱스 값을 읽을 수 없습니다');

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr;
    }
}

const list = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.printAll();

list.insertAt(1, 5);
list.printAll();

const node = list.getNodeAt(1);
console.log(node.data);

const deletedNode = list.deleteAt(1);
list.printAll();

list.deleteLast();
list.printAll();

list.clear();
list.printAll();
