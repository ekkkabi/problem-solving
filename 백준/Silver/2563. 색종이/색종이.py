import sys
input = sys.stdin.readline

n = int(input())
board = [[0] * (101) for _ in range(101)]

for _ in range(n):
    x, y = map(int, input().strip().split())
    for i in range(x, x+10):
        for j in range(y, y+10):
            board[i][j] += 1

answer = 0
for i in range(101):
    for j in range(101):
        if (board[i][j] >= 1):
            answer += 1
print(answer)
