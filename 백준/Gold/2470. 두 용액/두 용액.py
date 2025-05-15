import sys
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().strip().split()))
lst.sort()

result = []
low, high = 0, n-1
mins = float('inf')
answer = [0, 0]

while (low < high):
    total = lst[low] + lst[high]


    if (abs(total) < abs(mins)):
        mins = total
        answer = [lst[low], lst[high]]

    if (total == 0):
        break
    elif (total < 0):
        low += 1
    else:
        high -= 1


print(*answer)
