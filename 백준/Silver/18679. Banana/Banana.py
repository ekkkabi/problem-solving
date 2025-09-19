n = int(input())
dict = {}
for _ in range(n):
    a, b, c = (input().strip().split(' '))
    dict[a] = c


t = int(input())
for _ in range(t):
    k = int(input())
    words = list(input().strip().split())

    answer = [dict[t] for t in words]
    print(' '.join(answer))
