import sys

n, s = (map(int, sys.stdin.readline().strip().split(' ')))
arr = list(map(int, sys.stdin.readline().strip().split(' ')))

min_num = float('inf')
st = 0
en = 0
total = arr[st]

for st in range(n):
    while (en < n and total < s):
        en += 1
        if (en != n):
            total += arr[en]
    if (en == n):
        break
    min_num = min(min_num, en - st + 1)
    total -= arr[st]

if (min_num == float('inf')):
    min_num = 0
print(min_num)

