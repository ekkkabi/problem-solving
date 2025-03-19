import sys
input = sys.stdin.readline

m, n = map(int, input().strip().split(' '))
arr = list(map(int, input().strip().split(' ')))


low, high = 1, max(arr)
while (low <= high):
    mid = (low + high) // 2
    total = sum((num // mid) for num in arr if num >= mid)

    if (total >= m):
        low = mid + 1
    else:
        high = mid - 1

print(high)
