import sys
input = sys.stdin.readline

n, k = map(int, input().split(' '))
cours = list(map(int, input().strip().split()))
courss = [0] + cours + cours[::-1]

sums, stage = 0, 0
for i in range(1, n*2+1):
    sums += courss[i]

    if (i <= n):
        stage = i
    else:
        stage = 2 * n - i + 1

    if (sums > k):
        break
print(stage)
