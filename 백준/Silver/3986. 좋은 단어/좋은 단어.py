import sys
input = sys.stdin.readline

n = int(input())

answer = 0
for _ in range(n):
    tmp = list(input().strip())
    stack = []

    for i in range(len(tmp)):
        curr = tmp[i]
        if (len(stack) == 0):
            stack.append(curr)
        elif (len(stack) != 0 and curr != stack[-1]):
            stack.append(curr)
        else:
            stack.pop()

    if (len(stack) == 0):
        answer += 1

print(answer)
