import queue
import sys
input = sys.stdin.readline

t = int(input())

dx = [2, 2, 1, 1, -1, -1, -2, -2]
dy = [1, -1, 2, -2, 2, -2, 1, -1]


for _ in range(t):
    l = int(input())
    currX, currY = (map(int, (input().strip().split(' '))))
    targetX, targetY = (map(int, (input().strip().split(' '))))

    visit = array = [[True for _ in range(l)] for _ in range(l)]
    Q = queue.Queue()
    cnt = 0
    Q.put([currX, currY, cnt])

    while (Q.qsize() > 0):
        currX, currY, cnt = Q.get()

        if (currX == targetX and currY == targetY):
            break

        for dir in range(8):
            nx = currX + dx[dir]
            ny = currY + dy[dir]

            if (nx < 0 or nx >= l or ny < 0 or ny >= l):
                continue
            if (not visit[nx][ny]):
                continue

            visit[nx][ny] = False

            Q.put([nx, ny, cnt + 1])

    print(cnt)
