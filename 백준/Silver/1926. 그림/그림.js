const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [n, m] = input[0].split(' ').map(Number);
    let board = input
        .map((ele) => ele.trim())
        .slice(1, n + 1)
        .map((row) => row.split(' ').map(Number));

    // 방문 여부 확인
    const visit = Array.from({ length: n }, () => Array(m).fill(false));
    const dx = [1, 0, -1, 0],
        dy = [0, 1, 0, -1];

    // 그림의 개수, 가장 넓은 그림의 넓이
    let pNum = 0,
        pMaxArr = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 그림이 아닐경우(0) 혹은 방문한 경우 -> 제외
            if (board[i][j] === 0 || visit[i][j]) continue;

            let Q = [];
            visit[i][j] = 1;
            Q.push([i, j]);
            pNum++;

            let pArea = 0;

            while (Q.length > 0) {
                pArea++;
                const [curX, curY] = Q.shift();

                for (let dir = 0; dir < 4; dir++) {
                    const nx = curX + dx[dir];
                    const ny = curY + dy[dir];

                    // 새 위치가 컨테이너 범위를 넘어갔는지 확인
                    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                    // 새 위치가 이동할 수 없는 곳 혹은 방문했는지 확인
                    if (visit[nx][ny] || board[nx][ny] !== 1) continue;

                    // 새 위치 방문 표시
                    visit[nx][ny] = true;
                    // 새 위치 큐에 추가 => 나중에 탐색됨
                    Q.push([nx, ny]);
                }
            }
            pMaxArr.push(pArea);
        }
    }

    return `${pNum}\n${pMaxArr.length > 0 ? Math.max(...pMaxArr) : 0}`;
}

console.log(solution(input));
