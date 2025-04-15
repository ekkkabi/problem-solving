import sys
input = sys.stdin.readline

inputs = list(input().strip())
stack = []

answer = 0
for i in range(len(inputs)):
    if (inputs[i] == '('):
        stack.append('(')
    else:
        if (stack and inputs[i-1] == '('):
            stack.pop()
            answer += len(stack)
        else:
            stack.pop()
            answer += 1
print(answer)
