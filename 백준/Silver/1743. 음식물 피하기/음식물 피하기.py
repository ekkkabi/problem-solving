from collections import deque
import sys
input = sys.stdin.readline

n, m, k = map(int, input().strip().split(' '))
arr = [[0 for _ in range(m)] for _ in range(n)]
visit = [[False for _ in range(m)] for _ in range(n)]
for _ in range(k):
    r, c = map(int, input().strip().split(' '))
    arr[r-1][c-1] = 1

dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]
answer = []

for i in range(n):
    for j in range(m):
        if (arr[i][j] == 0 or visit[i][j]):
            continue
        D = deque([])
        D.append([i, j])
        visit[i][j] = True

        area = 0

        while (len(D) > 0):
            area += 1
            currX, currY = D.popleft()

            for dir in range(4):
                nx = currX + dx[dir]
                ny = currY + dy[dir]

                if (nx < 0 or nx >= n or ny < 0 or ny >= m):
                    continue
                if (visit[nx][ny] or arr[nx][ny] == 0):
                    continue

                D.append([nx, ny])
                visit[nx][ny] = True

        answer.append(area)


print(max(answer))
