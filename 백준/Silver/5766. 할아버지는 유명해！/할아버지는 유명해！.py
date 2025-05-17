import sys
input = sys.stdin.readline

while (True):
    n, m = map(int, input().strip().split())
    order = dict()

    if (n == 0 and m == 0):
        break

    rank = [list(map(int, input().strip().split()))
            for _ in range(n)]

    for row in rank:
        for p in row:
            if (p in order):
                order[p] += 1
            else:
                order[p] = 1

    keys = []
    winner = max(order.values())
    for key, value in order.items():
        if (value == winner):
            keys.append(key)
    for key in keys:
        del order[key]

    answer = []
    second = max(order.values())
    for key, value in order.items():
        if (value == second):
            answer.append(key)

    answer.sort()
    print(*answer)
