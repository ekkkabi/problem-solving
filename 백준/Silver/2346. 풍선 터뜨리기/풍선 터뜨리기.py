from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
s = list(map(int, input().strip().split()))

answer = []

D = deque()
for i in range(1, n+1):
    D.append((i, s[i-1]))

while (D):
    num, idx = D.popleft()
    answer.append(num)

    if (not D):
        break

    if (idx > 0):
        D.rotate(-(idx-1))
    else:
        D.rotate(-idx)

print(*answer)
