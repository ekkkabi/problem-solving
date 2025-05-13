import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split())
board = [list((input().strip()))
         for _ in range(n)]
answer = []
for h in range(0, n-7):
    for w in range(0, m-7):
        # 1. 보드 8*8 자르기
        sep = []
        for row in board[h:h+8]:
            slices = row[w: w+8]
            sep.append(slices)

        # 2. 다시 색칠해야할 칸 카운트
        cnt1, cnt2 = 0, 0
        start = sep[0][0]
        for i in range(8):
            for j in range(8):
                if (i+j) % 2 == 0:
                    if sep[i][j] != 'W':
                        cnt1 += 1
                    if sep[i][j] != 'B':
                        cnt2 += 1

                else:
                    if sep[i][j] != 'B':
                        cnt1 += 1
                    if sep[i][j] != 'W':
                        cnt2 += 1

        answer.append(min(cnt1, cnt2))

print(min(answer))
