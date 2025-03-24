import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
arr = list(map(int, input().strip().split()))
arr.sort()

low, high = 0, n-1
answer = 0
while (low < high):
    total = arr[low] + arr[high]
    if (total == m):
        answer += 1
        low += 1
        high -= 1
    elif (total < m):
        low += 1
    else:
        high -= 1

print(answer)
