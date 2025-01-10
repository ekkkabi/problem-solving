import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
arr = [0] + list(map(int, input().strip().split(' ')))

# d 테이블 초기화 : 누적합
d = [0] * (n+1)
for i in range(1, n+1):
    d[i] = d[i-1] + arr[i]

# 각 구간 합 계산
for _ in range(m):
    i, j = map(int, input().strip().split(' '))
    result = d[j] - d[i-1]
    print(result)