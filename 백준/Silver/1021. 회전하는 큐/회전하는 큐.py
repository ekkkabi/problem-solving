from collections import deque
import sys
input = sys.stdin.readline


n, m = map(int, input().strip().split(' '))
arr = list(map(int, input().strip().split(' ')))

dq = deque([i for i in range(1, n+1)])
answer = 0
for ele in arr:
    index = dq.index(ele)
    if index == 0:
        dq.popleft()
        continue

    right = len(dq) - index
    # 오른쪽 x 번 이동 & 횟수 증가
    if (right <= index):
        dq.rotate(right)
        answer += right
    # 왼쪽 x 번 이동 & 횟수 증가
    else:
        dq.rotate(-index)
        answer += index

    # 원소 제거
    dq.popleft()

print(answer)
