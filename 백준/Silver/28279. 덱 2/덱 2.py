from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
D = deque()
for _ in range(n):
    orders = list(map(int, input().strip().split()))
    num = orders[0]

    if (num == 1):
        D.appendleft(orders[1])
    elif (num == 2):
        D.append(orders[1])
    elif (num == 3):
        if (len(D) == 0):
            print(-1)
        else:
            print(D.popleft())
    elif (num == 4):
        if (len(D) == 0):
            print(-1)
        else:
            print(D.pop())
    elif (num == 5):
        print(len(D))
    elif (num == 6):
        if (len(D) == 0):
            print(1)
        else:
            print(0)
    elif (num == 7):
        if (len(D) == 0):
            print(-1)
        else:
            print(D[0])
    else:
        if (len(D) == 0):
            print(-1)
        else:
            print(D[len(D)-1])
