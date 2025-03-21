import sys
input = sys.stdin.readline

n, m, k = map(int, input().strip().split(' '))
print(min(min(n // 2, m), (n + m - k)//3))
