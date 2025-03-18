from collections import deque
import sys
input = sys.stdin.readline

n, k = map(int, input().strip().split(' '))

D = deque()
MAX_SIZE = 100001
visit = [-1] * MAX_SIZE
cnt = [0] * MAX_SIZE
visit[n], cnt[n] = 0, 1

D.append((n, 0))
while D:
    curr, time = D.popleft()

    for next in (curr - 1, curr + 1, curr * 2):
        if 0 <= next < MAX_SIZE:
            if visit[next] == -1:
                visit[next] = time + 1
                cnt[next] = cnt[curr]
                D.append((next, time + 1))

            elif visit[next] == time + 1:
                cnt[next] += cnt[curr]
print(visit[k], cnt[k], end='\n')
