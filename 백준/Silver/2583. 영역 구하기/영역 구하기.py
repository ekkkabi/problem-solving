import queue

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

M, N, K = map(int, input().split())

inputs = [list(map(int, input().split(' '))) for _ in range(K)]
visits = [[False for _ in range(N)] for _ in range(M)]
board = [[1 for _ in range(N)] for _ in range(M)]

# 구역별 0-1 표시
for i in range(K):
    nx1, ny1, nx2, ny2 = inputs[i]
    for j in range(ny1, ny2):
        for k in range(nx1, nx2):
            board[j][k] = 0


total = 0
counts = []
Q = queue.Queue()

for i in range(M):
    for j in range(N):
        # 이미 방문 or 0 인 구역 -> 패스
        if (visits[i][j] or board[i][j] == 0):
            continue

        # 아닌 경우, 방문 처리 및 큐 삽입, 카운트
        visits[i][j] = True
        Q.put([i, j])
        total += 1
        count = 0

        while not Q.empty():
            count += 1
            curX, curY = Q.get()
            for dir in range(4):
                nX = curX + dx[dir]
                nY = curY + dy[dir]

                if (nX < 0 or nX >= M or nY < 0 or nY >= N):
                    continue
                if (visits[nX][nY] or board[nX][nY] != 1):
                    continue

                visits[nX][nY] = True
                Q.put([nX, nY])

        counts.append(count)

counts.sort()
print(total)
print(' '.join(map(str, counts)))
