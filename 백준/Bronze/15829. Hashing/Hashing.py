import sys
input = sys.stdin.readline

n = int(input())
arr = list(input())
result = 0

for i in range(n):
    result += (ord(arr[i]) - 96) * (31 ** i)

print(result % 1234567891)
