N = int(input())
table = [0] * (N + 1)
for i in range(2, N+1):
    # 이전 숫자가 1로 만드는 필요한 횟수 + 1
    # 현재 i 를 1 로 만들기 위한 연산 횟수
    table[i] = table[i-1] + 1
    # 이전 숫자에서 1로 만들기 횟수 + 현재 숫자 1 빼기로 1로 만들수 있는 1
    # i//2 가 먼저 1로 만드는데 필요한 연산 횟수 + 현재 숫자가 i//2 까지 도달하기 위해 2로 나누기한 횟수 1
    # 둘을 비교해 최소를 만듦
    if (i % 2 == 0):
        table[i] = min(table[i], table[i//2] + 1)
    if (i % 3 == 0):
        table[i] = min(table[i], table[i//3] + 1)

print(table[N])
