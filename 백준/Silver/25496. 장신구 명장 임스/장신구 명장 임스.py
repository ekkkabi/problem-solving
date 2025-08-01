import sys
input = sys.stdin.readline

p, n = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))

answer = 0
i = 0
arr.sort()

while (p < 200 and i < n):
    p += arr[i]
    i += 1
    answer += 1

print(answer)
