import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().strip().split()))
b, c = map(int, input().strip().split())

cnt = n
for st in arr:
    total = st - b
    # 총감독만 필요시
    if (total <= 0):
        continue
    # 총감독+부감독 필요시
    q = total // c
    p = total % c
    if (total <= c):
        cnt += 1
        continue
    if (p == 0):
        cnt += q
    else:
        cnt += q + 1


print(cnt)
