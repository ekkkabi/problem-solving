from collections import deque
import sys
input = sys.stdin.readline

a, b = map(int, input().strip().split(' '))
D = deque()
D.append((a, 1))

while D:
    curr, cnt = D.popleft()

    if (curr == b):
        print(cnt)
        exit()

    num1 = curr * 2
    if num1 <= b:
        D.append((num1, cnt + 1))

    num2 = int(str(curr)+str(1))
    if num2 <= b:
        D.append((num2, cnt + 1))
else:
    print(-1)
