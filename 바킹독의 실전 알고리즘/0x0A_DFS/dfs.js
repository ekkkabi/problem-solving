const board = [
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]; // 1 : 파란 칸, 0 : 빨간 칸

// n = 행의 수, m = 열의 수
const n = 7,
    m = 10;

// 방문 여부를 저장하는 2차원 배열
const vis = Array.from({ length: n }, () => Array(m).fill(false));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function dfs() {
    const S = [];

    // 시작점 방문 처리
    vis[0][0] = true;
    S.push([0, 0]);

    while (S.length > 0) {
        // 스택의 맨 위 빼기 => 현재 탐핵할 위치
        const [curX, curY] = S.pop();
        console.log(`(${curX}, ${curY}) -> `);

        // 현재 위치에서 상하좌우 네 방향 차례로 살펴봄
        for (let dir = 0; dir < 4; dir++) {
            // 현재 위치에서 특정방향dif 로 한칸 이동한 새 위치 계산
            const nx = curX + dx[dir];
            const ny = curY + dy[dir];

            // 새 위치가 컨테이너 범위를 넘어갔는지 확인
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            // 새 위치가 이동할 수 없는 곳 혹은 방문했는지 확인
            if (vis[nx][ny] || board[nx][ny] !== 1) continue;

            // 새 위치 방문 표시
            vis[nx][ny] = true;
            // 새 위치  스택에 추가
            S.push([nx, ny]);
        }
    }
}

dfs();
