import sys
input = sys.stdin.readline

n = int(input())
if n == 1:
    print(1)
    exit()
elif n == 2:
    print(2)
    exit()

dp = [0] * (n+1)
dp[0], dp[1], dp[2] = 0, 1, 2

for i in range(3, n+1):
    dp[i] = (dp[i-2] + dp[i-1]) % 15746
print(dp[n])
