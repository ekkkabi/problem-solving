from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
arr = [list(input().strip()) for _ in range(m)]


def bfs(target):
    visit = [[False for _ in range(n)]for _ in range(m)]
    D = deque([])

    sums = 0

    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]

    for i in range(m):
        for j in range(n):
            if (visit[i][j] or arr[i][j] != target):
                continue

            D.append([i, j])
            visit[i][j] = True

            power = 0

            while (len(D) > 0):
                power += 1
                currX, currY = D.popleft()

                for dir in range(4):
                    nx = currX + dx[dir]
                    ny = currY + dy[dir]

                    # 보드 범위를 넘어가는 경우
                    if (nx < 0 or nx >= m or ny < 0 or ny >= n):
                        continue
                    # 이미 방문하거나 타킷과 다를 경우
                    if (visit[nx][ny] or arr[nx][ny] != target):
                        continue

                    visit[nx][ny] = True
                    D.append([nx, ny])

            sums += (power ** 2)
    return sums


print(bfs('W'), bfs('B'), end=' ')
