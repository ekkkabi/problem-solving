import sys

n = int(sys.stdin.readline())
arr = [0] * (10001)

for i in range(n):
    inputs = int(sys.stdin.readline())
    arr[inputs] += 1

for j in range(len(arr)):
    for _ in range(arr[j]):
        print(j)
