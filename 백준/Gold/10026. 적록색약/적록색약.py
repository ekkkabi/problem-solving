from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
picture = [list(input().strip())
           for _ in range(n)]

# 적록색약 이미지 변환환
b_picture = [arr[:] for arr in picture]
for i in range(n):
    for j in range(n):
        if (picture[i][j] == 'G'):
            b_picture[i][j] = 'R'


def solution(target, img):
    Q = deque()
    visit = [[False] * n for _ in range(n)]
    dir = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    cnt = 0

    for i in range(n):
        for j in range(n):
            if (not visit[i][j] and img[i][j] == target):
                Q.append((i, j))
                visit[i][j] = True
                cnt += 1

                while (Q):
                    currX, currY = Q.popleft()
                    for d in dir:
                        nx = currX + d[0]
                        ny = currY + d[1]

                        if (nx < 0 or ny < 0 or ny > n-1 or nx > n-1):
                            continue
                        if (visit[nx][ny] or img[nx][ny] != target):
                            continue

                        visit[nx][ny] = True
                        Q.append((nx, ny))

    return cnt


a_answer = sum([
    solution('R', picture),
    solution('G', picture),
    solution('B', picture)
])

b_answer = sum([
    solution('R', b_picture),
    solution('B', b_picture)
])

print(a_answer, b_answer, sep=' ')
