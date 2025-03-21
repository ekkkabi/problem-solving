import sys
input = sys.stdin.readline


def sol(n):
    answer = []

    for coin in [25, 10, 5, 1]:
        q = n // coin
        n %= coin
        answer.append(q)

    return answer


n = int(input())
for _ in range(n):
    n = int(input())
    print(*sol(n))
