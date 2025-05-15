import sys
input = sys.stdin.readline

n = int(input())
answer = []

i = 2
target = n
while (i <= target):
    if (target == 0):
        break
    if (target % i == 0):
        target = target // i
        answer.append(i)
        i = 2
    else:
        i += 1
print(*answer, sep='\n')
