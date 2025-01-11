import sys

n = int(sys.stdin.readline())
arr = map(int, sys.stdin.readline().strip().split(' '))

arr = sorted(arr)

ans = arr[0]
cnt = arr[0]
for i in range(1, n):
    ans += (cnt + arr[i])
    cnt += arr[i]
print(ans)
