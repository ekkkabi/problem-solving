import queue

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

N = int(input())
board = [list(input()) for _ in range(N)]
visits = [[False for _ in range(N)] for _ in range(N)]

total = 0
counts = []

Q = queue.Queue()

for i in range(N):
    for j in range(N):
        if (visits[i][j] or board[i][j] == '0'):
            continue

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

                if (nX < 0 or nX >= N or nY < 0 or nY >= N):
                    continue
                if (visits[nX][nY] or board[nX][nY] != '1'):
                    continue

                visits[nX][nY] = True
                Q.put([nX, nY])

        counts.append(count)

print(f'{total}')

counts.sort()
for ele in counts:
    print(ele)
