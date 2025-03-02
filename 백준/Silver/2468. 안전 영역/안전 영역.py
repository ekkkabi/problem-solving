import queue
import sys
input = sys.stdin.readline

n = int(input().strip())
board = [list(map(int, input().strip().split())) for _ in range(n)]

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]


arr = []

minH = min(map(min, board))
maxH = max(map(max, board))

for height in range(minH-1, maxH+1, 1):
    num = 0
    visit = [[False for _ in range(n)] for _ in range(n)]

    for i in range(n):
        for j in range(n):
            if board[i][j] <= height or visit[i][j]:
                continue

            Q = queue.Queue()
            visit[i][j] = True
            Q.put([i, j])
            num += 1

            while (Q.qsize() > 0):
                curX,  curY = Q.get()

                for dir in range(4):
                    nx = curX + dx[dir]
                    ny = curY + dy[dir]

                    if (nx < 0 or nx >= n or ny < 0 or ny >= n):
                        continue
                    if (visit[nx][ny] or board[nx][ny] <= height):
                        continue

                    visit[nx][ny] = True
                    Q.put([nx, ny])
    arr.append(num)

print(max(arr))
