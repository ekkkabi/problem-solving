import sys

n, m = (map(int, sys.stdin.readline().strip().split(' ')))
arr = list(map(int, sys.stdin.readline().strip().split(' ')))


st = 0
en = 0

sums = arr[st]
count = 0

for st in range(n):
    while (en < n and sums < m):
        en += 1
        if (en != n):
            sums += arr[en]

    if (en == n):
        break
    if (sums == m):
        count += 1
    sums -= arr[st]


print(count)
