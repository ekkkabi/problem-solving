import sys
input = sys.stdin.readline

n = int(input())
cnt = 0
m = 1000 - n
for coin in [500, 100, 50, 10, 5, 1]:
    q = m // coin
    m %= coin
    cnt += q
print(cnt)