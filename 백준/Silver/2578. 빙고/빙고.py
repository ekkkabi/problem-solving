import sys
input = sys.stdin.readline

dic = dict()
board = []
for i in range(5):
    nums = list(map(int, input().strip().split()))
    for j in range(5):
        dic[nums[j]] = (i, j)
    board.append(nums)

cnt = 0
for _ in range(5):
    says = list(map(int, input().strip().split()))
    for num in says:
        cnt += 1
        x, y = dic[num]
        board[x][y] = 0

        bingo = 0
        for row in board:
            z = 0
            for ele in row:
                if ele == 0:
                    z += 1
            if z == 5:
                bingo += 1
        for col in range(5):
            z = 0
            for row in range(5):
                if board[row][col] == 0:
                    z += 1
            if (z == 5):
                bingo += 1

        z = 0
        for i in range(5):
            if board[i][i] == 0:
                z += 1
        if (z == 5):
            bingo += 1

        z = 0
        for i in range(5):
            if board[i][4-i] == 0:
                z += 1
        if (z == 5):
            bingo += 1


        if (bingo >= 3):
            print(cnt)
            exit()