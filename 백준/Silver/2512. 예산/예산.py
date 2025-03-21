import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().strip().split()))
m = int(input())

arr.sort()
low, high = 0, max(arr)
while (low <= high):
    mid = (low + high) // 2
    total = sum(min(money, mid) for money in arr)
    if (total <= m):
        low = mid + 1
    elif (total > m):
        high = mid - 1
print(high)
