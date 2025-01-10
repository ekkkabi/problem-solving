t = int(input())

for _ in range(t):
    # k층 n호
    k = int(input())
    n = int(input())

    # 테이블 정의
    d = [[0] * (n) for _ in range(k+1)]
    # 초기화 설정
    # 기본 이차원 배열의 첫번째 원소 : 0
    for i in range(k+1):
        d[i][0] = 1
    # 0 층 호수에 사는 사람 수 초기화
    for j in range(1, n):
        d[0][j] = j+1

    # 구하고자 하는 층호의 사람수 구하기
    for q in range(1, k+1):
        for w in range(1, n):
            d[q][w] = d[q][w-1] + d[q-1][w]

    print(d[k][n-1])
