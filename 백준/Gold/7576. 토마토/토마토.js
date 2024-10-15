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
    // n : 열, m : 행
    let [n, m] = input[0].split(' ').map(Number);
    let board = input.slice(1, m + 1).map((ele) => ele.split(' ').map(Number));

    // 방문 여부 확인 배열 변수 선언 및 초기화
    const visit = Array.from({ length: m }, () => Array(n).fill(-1));
    const dx = [1, 0, -1, 0],
        dy = [0, 1, 0, -1];

    let Q = new Queue();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 익은 토마토 큐에 삽입
            if (board[i][j] === 1) {
                visit[i][j] = 1;
                Q.enqueue([i, j]);
            }
            // 덜 익은 토마토 방문 초기화
            if (board[i][j] === 0) visit[i][j] = 0;
        }
    }

    while (Q.size() > 0) {
        const [curY, curX] = Q.dequeue();

        for (let dir = 0; dir < 4; dir++) {
            const nx = curX + dx[dir];
            const ny = curY + dy[dir];

            // 새 위치가 컨테이너 범위를 넘어갔는지 확인
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            // 새 위치가 이동할 수 없는 곳 혹은 이미 토마토가 익어는 경우 제외
            if (visit[ny][nx] === -1 || visit[ny][nx] > 0) continue;

            // 새 위치 방문 표시
            visit[ny][nx] = visit[curY][curX] + 1;
            // 새 위치 큐에 추가 => 나중에 탐색됨
            Q.enqueue([ny, nx]);
        }
    }

    let maxTomato = Math.max(...visit.flat());
    // 익지 않은 토마토가 남아있는지 확인
    if (visit.flat().includes(0)) {
        return -1;
    }
    return maxTomato - 1;
}

console.log(solution(input));
