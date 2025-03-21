from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().strip().split()))
arr.sort(reverse=True)
gold = 0
Q = deque(arr)
for _ in range(n-1):
    curr = Q.popleft()
    next = Q.popleft()

    gold += (curr + next)
    Q.appendleft(max(curr, next))


print(gold)
