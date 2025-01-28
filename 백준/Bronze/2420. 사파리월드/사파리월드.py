import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
print(abs(n-m))