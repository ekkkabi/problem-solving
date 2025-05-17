import sys
input = sys.stdin.readline

n = int(input())
damage = [list(input().strip())
          for _ in range(n)]
board = [list(input().strip())
         for _ in range(n)]

answer = [[0]*n for _ in range(n)]
dir = [(-1, 0), (1, 0), (0, 1), (0, -1,),
       (-1, 1), (1, 1), (-1, -1), (1, -1)]


def isGameOver():
    for row in range(n):
        for col in range(n):
            if (board[row][col] == 'x'
               and damage[row][col] == '*'):
                return True
    return False


isOver = isGameOver()

for row in range(n):
    for col in range(n):

        if (isOver):
            # 지뢰표시
            if (damage[row][col] == '*'):
                answer[row][col] = '*'
            elif (board[row][col] == '.'):
                answer[row][col] = '.'
            else:
                # 열린 칸에 대해 주변 지뢰찾기
                cnt = 0
                for d in dir:
                    nx = row + d[0]
                    ny = col + d[1]

                    # 범위 나갈경우 패스
                    if (nx < 0 or ny < 0 or nx >= n or ny >= n):
                        continue

                    if (damage[nx][ny] == '*'):
                        cnt += 1
                answer[row][col] = cnt

        else:
            # 아직 열리 않은 칸(닫힌칸)
            if (board[row][col] == '.'):
                answer[row][col] = '.'

            else:
                # 열린 칸에 대해 주변 지뢰찾기
                cnt = 0
                for d in dir:
                    nx = row + d[0]
                    ny = col + d[1]

                    # 범위 나갈경우 패스
                    if (nx < 0 or ny < 0 or nx >= n or ny >= n):
                        continue

                    if (damage[nx][ny] == '*'):
                        cnt += 1
                answer[row][col] = cnt

for i in range(n):
    print(''.join(map(str, answer[i])))
