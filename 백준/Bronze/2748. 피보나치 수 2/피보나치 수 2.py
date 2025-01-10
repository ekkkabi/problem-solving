n = int(input())

# 1. 테이블 세우기
d = [0] * (n+1)
# 3. 초기화
d[1] = 1

# 2. 점화식
for i in range(2, n+1):
    d[i] = d[i-1] + d[i-2]
print(d[n])
