from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
graph = {i: [] for i in range(1, n+1)}
for _ in range(m):
    u, v = map(int, input().strip().split(' '))
    graph[u].append(v)
    graph[v].append(u)


D = deque()
visit = set()
cnt = 0

for i in range(1, n+1):
    if i in visit:
        continue
    D.append(i)
    visit.add(i)
    cnt += 1

    while D:
        curr = D.popleft()
        for num in graph[curr]:
            if (num in visit):
                continue
            D.append(num)
            visit.add(num)

print(cnt)
