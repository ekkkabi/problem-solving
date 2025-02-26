import sys
input = sys.stdin.readline

k, n = map(int, (input().strip().split(' ')))
arr = [int(input()) for _ in range(k)]

left, right = 1,  max(arr)

while (left <= right):
    mid = (left + right) // 2
    cnt = 0
    for ele in arr:
        cnt += ele // mid

    if cnt >= n:
        left = mid + 1
    else:
        right = mid - 1

print(right)
