import sys
input = sys.stdin.readline

n = int(input())
lst = [0] + list(map(int, input().strip().split()))

dp = [0] * (n+1)
dp[0] = 0
for i in range(1, n+1):
    for j in range(1, i+1):
        dp[i] = max(dp[i], dp[i-j]+lst[j])


print(dp[n])
