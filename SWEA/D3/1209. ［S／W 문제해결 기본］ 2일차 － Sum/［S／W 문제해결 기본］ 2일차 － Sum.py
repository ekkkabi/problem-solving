# T = int(input())

for test_case in range(10):
    n = int(input())
    lst = [list(map(int, input().strip().split()))
           for _ in range(100)]
    answer = 0

    # 행 가로의 합
    for row in lst:
        answer = max(answer, sum(row))

    # 열 세로의 합
    for col in range(100):
        total = 0
        for row in range(100):
            total += lst[row][col]
        answer = max(answer, total)

    # 대각선의 합(왼->오)
    crossLtoR = 0
    for i in range(100):
        crossLtoR += lst[i][i]
    answer = max(answer, crossLtoR)
    # 대각선의 합(오->왼)
    crossRtoL = 0
    for j in range(100):
        crossRtoL += lst[j][99-j]
    answer = max(answer, crossRtoL)

    print(f'#{n}', answer)
