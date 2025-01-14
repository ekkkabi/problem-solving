import sys

n, m = (map(int, sys.stdin.readline().strip().split(' ')))
a = [int(sys.stdin.readline().strip()) for _ in range(n)]
a.sort()

min_num = float("inf")
st = 0
en = 0

for st in range(n):
    while (en < n and a[en] - a[st] < m):
        en += 1
    if (en == n):
        break
    min_num = min(min_num, a[en] - a[st])

print(min_num)
