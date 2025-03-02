from collections import deque
import sys
input = sys.stdin.readline

n = int(input().strip())
m = int(input().strip())

graph = [[] for _ in range(n + 1)]
visited = [False] * (n + 1)

for _ in range(m):
    a, b = map(int, input().strip().split(' '))
    graph[a].append(b)
    graph[b].append(a)

visited[1] = True
Q = deque([1])

cnt = 0
while Q:
    curr = Q.popleft()
    for com in graph[curr]:
        if visited[com] == False:
            Q.append(com)
            visited[com] = True
            cnt += 1

print(cnt)
