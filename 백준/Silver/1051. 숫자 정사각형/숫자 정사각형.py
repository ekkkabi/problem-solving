import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split())
board = [list(map(int, input().strip()))
         for _ in range(n)]

answer = min(n, m)
while (answer > 0):

    isFound = False

    # 정사각형 만들기
    for row in range(n-answer+1):
        for col in range(m-answer+1):
            square = []
            for arr in board[row: row+answer]:
                square.append(arr[col:col+answer])

            if (square[0][0] == square[0][-1]
                    and square[0][0] == square[-1][0]
                    and square[-1][-1] == square[-1][0]):
                isFound = True
                break
        if isFound:
            break
    if isFound:
        break
    else:
        answer -= 1

print(answer*answer)
