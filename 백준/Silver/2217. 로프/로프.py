import sys

n = int(sys.stdin.readline())
arr = [int(sys.stdin.readline()) for _ in range(n)]

arr = sorted(arr)

ans = 0
for i in range(1, n+1):
    ans = max(ans, arr[n-i] * i)
print(ans)
