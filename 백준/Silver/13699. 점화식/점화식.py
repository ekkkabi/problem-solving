import sys
input = sys.stdin.readline

n = int(input())
t = [0] * (n+1)
t[0] = 1

for i in range(1, n+1):
    for j in range(i):
        t[i] += t[j] * t[i - 1 - j]

print(t[n])
