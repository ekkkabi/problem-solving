import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    sen = input().strip().split(' ')
    answer = []
    for i in sen:
        answer.append(i[::-1])
    print(' '.join(answer))
