import sys
input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]

stack = []
result = []
curr = 1
for ele in arr:
    if (stack and stack[-1] > ele):
        print("NO")
        break

    while (curr <= ele):
        stack.append(curr)
        result.append('+')
        curr += 1

    stack.pop()
    result.append('-')

else:
    print("\n".join(result))
