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
        if (this.head === this.tail) return null;
        return this.arr[this.head++];
    }

    size() {
        return this.tail - this.head;
    }
}

function solution(input) {
    let [n, k] = input[0].split(' ').map(Number);
    let SIZE = 100001;

    // 방문 여부 확인 배열 변수 선언 및 초기화
    const visit = Array(SIZE).fill(-1);
    const dx = [-1, 2, 1];

    let Q = new Queue();

    visit[n] = 0;
    Q.enqueue(n);

    while (visit[k] === -1) {
        const curX = Q.dequeue();

        for (let dir = 0; dir < 3; dir++) {
            const nx = dx[dir] === 2 ? curX * dx[dir] : curX + dx[dir];

            // 새 위치가 컨테이너 범위를 넘어갔는지 확인
            if (nx < 0 || nx > SIZE) continue;
            // 이미 이동 위치 마크한 경우 제외
            if (visit[nx] !== -1) continue;

            // 새 위치 방문 표시
            visit[nx] = visit[curX] + 1;
            // 새 위치 큐에 추가 => 나중에 탐색됨
            Q.enqueue(nx);
        }
    }

    return visit[k];
}

console.log(solution(input));
