import queue
import sys
input = sys.stdin.readline

n, m, v = map(int, input().strip().split(' '))
board = [[] for _ in range(n+1)]

for _ in range(m):
    i, j = map(int, input().strip().split(' '))
    board[i].append(j)
    board[j].append(i)
    board[i].sort()
    board[j].sort()


def dfs(board, n, v):
    visit = [False] * (n+1)
    stack = []
    answer = []

    stack.append(v)
    visit[v] = True
    answer.append(v)

    while stack:
        curr = stack[-1]  

        # 방문할 수 있는 인접 노드 찾기
        for ele in board[curr]:
            if not visit[ele]:
                visit[ele] = True
                stack.append(ele)
                answer.append(ele)
                break
        else:
            stack.pop()

    return ' '.join(map(str, answer))


def bfs(board, n, v):
    visit = [False] * (n+1)

    # 시작 정점 넣고 방문 체크
    Q = queue.Queue()
    Q.put(v)
    visit[v] = True

    answer = []
    answer.append(v)

    while not Q.empty():
        # 노드 꺼내기
        curr = Q.get()

        # 방문하지 않는 노드 큐에 추가
        for ele in board[curr]:
            if not visit[ele]:
                Q.put(ele)
                visit[ele] = True
                answer.append(ele)

    return ' '.join(map(str, answer))


print(dfs(board=board, n=n, v=v))
print(bfs(board=board, n=n, v=v))
