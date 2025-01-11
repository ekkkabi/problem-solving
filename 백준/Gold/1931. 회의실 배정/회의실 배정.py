import sys

n = int(sys.stdin.readline())
arr = [list(map(int, sys.stdin.readline().split(' '))) for _ in range(n)]

arr = sorted(arr, key=lambda x: (x[1], x[0]))

answer = 0
cur = 0
for start, end in arr:
    if start >= cur:
        answer += 1
        cur = end
print(answer)
