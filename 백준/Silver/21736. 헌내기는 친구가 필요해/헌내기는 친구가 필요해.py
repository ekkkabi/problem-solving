from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split())
campus = [list(input().strip())
          for _ in range(n)]

answer = 0
Q = deque()
visit = [[False] * m for _ in range(n)]

currX, currY = 0, 0
for i in range(n):
    for j in range(m):
        if (campus[i][j] == 'I'):
            currX = i
            currY = j
visit[currX][currY] = True
Q.append((currX, currY))

dir = [(1, 0), (0, 1), (-1, 0), (0, -1)]
while (Q):
    currX, currY = Q.popleft()

    for d in dir:
        nx = currX + d[0]
        ny = currY + d[1]

        # x, y 좌표가 캠퍼스 크기 초과시 패스
        if (nx < 0 or ny < 0 or nx > n-1 or ny > m-1):
            continue

        # 이미 방문 혹은 벽일 경우 패스
        if (visit[nx][ny] or campus[nx][ny] == 'X'):
            continue

        Q.append((nx, ny))
        visit[nx][ny] = True

        if (campus[nx][ny] == 'P'):
            answer += 1

if answer == 0:
    print('TT')
else:
    print(answer)
