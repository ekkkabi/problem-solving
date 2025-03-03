import queue
import sys
input = sys.stdin.readline


def bfs(board, w, h):
    cnt = 0
    visit = [[False for _ in range(w)] for _ in range(h)]

    Q = queue.Queue()

    dx = [1, 0, -1, 0, 1, -1, 1, -1]
    dy = [0, 1, 0, -1, 1, 1, -1, -1]

    for i in range(h):
        for j in range(w):

            # 이미 방문한 경우 or 바다인 경우
            if (visit[i][j] or board[i][j] == 0):
                continue

            Q.put([i, j])
            visit[i][j] = True
            cnt += 1

            while not Q.empty():
                curX, curY = Q.get()
                for dir in range(8):
                    nx = curX + dx[dir]
                    ny = curY + dy[dir]

                    if nx < 0 or ny < 0 or nx >= h or ny >= w:
                        continue
                    if (visit[nx][ny] or board[nx][ny] == 0):
                        continue

                    visit[nx][ny] = True
                    Q.put([nx, ny])
    return cnt


while True:
    w, h = map(int, input().strip().split(' '))

    # 입력 종료
    if w == 0 and h == 0:
        break

    board = [list(map(int, input().strip().split(' '))) for _ in range(h)]
    print(bfs(board=board, w=w, h=h))
