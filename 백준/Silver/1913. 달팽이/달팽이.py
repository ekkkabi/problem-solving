n = int(input())
board = [[0] * n for _ in range(n)]

target = int(input())
tx, ty = 0, 0
row, col = n//2, n//2
board[row][col] = 1

if (target == 1):
    tx, ty = row + 1, col + 1

# 보드 채우기
dir = [(-1, 0), (0, 1), (1, 0), (0, -1)]
step, num = 1, 2
isConvert = 0
isStop = False


while (num <= n*n):
    for dx, dy in dir:
        for _ in range(step):
            row, col = row + dx, col + dy

            if not (0 <= row < n and 0 <= col < n):
                isStop = True
                break
            board[row][col] = num

            if (num == target):
                tx, ty = row + 1, col + 1

            num += 1
            if (num > n*n):
                isStop = True
                break

        if (isStop):
            break

        isConvert += 1
        if (isConvert % 2 == 0):
            step += 1


for row in range(n):
    print(*board[row])
print(f'{tx} {ty}')
