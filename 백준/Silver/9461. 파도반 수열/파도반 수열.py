import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())

    if n < 6:
        arr = [0, 1, 1, 1, 2, 2]
        print(arr[n])
        continue

    dp = [0] * (n+1)
    dp[1], dp[2], dp[3], dp[4], dp[5] = 1, 1, 1, 2, 2

    for i in range(6, n+1):
        dp[i] = dp[i-3] + dp[i-2]
    print(dp[n])
