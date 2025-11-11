T = int(input())


for test_case in range(1, T+1):
    n = int(input())

    answer = [[1], [1, 1]]
    if (n == 1):
        answer = [[1]]
    elif (n > 2):
        for i in range(2, n):
            lst = [1]
            for j in range(len(answer[-1])-1):
                lst.append(answer[-1][j]+answer[-1][j+1])
            lst.append(1)
            answer.append(lst)

    print(f'#{test_case}')
    for nums in answer:
        print(*nums)
