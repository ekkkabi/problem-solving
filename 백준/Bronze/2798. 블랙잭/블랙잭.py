import sys
input = sys.stdin.readline

n, m = map(int, input().split(' '))
arr = list(map(int, input().split(' ')))

mxnum = 0
for i in range(n-2):
    for j in range(i+1, n-1, 1):
        for k in range(j+1, n, 1):
            cmp = arr[i] + arr[j] + arr[k]
            if (cmp <= m):
                mxnum = max(mxnum, cmp)

print(mxnum)
