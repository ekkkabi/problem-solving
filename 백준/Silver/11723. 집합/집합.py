import sys
input = sys.stdin.readline

m = int(input())

s = set()
for _ in range(m):
    order = input().strip()
    if (order == 'all'):
        s = {i for i in range(1, 21)}
    elif (order == 'empty'):
        s.clear()

    else:
        order, num = order.split()
        num = int(num)
        if (order == 'add'):
            s.add(num)
        elif (order == 'remove'):
            s.discard(num)
        elif (order == 'check'):
            if (num in s):
                print(1)
            else:
                print(0)
        elif (order == 'toggle'):
            if (num in s):
                s.remove(num)
            else:
                s.add(num)
