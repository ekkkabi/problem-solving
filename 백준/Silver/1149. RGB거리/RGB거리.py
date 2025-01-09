n = int(input())
costs = [list(map(int, input().strip().split(' '))) for _ in range(n)]

d = [[0] * 3 for _ in range(n)]

# 첫 번쨰 집의 초기값
d[0][0] = costs[0][0]
d[0][1] = costs[0][1]
d[0][2] = costs[0][2]

# 두번째 ~ 마지막 집 최소비용 계산
for i in range(1, n):
    # i 번쨰 집 색 : 레드
    d[i][0] = min(d[i-1][1], d[i-1][2]) + costs[i][0]
    # i 번쨰 집 색 : 그린
    d[i][1] = min(d[i-1][0], d[i-1][2]) + costs[i][1]
    # i 번쨰 집 색 : 블루
    d[i][2] = min(d[i-1][1], d[i-1][0]) + costs[i][2]

print(min(d[n-1]))