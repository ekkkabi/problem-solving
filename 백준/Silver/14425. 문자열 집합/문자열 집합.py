import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
arrN = set(input().strip() for _ in range(n))
answer = 0
for _ in range(m):
    if (input().strip() in arrN):
        answer += 1
print(answer)
