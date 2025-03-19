import sys
input = sys.stdin.readline

n, k = map(int, input().strip().split(' '))
arr = [int(input()) for _ in range(n)]

low, high = min(arr), min(arr)+k
while (low <= high):
    mid = (low + high) // 2
    total = sum(mid - num for num in arr if num < mid)
    if (total <= k):
        low = mid + 1
    else:
        high = mid - 1
print(low - 1)
