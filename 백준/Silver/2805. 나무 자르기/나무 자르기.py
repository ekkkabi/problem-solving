import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
arr = list(map(int, input().strip().split(' ')))

low, high = 0, max(arr)
while (low <= high):
    mid = (low + high) // 2
    q = 0
    for ele in arr:
        if (ele > mid):
            q += ele - mid
    if (q >= m):
        low = mid + 1
    else:
        high = mid - 1
print(high)
