from collections import deque

n, k = map(int, input().strip().split(' '))

Q = deque(range(1, n+1))

result = []
while (len(result) < n):
    for j in range(k-1):
        Q.append(Q.popleft())
    result.append(Q.popleft())

print('<' + ', '.join(map(str, result)) + '>')
