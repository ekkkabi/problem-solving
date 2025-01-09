n = int(input())
s = [0] + [int(input()) for _ in range(n)]
d = [[0] * 3 for _ in range(n+1)]

# 초기값 설정
d[1][1] = s[1]
d[1][2] = 0
if n > 1:
    d[2][1] = s[2]
    d[2][2] = s[1] + s[2]

for i in range(3, n+1):
    # d[k][1] 현재까지 1개 계단 연속. k 번째 계단까지 올라섰을 때 점수
    # k 번쨰 계단 밟기 전, 한 계단 쉼 =>  ▢ ▢ ■ ▢ ■
    d[i][1] = max(d[i-2][1], d[i-2][2]) + s[i]
    # 바로 전 단계 밟고, 현재 계단도 밟음 =>  ▢ ▢ ■ ■
    d[i][2] = d[i-1][1] + s[i]

if n == 1:
    print(s[1])
else:
    print(max(d[n][1], d[n][2]))