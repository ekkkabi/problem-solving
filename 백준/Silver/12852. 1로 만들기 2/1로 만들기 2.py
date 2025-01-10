n = int(input())

# d 테이블 : i -> 1 로 만들기 위한 최소 연산 횟수
d = [0] * (n+1)
# pre 테이블 : i 에서 어떤 수로 왔는지 저장(경로추적)
pre = [0] * (n+1)

for i in range(2, n+1):
    # 1 을 빼는 경우
    d[i] = d[i-1] + 1
    pre[i] = i-1

    # 2로 나누어지는 경우
    if (i % 2 == 0 and (d[i] > d[i//2] + 1)):
        d[i] = d[i//2] + 1
        pre[i] = i//2

    # 3로 나누어지는 경우
    if (i % 3 == 0 and (d[i] > d[i//3] + 1)):
        d[i] = d[i//3] + 1
        pre[i] = i//3

print(d[n])


path = []
cur = n
while cur != 0:
    path.append(cur)
    cur = pre[cur]
print(' '.join(map(str, path)))
