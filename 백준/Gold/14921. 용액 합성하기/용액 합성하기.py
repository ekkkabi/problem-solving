import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().strip().split(' ')))
mins = float('inf')
answer = 0

low, high = 0, n-1
while (low < high):
    diff = arr[low] + arr[high]

    if (abs(diff) < abs(mins)):
        mins = diff
        answer = diff

    if (diff < 0):
        low += 1
    elif (diff > 0):
        high -= 1
    else:
        break

print(answer)
