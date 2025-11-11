T = int(input())


def rotate(board):
    length = len(board[0])
    new_board = []
    for col in range(length):
        lst = []
        for row in range(length-1, -1, -1):
            lst.append(board[row][col])
        new_board.append(''.join(map(str, lst)))
    return new_board


for test_case in range(1, T+1):
    n = int(input())
    board = [list(map(int, input().strip().split()))
             for _ in range(n)]

    answer = [[0] * 3 for _ in range(n)]

    # 90 도 회전
    board90 = rotate(board)
    for i in range(n):
        answer[i][0] = board90[i]

    # 180 도 회전
    board180 = rotate(board90)
    for i in range(n):
        answer[i][1] = board180[i]

    # 180 도 회전
    board270 = rotate(board180)
    for i in range(n):
        answer[i][2] = board270[i]

    print(f'#{test_case}')
    for nums in answer:
        print(*nums)
