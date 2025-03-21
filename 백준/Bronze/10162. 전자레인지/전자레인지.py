import sys
input = sys.stdin.readline

n = int(input())
answer = []
for sec in [300, 60, 10]:
    q = n // sec
    n %= sec
    answer.append(q)
if (n != 0):
    print(-1)
else:
    print(*answer)