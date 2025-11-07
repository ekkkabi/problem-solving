T = int(input())


def check(board):
    answer = 0
    for row in range(n):
        for col in range(n-k+1):
            if (
                # 채울칸 1이며
                board[row][col] == 1
                # 단어수만큼의 리스트의 1 의 합이 같으며
                and (sum(board[row][col:col+k]) == k
                     )
            ):
                # index error 를 범하지 않고
                # 단어 리스트의 다음 숫자가 1이 아닌 0이어야한다.
                # (1) 끝이 아닐경우
                if (col + k < n and board[row][col+k] != 1
                        and (col == 0 or board[row][col-1] == 0)):
                    answer += 1
                # (2) 끝일 경우
                elif (col + k == n and (col == 0 or board[row][col-1] == 0)):
                    answer += 1
    return answer


for test_case in range(1, T+1):
    n, k = map(int, input().strip().split())
    board = [list(map(int, input().strip().split()))
             for _ in range(n)]

    # 가로 체크
    answer = check(board=board)

    # 세로 배열 돌려 체크
    new_board = []
    for col in range(n):
        lst = []
        for row in range(n):
            lst.append(board[row][col])
        new_board.append(lst)
    answer += check(board=new_board)

    print(f'#{test_case}', answer)
