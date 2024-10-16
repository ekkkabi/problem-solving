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
        if (this.head === this.tail) throw new Error();
        return this.arr[this.head++];
    }

    size() {
        return this.tail - this.head;
    }
}

function solution(input) {
    let [r, c] = input[0].split(' ').map(Number);
    let board = input.slice(1, r + 1).map((ele) => ele.trim().split(''));

    // 방문 여부 확인 배열 변수 선언 및 초기화
    const fire = Array.from({ length: r }, () => Array(c).fill(-1));
    const jihun = Array.from({ length: r }, () => Array(c).fill(-1));

    const dx = [1, 0, -1, 0],
        dy = [0, 1, 0, -1];

    let Q1 = new Queue(),
        Q2 = new Queue();

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (board[i][j] === 'F') {
                Q1.enqueue([i, j]);
                fire[i][j] = 0;
            } else if (board[i][j] === 'J') {
                Q2.enqueue([i, j]);
                jihun[i][j] = 0;
            }
        }
    }

    while (Q1.size() > 0) {
        const [curY, curX] = Q1.dequeue();

        for (let dir = 0; dir < 4; dir++) {
            const nx = curX + dx[dir];
            const ny = curY + dy[dir];

            // 새 위치가 컨테이너 범위를 넘어갔는지 확인
            if (nx < 0 || nx >= c || ny < 0 || ny >= r) continue;
            // 새 위치가 이동할 수 없는 곳 제외
            if (board[ny][nx] == '#' || fire[ny][nx] >= 0) continue;
            // 새 위치 방문 표시
            fire[ny][nx] = fire[curY][curX] + 1;
            // 새 위치 큐에 추가 => 나중에 탐색됨
            Q1.enqueue([ny, nx]);
        }
    }

    while (Q2.size() > 0) {
        const [curY, curX] = Q2.dequeue();

        for (let dir = 0; dir < 4; dir++) {
            const nx = curX + dx[dir];
            const ny = curY + dy[dir];

            if (nx < 0 || nx >= c || ny < 0 || ny >= r) return jihun[curY][curX] + 1;
            if (board[ny][nx] == '#' || jihun[ny][nx] >= 0) continue;
            // 불 번짐 시간 조건 추가
            if (fire[ny][nx] !== -1 && fire[ny][nx] <= jihun[curY][curX] + 1) continue;

            jihun[ny][nx] = jihun[curY][curX] + 1;
            Q2.enqueue([ny, nx]);
        }
    }

    return 'IMPOSSIBLE';
}

console.log(solution(input));
