const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [n, m] = input[0].split(' ').map(Number);
    let board = input.map((ele) => ele.trim().split('').map(Number)).slice(1, n + 1);

    // 방문 여부 확인
    const visit = Array.from({ length: n }, () => Array(m).fill(-1));
    const dx = [1, 0, -1, 0],
        dy = [0, 1, 0, -1];

    let Q = [];
    visit[0][0] = 1;
    Q.push([0, 0]);

    while (Q.length > 0) {
        const [curX, curY] = Q.shift();

        for (let dir = 0; dir < 4; dir++) {
            const nx = curX + dx[dir];
            const ny = curY + dy[dir];

            // 새 위치가 컨테이너 범위를 넘어갔는지 확인
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            // 새 위치가 이동할 수 없는 곳 혹은 방문했는지 확인
            if (visit[nx][ny] !== -1 || board[nx][ny] !== 1) continue;

            // 새 위치 방문 표시
            visit[nx][ny] = visit[curX][curY] + 1;
            // 새 위치 큐에 추가 => 나중에 탐색됨
            Q.push([nx, ny]);
        }
    }

    return visit[n - 1][m - 1];
}

console.log(solution(input));
