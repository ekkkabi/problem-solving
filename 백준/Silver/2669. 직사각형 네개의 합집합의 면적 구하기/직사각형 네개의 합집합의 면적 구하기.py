import sys
input = sys.stdin.readline

board = [[False] * 101 for _ in range(101)]

for _ in range(4):
    x1, y1, x2, y2 = map(int, input().strip().split())
    for row in range(y1, y2):
        for col in range(x1, x2):
            board[row][col] = True

answer = 0
for row in range(101):
    for col in range(101):
        if (board[row][col]):
            answer += 1
print(answer)
