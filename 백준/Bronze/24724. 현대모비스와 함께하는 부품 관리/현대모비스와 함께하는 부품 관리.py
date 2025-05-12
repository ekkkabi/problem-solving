import sys
input = sys.stdin.readline

t = int(input())
for i in range(t):
    n = int(input())
    a, b = map(int, input().strip().split(' '))
    lst = [tuple(map(int, input().strip().split())) for _ in range(n)]
    print(f'Material Management {i+1}')
    print('Classification ---- End!')
