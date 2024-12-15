import queue

# 테스트 케이스 개수
T = int(input())

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

for i in range(T):
    m, n, k = map(int, input().split())
    visit = [[False for j in range(n)] for i in range(m)]
    board = [[0 for j in range(n)] for i in range(m)]
    Q = queue.Queue()

    # 배추흰지렁이 카운트 변수 초기화
    count = 0

    # 배추 심어져 있는 위치 표시
    for j in range(k):
        x, y = map(int, input().split())
        board[x][y] = 1

    # 배추흰지렁이 개수 카운트
    for q in range(m):
        for w in range(n):
            # 카운트 X, 이미 방문한 경우
            if (board[q][w] == 0 or visit[q][w]):
                continue
            visit[q][w] = True
            Q.put([q, w])

            while not (Q.empty()):
                curX, curY = Q.get()
                for e in range(4):
                    nx = curX + dx[e]
                    ny = curY + dy[e]

                    if (nx < 0 or nx >= m or ny < 0 or ny >= n):
                        continue
                    if (visit[nx][ny] or board[nx][ny] != 1):
                        continue

                    visit[nx][ny] = True
                    Q.put([nx, ny])
            count += 1

    print(count, end=' ')
