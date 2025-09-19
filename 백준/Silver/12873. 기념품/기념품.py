from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
Q = deque()
for i in range(n):
    Q.append(i+1)

# 한 명이 남을 때까지 계속 진행 -> 단계 업
stage = 1
while (len(Q) > 1):
    skip = (stage**3-1) % len(Q)
    Q.rotate(-skip)
    Q.popleft()

    # 단계 업
    stage += 1

print(Q[0])
