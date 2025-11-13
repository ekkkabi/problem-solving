T = int(input())


def getPartial(board, isReverse):
    if (isReverse):
        board = list(reversed(board))
    length = len(board[0])
    total = 0
    part = 1
    for i in range(len(board)):
        total += sum(board[i][(length//2-part//2):(length//2+part//2)+1])
        part += 2
    return total


for test_case in range(1, T+1):
    n = int(input())
    board = [list(map(int, input().strip())) for _ in range(n)]
    if (n == 1):
        answer = sum(board[0])
    else:

        answer = sum(board[n//2]) + getPartial(board[:n//2],
                                               False) + getPartial(board[n//2+1:], True)

    print(f'#{test_case} {answer}')
