from collections import deque
import sys
input = sys.stdin.readline

cnt = 0
f, s, g, u, d = map(int, input().strip().split())

if (u == 0 and d == 0 and s != g):
    print("use the stairs")
elif (s == g):
    print(0)
else:
    disit = [-1 for _ in range(f+1)]
    dir = [u, -d]
    Q = deque()
    Q.append(s)
    disit[s] = 0

    while (Q):
        curr = Q.popleft()

        if (curr == g):
            break

        for d in dir:
            nf = curr + d
            if (nf <= 0 or nf > f):
                continue
            if (disit[nf] != -1):
                continue

            Q.append(nf)
            disit[nf] = disit[curr] + 1

    if (disit[g] < 0):
        print("use the stairs")
    else:
        print(disit[g])
