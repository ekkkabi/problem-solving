T = int(input())

for test_case in range(1, T+1):
    board = [list(map(int, input().strip().split()))
             for _ in range(9)]

    answer = 1
    # 가로 검사
    for row in range(9):
        sets = set()
        for col in range(9):
            sets.add(board[row][col])
        if (len(sets) != 9):
            answer = 0
            break

    # 세로 검사
    if (answer != 0):
        for col in range(9):
            sets = set()
            for row in range(9):
                sets.add(board[row][col])
            if (len(sets) != 9):
                answer = 0
                break

    # 정사각형 검사
    if (answer != 0):
        for row in range(0, 9, 3):
            for col in range(0, 9, 3):
                sets = set([board[row][col], board[row][col+1], board[row][col+2],
                           board[row+1][col], board[row +
                                                    1][col+1], board[row+1][col+2],
                           board[row+2][col], board[row +
                                                    2][col+1], board[row+2][col+2]]
                           )
                if (len(sets) != 9):
                    answer = 0
                    break
            if (answer == 0):
                break

    print(f'#{test_case} {answer}')
