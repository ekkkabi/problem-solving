import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
arr = list(map(int, input().strip().split()))

low, high = max(arr), sum(arr)

while (low <= high):
    mid = (low + high)//2
    cnt, total = 1, 0

    for num in arr:
        total += num
        if (total <= mid):
            continue
        else:
            total = num
            cnt += 1
    if (cnt <= m):
        high = mid - 1
    else:
        low = mid + 1
print(low)