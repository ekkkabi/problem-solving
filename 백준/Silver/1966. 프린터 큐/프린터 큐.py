from collections import deque
import sys
input = sys.stdin.readline


t = int(input())
for _ in range(t):
    n, m = map(int, input().strip().split(' '))
    importance = list(map(int, input().strip().split(' ')))

    cnt = 0
    Q = deque()
    for i in range(n):
        Q.append((importance[i], i))

    while (Q):
        highV = max(Q)[0]
        value, idx = Q.popleft()

        # 현재 문서가 중요가 최고인 경우
        if (highV == value):
            cnt += 1
            # 현재 문서가 타킷 문서인 경우
            if (idx == m):
                break
            # 현재 문서가 타킷 문서가 아닌 경우
            else:
                continue
        # 나머지 문서들 중 현재 문서보다 중요도 높은 문서 있는 경우우
        else:
            Q.append((value, idx))

    print(cnt)
