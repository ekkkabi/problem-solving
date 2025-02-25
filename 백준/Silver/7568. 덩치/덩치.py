import sys
input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().strip().split(' '))) for _ in range(n)]
answer = []

for i in range(n):
    order = 1
    x, y = arr[i]
    for j in range(n):
        if (i == j):
            continue
        p, q = arr[j]
        if (x < p and y < q):
            order += 1
    answer.append(order)
print(' '.join(map(str, answer)))
